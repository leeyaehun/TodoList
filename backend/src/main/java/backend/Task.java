package backend;

public class Task {
    //declare
    private Long id;
    private String title;
    private boolean completed;

    //constructor
    public Task(Long id, String title) {
        this.id = id;
        this.title = title;
        this.completed = false;
    }

    //Getter
    public Long getId() {
        return id;
    }
    public String getTitle() {
        return title;
    }
    public boolean isCompleted() {
        return completed;
    }
}
