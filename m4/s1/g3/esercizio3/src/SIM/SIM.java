package SIM;

import java.util.ArrayList;
import java.util.List;

public class SIM {
    private String numeroTelefono;
    private double creditoDisponibile;
    private List<Chiamata> ultimeChiamate;

    public SIM(String numeroTelefono) {
        this.numeroTelefono = numeroTelefono;
        this.creditoDisponibile = 666;
        this.ultimeChiamate = new ArrayList<>();
    }

    public void stampaDatiSIM() {
        System.out.println("Numero di telefono: " + numeroTelefono);
        System.out.println("Credito disponibile: " + creditoDisponibile);
        System.out.println("Ultime chiamate:");
        if (ultimeChiamate.isEmpty()) {
            System.out.println("Nessuna chiamata effettuata.");
        } else {
            for (Chiamata chiamata : ultimeChiamate) {
                System.out.println("Durata: " + chiamata.getDurata() + " minuti, Numero chiamato: " + chiamata.getNumeroChiamato());
            }
        }
    }

    public static void main(String[] args) {
        SIM sim = new SIM("3388407108");
        sim.stampaDatiSIM();
    }
}

class Chiamata {
    private int durata;
    private String numeroChiamato;

    public Chiamata(int durata, String numeroChiamato) {
        this.durata = durata;
        this.numeroChiamato = numeroChiamato;
    }

    public int getDurata() {
        return durata;
    }

    public String getNumeroChiamato() {
        return numeroChiamato;
    }
}
