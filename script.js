var lowerComment = "";

var main = function () {
    $('form').submit(function (event) {
        var $input = $(event.target).find('input');
        var comment = $input.val();
        lowerComment = comment.toLowerCase();
        var allwords = "";
        // Note the \ at the end of the first line
        var words = new Lexer().lex(comment);
        var taggedWords = new POSTagger().tag(words);
        var wordsToSearch = [];
        var wordCount = 0;
        // THIS IS WHERE THE NLP MAGIC HAPPENS
        for (i in taggedWords) {
            if (wordCount > 0) {
                allwords += " ";
            }
            var taggedWord = taggedWords[i];
            var word = taggedWord[0];
            var tag = taggedWord[1];
            if (tag == "NN" || tag == "NNPS" || tag == "NNS" || tag == "JJ") {
                wordsToSearch.push(word);
                word = stemmer(word);
                allwords += word;
                wordCount++;
            }
        }

        $input.val("");
        /* This make an asychronous HTTP request */
        //for (var w = 0; w < wordsToSearch.length; w++) {
        $.ajax({
            url: 'functions/database_query.php',
            type: 'POST',
            dataType: 'text',
            data: {
                word: allwords
            },
            error: function (data) {
                console.log('ajax error function was triggered');
            },
            complete: responseReceived
        });
        //}

        if (comment !== "") {
            var commentHTML = $('<li class="comment">').text(comment);
            commentHTML.appendTo('#comments');
        }
        //DEMO PARTS OF SPEECH TAGGING
        // $input.val("");
        // var response = $('<li class="response">').text(allwords);
        // response.appendTo('#comments');
        return false;
    });
};
$(document).ready(main);


/* This is called when the server's response is "loaded" */
function responseReceived(data, textStatus, JHXR) {
    var dbResponse = data.responseText; //this.response
    if (dbResponse !== "-1") {
        var result = dbResponse.split("!BREAK!");
        if (result.length === 1) {
            var response = $('<li class="response">').text(dbResponse);
            response.appendTo('#comments');
            createFeedBack();
        } else {
            var response = $('<li class="response">').text(result[3]);
            response.appendTo('#comments');
            insertMedia(result[1], result[2]);
            response = $('<li class="response">').text(result[0]);
            response.appendTo('#comments');
            createFeedBack();
        }

    }
    document.body.scrollTop = document.body.scrollHeight;
}

/* inserts the youtube thumbnail and the picture as well 
 * depending on the length of the response, the program knows if there is a link for either
 */
function insertMedia(vidLink, picLink) {

    var vid = document.createElement("iframe");
    vid.setAttribute("id", "youtube");
    vid.setAttribute("width", "40%");
    vid.setAttribute("height", "40%");
    vid.setAttribute("src", vidLink);
    vid.setAttribute("allowfullscreen", "true");

    var img = document.createElement("img");
    img.setAttribute("id", "picture");
    img.setAttribute("width", "40%");
    img.setAttribute("height", "70%");
    img.setAttribute("src", picLink);
    img.setAttribute("alt", "Image not found!");

    var mediaLi = document.createElement("li");
    var mediaDiv = document.createElement("div");

    mediaDiv.setAttribute("style", "display:inline-block;");
    mediaDiv.appendChild(vid);
    mediaDiv.appendChild(img);
    mediaLi.appendChild(mediaDiv);
    ul.appendChild(mediaLi);

}

/* This is called when the server's response is "loaded" */
function feedbackResponse(data, textStatus, JHXR) {
    var dbResponse = data.responseText; //this.response

    var response = $('<li class="response">').text(dbResponse);
    response.appendTo('#comments');
}

function createFeedBack() {
    var feedbackPrompt = document.createElement("li");
    feedbackPrompt.setAttribute("class", "response");
    feedbackPrompt.setAttribute("id", "feedback");

    var thumbUp = document.createElement("button");
    thumbUp.setAttribute("type", "helpful");
    thumbUp.setAttribute("class", "primary");
    var thumbDown = document.createElement("button");
    thumbDown.setAttribute("type", "helpful");
    thumbDown.setAttribute("class", "primary");
    var spanThumbDown = document.createElement("span");
    spanThumbDown.setAttribute("class", "glyphicon glyphicon-thumbs-down");
    spanThumbDown.setAttribute("aria-hidden", "true");
    spanThumbDown.setAttribute("data-toggle", "modal");
    spanThumbDown.setAttribute("data-target", "#id01");
    var spanThumbUp = document.createElement("span");
    spanThumbUp.setAttribute("class", "glyphicon glyphicon-thumbs-up");
    spanThumbUp.setAttribute("aria-hidden", "true");
    spanThumbUp.setAttribute("data-toggle", "modal");
    spanThumbUp.setAttribute("data-target", "#id02");

    thumbDown.appendChild(spanThumbDown);
    thumbUp.appendChild(spanThumbUp);
    thumbDown.addEventListener("click", processBadFeedback);
    thumbUp.addEventListener("click", processGoodFeedback);

    var thumbLi = document.createElement("li");
    thumbLi.setAttribute("class", "response");
    var text = document.createTextNode("Was this answer helpful?");
    thumbLi.appendChild(text);
    thumbLi.appendChild(document.createElement("br"));
    thumbLi.appendChild(thumbUp);
    thumbLi.appendChild(thumbDown);

    document.querySelector("#comments").appendChild(feedbackPrompt);
    feedbackPrompt.appendChild(thumbLi);
}

