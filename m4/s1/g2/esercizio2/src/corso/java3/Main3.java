package corso.java3;

import java.util.Scanner;

public class Main3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("Inserisci una stringa (digita ':q' per uscire): ");
            String input = scanner.nextLine();

            if (input.equals(":q")) {
                System.out.println("Uscita dal programma.");
                break;
            }

            StringBuilder result = new StringBuilder();
            for (int i = 0; i < input.length(); i++) {
                result.append(input.charAt(i));
                if (i != input.length() - 1) {
                    result.append(", ");
                }
            }
            System.out.println("Stringa suddivisa in caratteri: " + result);
        }

        scanner.close();
    }
}

