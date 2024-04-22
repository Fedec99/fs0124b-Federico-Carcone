package km;

import java.util.Scanner;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

public class km {
    private static final Logger logger = LoggerFactory.getLogger(km.class);

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double kmPercorsi;
        double litriConsumati;

        try{
            System.out.print("Inserisci il numero di km percorsi: ");
            kmPercorsi = scanner.nextDouble();

            System.out.print("Inserisci i litri di carburante consumati: ");
            litriConsumati = scanner.nextDouble();

            double kmPerLitro = calcolaKmPerLitro(kmPercorsi, litriConsumati);
            System.out.println("Km/litro percorsi: " + kmPerLitro);
        }catch (Exception e) {
            logger.error("Errore: " + e.getMessage());
        }finally {
            scanner.close();
        }
    }

    private static double calcolaKmPerLitro(double km, double litri) throws ArithmeticException{
        if (litri == 0) {
            throw new ArithmeticException("Divisione per zero (nessun litro consumato)");
        }
        return km / litri;
    }
}
