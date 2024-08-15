package models;

import java.util.List;

public class Exercise {

    private String name;
    private List<Set> sets;

    public Exercise() {

    }

    public Exercise(String name, Set... sets) {
        this.name = name;
        this.sets = List.of(sets);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Set> getSets() {
        return sets;
    }

    public void setSets(List<Set> sets) {
        this.sets = sets;
    }

    @Override
    public String toString() {
        return name + "{" +
                "name='" + name + '\'' +
                ", sets=" + sets +
                '}';
    }
}
