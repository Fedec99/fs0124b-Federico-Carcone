package corso.java;

public class Main {
    public static void main(String[] args){
        String testString = "Esempio";
        int testYear = 2024;

        System.out.println("Lunghezza pari?" + stringaPariDispari(testString));
        System.out.println("L'anno" + testYear + "è bisestile?" + annoBisestile(testYear));
    }
    public static boolean stringaPariDispari(String str) {
        return str.length() % 2==0;
    }
    public static boolean annoBisestile(int year) {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
            return true;
        }else{
            return false;
        }

    }
}
