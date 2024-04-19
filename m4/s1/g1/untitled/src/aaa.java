public class aaa {

    private static final String[] numeriInParole = {
            "", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove"
    };

    private static final String[] numeriDaDieciADiciannove = {
            "dieci", "undici", "dodici", "tredici", "quattordici", "quindici",
            "sedici", "diciassette", "diciotto", "diciannove"
    };

    private static final String[] multipliDiDieci = {
            "", "", "venti", "trenta", "quaranta", "cinquanta", "sessanta", "settanta", "ottanta", "novanta"
    };

    public static String convertiInParole(int numero) {
        if (numero < 0 || numero > 9999) {
            return "Numero non supportato";
        }

        if (numero == 0) {
            return "zero";
        }

        String risultato = "";

        int migliaia = numero / 1000;
        if (migliaia > 0) {
            risultato += numeriInParole[migliaia] + "mila";
        }

        int centinaia = (numero % 1000) / 100;
        if (centinaia > 0) {
            risultato += numeriInParole[centinaia] + "cento";
        }

        int decineUnita = numero % 100;
        if (decineUnita >= 10 && decineUnita <= 19) {
            risultato += numeriDaDieciADiciannove[decineUnita - 10];
        } else {
            int decine = decineUnita / 10;
            if (decine > 0) {
                risultato += multipliDiDieci[decine];
            }

            int unita = decineUnita % 10;
            if (unita > 0) {
                risultato += numeriInParole[unita];
            }
        }

        return risultato;
    }

    public static void main(String[] args) {
        int numero = 234;
        System.out.println(convertiInParole(numero));
    }
}
