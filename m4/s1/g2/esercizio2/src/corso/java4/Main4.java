package corso.java4;

import java.util.Scanner;

public class Main4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Inserisci un numero intero: ");
        int numero = scanner.nextInt();

        if (numero >= 0) {
            System.out.println("Numeri in ordine decrescente fino a zero:");
            for (int i = numero; i >= 0; i--) {
                System.out.println(i);
            }
        } else {
            System.out.println("Errore: devi inserire un numero intero non negativo.");
        }

        scanner.close();
    }
}
