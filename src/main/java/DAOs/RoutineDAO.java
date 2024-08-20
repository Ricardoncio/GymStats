package DAOs;

import models.Connector;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Map;

public class RoutineDAO {

    public static void saveRoutine(Map<String, String[]> routine) {
        Connection con = null;

        try {
            con = new Connector().getConnection();
            for (Map.Entry<String,String[]> entry : routine.entrySet()) {
                String key = entry.getKey();
                String[] value = entry.getValue();
                String[] sets = value[0].split(",");

                PreparedStatement ps = con.prepareStatement("INSERT INTO " + key + " (user_name,exercise_date,set_number,reps,weight) VALUES ('Talleres',CURRENT_DATE,?,?,?)");
                for (int i = 0; i < sets.length; i++) {
                    String[] repsAndWeight = sets[i].split("x");
                    int reps = Integer.parseInt(repsAndWeight[0]);
                    int weight = Integer.parseInt(repsAndWeight[1]);

                    ps.setInt(1,i + 1);
                    ps.setInt(2,reps);
                    ps.setInt(3,weight);
                    int inserted = ps.executeUpdate();
                    if (inserted == 0) {
                        throw new Exception("Couldn't save the set");
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace(System.out);

        } finally {
            if (con != null) {
                try {
                    con.close();
                } catch (SQLException e) {
                    e.printStackTrace(System.out);
                }
            }
        }
    }
}
