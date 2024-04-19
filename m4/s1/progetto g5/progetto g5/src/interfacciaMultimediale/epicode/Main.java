package interfacciaMultimediale.epicode;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) throws IOException {
		
			String title;
			String duration;
			String volume;
			String brightness;
			
			System.out.println("Inserisci titolo");
			Scanner titleScanner = new Scanner(System.in);
			title = titleScanner.nextLine();
			//System.out.println(title);
			
			System.out.println("Inserisci durata");
			Scanner durationScanner = new Scanner(System.in);
			duration = durationScanner.nextLine();
			//System.out.println(duration);
			
			System.out.println("Inserisci volume");
			Scanner volumeScanner = new Scanner(System.in);
			volume = volumeScanner.nextLine();
			//System.out.println(volume);
			
			System.out.println("Inserisci luminosità");
			Scanner brightnessScanner = new Scanner(System.in);
			brightness = brightnessScanner.nextLine();
			//System.out.println(duration);
			
		  
		  ArrayList<String> list = new ArrayList<>();
		  list.add(title);
		  list.add(duration);
		  list.add(volume);
		  list.add(brightness);
		  
		  System.out.println(list);
		  
		  

 
		// per ognuno dei 5 elementi
		// il programma chiede i dati degli elementi multimediali (p.e. titolo, durata, ecc)
		// ognuno degli elementi viene instanziato con il suo tipo di riferimento (Audio, Video, Image)
		// ognuno degli elementi viene inserito in un array
		
		// il programma chiede all'utente quale elemento eseguire (indice da 1 a 5)
		
		// se l'oggetto selezionato è Reproducible -> play(), altrimenti se è Visible -> show()
	}

}
