package interfacciaMultimediale.epicode;

public class Image extends MediaElement implements Visible, Adjustable {
	
	private int brightness;

	public Image(String title, int brightness) {
		super(title);
		this.brightness = brightness;
	}

	// metodo per mostrare l'immagine
	@Override
	public void show() {
		// mostrare l'immagine con la luminosità specificata
		for (int i = 0; i < brightness; i++) {
			System.out.println(getTitle() + " " + repeat("*", brightness));
		}
	}

	// metodo per aumentare la luminosità dell'immagine
	@Override
	public void increaseBrightness() {
		brightness++;
	}

	// metodo per diminuire la luminosità dell'immagine
	@Override
	public void decreaseBrightness() {
		brightness--;
	}

	// metodo privato per ripetere una stringa
	private String repeat(String s, int n) {
		return new String(new char[n]).replace("\0", s);
	}
}
