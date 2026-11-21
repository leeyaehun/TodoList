package backend;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class TaskService {
    private List<Task> tasks = new ArrayList<>();
    private Long nextId = 1L;

    public void addTask(Task task) {
        backend.Task newTask = new Task(nextId++, task.getTitle());
        tasks.add(newTask);
    }

    public List<Task> getAllTasks() {
        return tasks;
    }

    public void completeTask(Long id) {
        for (Task task : tasks) {
            if (task.getId().equals(id)) {
                task.setCompleted(true);
                return;
            }
        }
    }

    public void deleteTask(Long id) {
        tasks.removeIf(task -> id.equals(task.getId()));
    }
}
