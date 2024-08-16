package models;

import java.util.List;

public class User {

    private String username;
    private List<Exercise> routine;

    public User() {

    }

    public User(String username, List<Exercise> routine) {
        this.username = username;
        this.routine = routine;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<Exercise> getRoutine() {
        return routine;
    }

    public void setRoutine(List<Exercise> routine) {
        this.routine = routine;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", routine=" + routine +
                '}';
    }
}
