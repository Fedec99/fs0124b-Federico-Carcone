import java.util.Random;
import java.util.Scanner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class array {
    private static final Logger logger = LoggerFactory.getLogger(array.class);

    public static void main(String[] args) {
        int[] array = new int[5];
        Random rand = new Random();
        Scanner scanner = new Scanner(System.in);

        for (int i = 0; i < array.length; i++) {
            array[i] = rand.nextInt(10) + 1;
        }

        printArray(array);

        int position;
        int value;

        while (true) {
            try {
                System.out.print("Inserisci il numero da aggiungere (0 per uscire): ");
                value = scanner.nextInt();

                if (value == 0) {
                    break;
                }

                System.out.print("Inserisci la posizione (0-4): ");
                position = scanner.nextInt();

                if (position < 0 || position >= array.length) {
                    throw new ArrayIndexOutOfBoundsException("Posizione non valida.");
                }

                array[position] = value;

                printArray(array);
            } catch (ArrayIndexOutOfBoundsException e) {
                logger.error("Errore: Posizione non valida. Riprova.");
            } catch (Exception e) {
                logger.error("Errore: Inserimento non valido. Riprova.");
                scanner.next();
            }
        }

        scanner.close();
    }

    private static void printArray(int[] array) {
        System.out.print("Array: ");
        for (int num : array) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}

