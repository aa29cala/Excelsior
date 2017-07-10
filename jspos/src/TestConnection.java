public class TestConnection {
    public static void main(String[] args) {
        for (int i = 0; i < args.length; i++)
            printMessage(args[i]);
    }

    public void printMessage(String message) {
        system.out.print(message);
    }
}