public class esercizio1 {

    public static void main(String[] args) {
        int num1 = 5;
        int num2 = 7;
        String str = "hello";
        String[] array = {"one", "two", "three", "four", "five"};

        int risultatoMoltiplicazione = moltiplica(num1, num2);
        System.out.println("Il prodotto di " + num1 + " e " + num2 + " è: " + risultatoMoltiplicazione);

        String stringaConcatenata = concatena(str, num1);
        System.out.println("La stringa concatenata è: " + stringaConcatenata);

        String[] nuovoArray = inserisciliInArray(array, str);
        System.out.println("Il nuovo array è:");
        for (String s : nuovoArray) {
            System.out.println(s);
        }
    }

    public static int moltiplica(int num1, int num2) {
        return num1 * num2;
    }

    public static String concatena(String str, int num) {
        return str + num;
    }

    public static String[] inserisciliInArray(String[] array, String str) {
        String[] nuovoArray = new String[6];
        for (int i = 0; i < array.length; i++) {
            if (i < 3) {
                nuovoArray[i] = array[i];
            } else if (i == 3) {
                nuovoArray[i] = str;
            } else {
                nuovoArray[i+1] = array[i];
            }
        }
        return nuovoArray;
    }
}



