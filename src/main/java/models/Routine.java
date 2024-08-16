package models;

import java.util.List;

public class Routine {

    private List<Exercise> routine;

    public List<Exercise> getRoutine() {
        return routine;
    }

    public void setRoutine(List<Exercise> routine) {
        this.routine = routine;
    }

    @Override
    public String toString() {
        return "Routine{" +
                "routine=" + routine +
                '}';
    }
}