function processGoodFeedback(event) {
    var userQuery = lowerComment;
    var buttonGrandParent = this.parentNode.parentNode;
    var excelsiorResponse = buttonGrandParent.previousSibling;
    buttonGrandParent.setAttribute("style", "display:none;");
    var uuid = guid();
    var comment;
    var type = true;

    $('#id02').on('shown.bs.modal', function () {
        $('#textareaGood').focus();
    });

    $("#id02").on('hide.bs.modal', function () {
        comment = $("#textareaGood").val();
        $(this).removeData('bs.modal');
        console.log(uuid);
        console.log(comment);
        console.log(userQuery);
        console.log(excelsiorResponse.innerHTML);
        sendFeedback(type, uuid, comment, userQuery, excelsiorResponse.innerHTML);
        uuid = null;
        comment = null;
        userQuery = null;
        excelsiorResponse = null;
    });
}

/* Process data involved with a bad feedback response */
function processBadFeedback(event) {
    var userQuery = lowerComment;
    var buttonGrandParent = this.parentNode.parentNode;
    var excelsiorResponse = buttonGrandParent.previousSibling;
    buttonGrandParent.setAttribute("style", "display:none;");
    var uuid = guid();
    var comment;
    var type = false;

    $('#id01').on('shown.bs.modal', function () {
        $('#textareaBad').focus();
    });

    $("#id01").on('hide.bs.modal', function () {
        comment = $("#textareaBad").val();
        $(this).removeData('bs.modal');
        if (uuid != null) {
            console.log(uuid);
            console.log(comment);
            console.log(userQuery);
            console.log(excelsiorResponse.innerHTML);
            sendFeedback(type.toString(), uuid.toString(), comment, userQuery, excelsiorResponse.innerHTML);
        }
        uuid = null;
        comment = null;
        userQuery = null;
        excelsiorResponse = null;
    });
}

/*This function sends the data to the DB*/
function sendFeedback(type, uuid, comment, userQuery, excelsiorResponse) {
    if (uuid == null) {
        return;
    }
    console.log("sendFeedback UUID: " + uuid);
    $.ajax({
        url: 'functions/feedback.php',
        type: 'POST',
        dataType: 'text',
        data: {
            type: type,
            uuid: uuid,
            comment: comment,
            userQuery: userQuery,
            excelsiorResponse: excelsiorResponse
        },
        error: function (data) {
            console.log('ajax error function was triggered');
        },
        complete: feedbackResponse
    });
}

/*This function creates a Universally unique number*/
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}



