package ecommerce;

import java.util.ArrayList;
import java.util.Date;

public class ECommerce {
    public static void main(String[] args) {
        Articolo articolo1 = new Articolo(1, "Carbonara", 15.99, 20);
        Articolo articolo2 = new Articolo(2, "Troca", 19.99, 15);

        Cliente cliente1 = new Cliente(1, "La Barba", "fred@pecoraro.com", new Date());

        Carrello carrelloCliente1 = new Carrello(cliente1);

        carrelloCliente1.aggiungiArticolo(articolo1);
        carrelloCliente1.aggiungiArticolo(articolo2);

        System.out.println("Cliente:");
        System.out.println("Codice cliente: " + cliente1.getCodiceCliente());
        System.out.println("Nome e cognome: " + cliente1.getNomeCognome());
        System.out.println("Email: " + cliente1.getEmail());
        System.out.println("Data iscrizione: " + cliente1.getDataIscrizione());

        System.out.println("\nArticoli nel carrello:");
        for (Articolo articolo : carrelloCliente1.elencoArticoli) {
            System.out.println("Codice articolo: " + articolo.getCodiceArticolo());
            System.out.println("Descrizione: " + articolo.getDescrizione());
            System.out.println("Prezzo: " + articolo.getPrezzo());
            System.out.println("Pezzi disponibili: " + articolo.getPezziDisponibili());
            System.out.println();
        }

        System.out.println("Totale costo: " + carrelloCliente1.calcolaTotaleCosto());
    }
}

class Articolo {
    private int codiceArticolo;
    private String descrizione;
    private double prezzo;
    private int pezziDisponibili;

    public Articolo(int codiceArticolo, String descrizione, double prezzo, int pezziDisponibili) {
        this.codiceArticolo = codiceArticolo;
        this.descrizione = descrizione;
        this.prezzo = prezzo;
        this.pezziDisponibili = pezziDisponibili;
    }

    public int getCodiceArticolo() {
        return codiceArticolo;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public double getPrezzo() {
        return prezzo;
    }

    public int getPezziDisponibili() {
        return pezziDisponibili;
    }

    public void setPezziDisponibili(int pezziDisponibili) {
        this.pezziDisponibili = pezziDisponibili;
    }
}

class Cliente {
    private int codiceCliente;
    private String nomeCognome;
    private String email;
    private Date dataIscrizione;

    public Cliente(int codiceCliente, String nomeCognome, String email, Date dataIscrizione) {
        this.codiceCliente = codiceCliente;
        this.nomeCognome = nomeCognome;
        this.email = email;
        this.dataIscrizione = dataIscrizione;
    }

    public int getCodiceCliente() {
        return codiceCliente;
    }

    public String getNomeCognome() {
        return nomeCognome;
    }

    public String getEmail() {
        return email;
    }

    public Date getDataIscrizione() {
        return dataIscrizione;
    }
}

class Carrello {
    private Cliente clienteAssociato;
    ArrayList<Articolo> elencoArticoli;

    public Carrello(Cliente clienteAssociato) {
        this.clienteAssociato = clienteAssociato;
        this.elencoArticoli = new ArrayList<>();
    }

    public void aggiungiArticolo(Articolo articolo) {
        elencoArticoli.add(articolo);
    }

    public void rimuoviArticolo(Articolo articolo) {
        elencoArticoli.remove(articolo);
    }

    public double calcolaTotaleCosto() {
        double totale = 0;
        for (Articolo articolo : elencoArticoli) {
            totale += articolo.getPrezzo();
        }
        return totale;
    }
}
