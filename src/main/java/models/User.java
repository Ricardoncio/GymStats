package models;

import java.util.List;

public class User {

    private String username;
    private Routine routine;

    public User() {

    }

    public User(String username, Routine routine) {
        this.username = username;
        this.routine = routine;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Routine getRoutine() {
        return routine;
    }

    public void setRoutine(Routine routine) {
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