var stemmer = (function () {
    var step2list = {
            "ational": "ate",
            "tional": "tion",
            "enci": "ence",
            "anci": "ance",
            "izer": "ize",
            "bli": "ble",
            "alli": "al",
            "entli": "ent",
            "eli": "e",
            "ousli": "ous",
            "ization": "ize",
            "ation": "ate",
            "ator": "ate",
            "alism": "al",
            "iveness": "ive",
            "fulness": "ful",
            "ousness": "ous",
            "aliti": "al",
            "iviti": "ive",
            "biliti": "ble",
            "logi": "log"
        },

        step3list = {
            "icate": "ic",
            "ative": "",
            "alize": "al",
            "iciti": "ic",
            "ical": "ic",
            "ful": "",
            "ness": ""
        },

        c = "[^aeiou]", // consonant
        v = "[aeiouy]", // vowel
        C = c + "[^aeiouy]*", // consonant sequence
        V = v + "[aeiou]*", // vowel sequence

        mgr0 = "^(" + C + ")?" + V + C, // [C]VC... is m>0
        meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$", // [C]VC[V] is m=1
        mgr1 = "^(" + C + ")?" + V + C + V + C, // [C]VCVC... is m>1
        s_v = "^(" + C + ")?" + v; // vowel in stem


    function dummyDebug() {}

    function realDebug() {
        console.log(Array.prototype.slice.call(arguments).join(' '));
    }

    return function (w, debug) {
        var
            stem,
            suffix,
            firstch,
            re,
            re2,
            re3,
            re4,
            debugFunction,
            origword = w;

        if (debug) {
            debugFunction = realDebug;
        } else {
            debugFunction = dummyDebug;
        }

        if (w.length < 3) {
            return w;
        }

        firstch = w.substr(0, 1);
        if (firstch == "y") {
            w = firstch.toUpperCase() + w.substr(1);
        }

        // Step 1a
        re = /^(.+?)(ss|i)es$/;
        re2 = /^(.+?)([^s])s$/;

        if (re.test(w)) {
            w = w.replace(re, "$1$2");
            debugFunction('1a', re, w);

        } else if (re2.test(w)) {
            w = w.replace(re2, "$1$2");
            debugFunction('1a', re2, w);
        }

        // Step 1b
        re = /^(.+?)eed$/;
        re2 = /^(.+?)(ed|ing)$/;
        if (re.test(w)) {
            var fp = re.exec(w);
            re = new RegExp(mgr0);
            if (re.test(fp[1])) {
                re = /.$/;
                w = w.replace(re, "");
                debugFunction('1b', re, w);
            }
        } else if (re2.test(w)) {
            var fp = re2.exec(w);
            stem = fp[1];
            re2 = new RegExp(s_v);
            if (re2.test(stem)) {
                w = stem;
                debugFunction('1b', re2, w);

                re2 = /(at|bl|iz)$/;
                re3 = new RegExp("([^aeiouylsz])\\1$");
                re4 = new RegExp("^" + C + v + "[^aeiouwxy]$");

                if (re2.test(w)) {
                    w = w + "e";
                    debugFunction('1b', re2, w);

                } else if (re3.test(w)) {
                    re = /.$/;
                    w = w.replace(re, "");
                    debugFunction('1b', re3, w);

                } else if (re4.test(w)) {
                    w = w + "e";
                    debugFunction('1b', re4, w);
                }
            }
        }

        // Step 1c
        re = new RegExp("^(.*" + v + ".*)y$");
        if (re.test(w)) {
            var fp = re.exec(w);
            stem = fp[1];
            w = stem + "i";
            debugFunction('1c', re, w);
        }

        // Step 2
        re = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
        if (re.test(w)) {
            var fp = re.exec(w);
            stem = fp[1];
            suffix = fp[2];
            re = new RegExp(mgr0);
            if (re.test(stem)) {
                w = stem + step2list[suffix];
                debugFunction('2', re, w);
            }
        }

        // Step 3
        re = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
        if (re.test(w)) {
            var fp = re.exec(w);
            stem = fp[1];
            suffix = fp[2];
            re = new RegExp(mgr0);
            if (re.test(stem)) {
                w = stem + step3list[suffix];
                debugFunction('3', re, w);
            }
        }

        // Step 4
        re = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
        re2 = /^(.+?)(s|t)(ion)$/;
        if (re.test(w)) {
            var fp = re.exec(w);
            stem = fp[1];
            re = new RegExp(mgr1);
            if (re.test(stem)) {
                w = stem;
                debugFunction('4', re, w);
            }
        } else if (re2.test(w)) {
            var fp = re2.exec(w);
            stem = fp[1] + fp[2];
            re2 = new RegExp(mgr1);
            if (re2.test(stem)) {
                w = stem;
                debugFunction('4', re2, w);
            }
        }

        // Step 5
        re = /^(.+?)e$/;
        if (re.test(w)) {
            var fp = re.exec(w);
            stem = fp[1];
            re = new RegExp(mgr1);
            re2 = new RegExp(meq1);
            re3 = new RegExp("^" + C + v + "[^aeiouwxy]$");
            if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
                w = stem;
                debugFunction('5', re, re2, re3, w);
            }
        }

        re = /ll$/;
        re2 = new RegExp(mgr1);
        if (re.test(w) && re2.test(w)) {
            re = /.$/;
            w = w.replace(re, "");
            debugFunction('5', re, re2, w);
        }

        // and turn initial Y back to y
        if (firstch == "y") {
            w = firstch.toLowerCase() + w.substr(1);
        }


        return w;
    }
})();

function generateBowRow(dbPrimaryKey){
    //array containing only stemmed nouns and adj from the db pk
    var taggedTermArray = [];

    //iterates through primaryKeyTermArray and adds adj and nouns to tagged term array
    var words = new Lexer().lex(dbPrimaryKey);
    var taggedWords = new POSTagger().tag(words);
    var wordsToSearch = [];
    // THIS IS WHERE THE NLP MAGIC HAPPENS
    for (i in taggedWords) {
        var taggedWord = taggedWords[i];
        var word = taggedWord[0];
        var tag = taggedWord[1];
        if (tag == "NN" || tag == "NNPS" || tag == "NNS" || tag == "JJ") {
            word = stemmer(word);
            wordsToSearch.push(word);

        }
    }
    console.log(wordsToSearch);
    taggedTermArray = wordsToSearch;
    var bowLine = "array(\"" + dbPrimaryKey + "\",";

    //conctenates pk and stemmed nouns and adjectives into a line of php code to be copied into the bow
    for(var i = 0; i < taggedTermArray.length; i ++){
        if(i == taggedTermArray.length - 1){
            bowLine = bowLine + "\"" + taggedTermArray[i] + "\"),";
        }else{
            bowLine = bowLine + "\"" + taggedTermArray[i] + "\",";
        }
    }
    return bowLine;
}