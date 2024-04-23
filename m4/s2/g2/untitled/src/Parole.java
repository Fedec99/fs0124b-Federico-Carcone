import java.util.*;

public class Parole {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Inserisci il numero di elementi da inserire: ");
        int N = scanner.nextInt();
        scanner.nextLine();

        Set<String> parole = new HashSet<>();
        Set<String> paroleDuplicate = new HashSet<>();

        for (int i = 0; i < N; i++) {
            System.out.print("Inserisci la parola " + (i + 1) + ": ");
            String parola = scanner.nextLine();

            if (!parole.add(parola)) {
                paroleDuplicate.add(parola);
            }
        }

        System.out.println("Parole duplicate:");
        for (String parola : paroleDuplicate) {
            System.out.println(parola);
        }

        System.out.println("Numero di parole distinte: " + parole.size());

        System.out.println("Elenco delle parole distinte:");
        for (String parola : parole) {
            System.out.println(parola);
        }
    }
}