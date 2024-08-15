package models;

public class Set {

    private int reps;
    private int weight;

    public Set() {

    }

    public Set(int reps, int weight) {
        this.reps = reps;
        this.weight = weight;
    }

    public int getReps() {
        return reps;
    }

    public void setReps(int reps) {
        this.reps = reps;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    @Override
    public String toString() {
        return "Set{" +
                "reps=" + reps +
                ", weight=" + weight +
                '}';
    }
}
