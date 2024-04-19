package interfacciaMultimediale.epicode;

public class Video extends Audio implements Adjustable {

	// attributi
	private int brightness; // luminosità del video
	private int duration; // durata del video

	// costruttore
	public Video(String title, int duration, int volume, int brightness) {
		super(title, duration, volume); // chiamata al costruttore della classe padre
		this.brightness = brightness;
		this.duration = duration;
	}

	// metodo per aumentare la luminosità del video
	public void increaseBrightness() {
		brightness++;
	}

	// metodo per diminuire la luminosità del video
	public void decreaseBrightness() {
		brightness--;
	}

	// override del metodo play() della classe padre
	@Override
	public void play() {
		// riproduzione del video
		for (int i = 0; i < duration; i++) {
			System.out.println(getTitle() + " " + repeat("!", duration));
		}
		// regolazione della luminosità
		for (int i = 0; i < brightness; i++) {
			System.out.println(getTitle() + " " + repeat("*", brightness));
		}
	}

	// metodo privato per ripetere una stringa
	private String repeat(String s, int n) {
		return new String(new char[n]).replace("\0", s);
	}
}
