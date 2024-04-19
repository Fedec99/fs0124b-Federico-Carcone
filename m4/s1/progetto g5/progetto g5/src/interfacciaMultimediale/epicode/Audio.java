package interfacciaMultimediale.epicode;

public class Audio extends MediaElement implements Reproducible {
    private int duration;
    private int volume;

    public Audio(String title, int duration, int volume) {
        super(title);
        this.duration = duration;
        this.volume = volume;
    }

    @Override
    public int getDuration() {
        return duration;
    }

    @Override
    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getVolume() {
        return volume;
    }

    public void setVolume(int volume) {
        this.volume = volume;
    }

    @Override
    public void play() {
        for (int i = 0; i < duration; i++) {
            System.out.println(getTitle() + " " + repeat("!", volume));
        }
    }

    public void increaseVolume() {
        volume++;
    }

    public void decreaseVolume() {
        volume--;
    }

    private String repeat(String s, int n) {
        return new String(new char[n]).replace("\0", s);
    }
}
