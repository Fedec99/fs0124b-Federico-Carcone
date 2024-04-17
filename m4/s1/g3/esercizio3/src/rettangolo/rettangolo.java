package rettangolo;

public class rettangolo {
    private double altezza;
    private double larghezza;

    public rettangolo(double altezza, double larghezza) {
        this.altezza = altezza;
        this.larghezza = larghezza;
    }

    public double calcolaArea() {
        return altezza * larghezza;
    }

    public double calcolaPerimetro() {
        return 2 * (altezza + larghezza);
    }

    public void stampaRettangolo() {
        System.out.println("Area: " + calcolaArea());
        System.out.println("Perimetro: " + calcolaPerimetro());
    }

    public static void stampaDueRettangoli(rettangolo r1, rettangolo r2) {
        System.out.println("Primo rettangolo:");
        r1.stampaRettangolo();
        System.out.println("Secondo rettangolo:");
        r2.stampaRettangolo();
        double sommaAree = r1.calcolaArea() + r2.calcolaArea();
        double sommaPerimetri = r1.calcolaPerimetro() + r2.calcolaPerimetro();
        System.out.println("Somma delle aree: " + sommaAree);
        System.out.println("Somma dei perimetri: " + sommaPerimetri);
    }

    public static void main(String[] args) {
        rettangolo rettangolo1 = new rettangolo(5, 10);
        rettangolo rettangolo2 = new rettangolo(3, 7);

        System.out.println("Stampa singolo rettangolo:");
        rettangolo1.stampaRettangolo();

        System.out.println("\nStampa due rettangoli:");
        stampaDueRettangoli(rettangolo1, rettangolo2);
    }
}
