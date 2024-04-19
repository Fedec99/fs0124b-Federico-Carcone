package interfacciaMultimediale.epicode;

public abstract class MediaElement {
    private String title;

    public MediaElement(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
