import java.util.*;

public class RubricaTelefonica {
    private HashMap<String, String> rubrica;

    public RubricaTelefonica() {
        rubrica = new HashMap<>();
    }

    public void inserisciContatto(String nome, String telefono) {
        rubrica.put(nome, telefono);
    }

    public void cancellaContatto(String nome) {
        rubrica.remove(nome);
    }

    public String ricercaNomeDaNumero(String numero) {
        for (Map.Entry<String, String> entry : rubrica.entrySet()) {
            if (entry.getValue().equals(numero)) {
                return entry.getKey();
            }
        }
        return null;
    }

    public String ricercaNumeroDaNome(String nome) {
        return rubrica.get(nome);
    }

    public void stampaRubrica() {
        System.out.println("Rubrica Telefonica:");
        for (Map.Entry<String, String> entry : rubrica.entrySet()) {
            System.out.println("Nome: " + entry.getKey() + ", Telefono: " + entry.getValue());
        }
    }

    public static void main(String[] args) {
        RubricaTelefonica rubrica = new RubricaTelefonica();

        rubrica.inserisciContatto("Mario", "123456789");
        rubrica.inserisciContatto("Luigi", "987654321");

        rubrica.stampaRubrica();

        System.out.println("Ricerca numero di Mario: " + rubrica.ricercaNumeroDaNome("Mario"));
        System.out.println("Ricerca nome di 987654321: " + rubrica.ricercaNomeDaNumero("987654321"));

        rubrica.cancellaContatto("Luigi");
        rubrica.stampaRubrica();
    }
}
