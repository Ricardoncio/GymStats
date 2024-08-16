package models;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Connector {

    public Connection getConnection() throws SQLException, ClassNotFoundException {
        Class.forName("org.postgresql.Driver");
        String url = "jdbc:postgresql://ep-holy-glade-a2ypg4lb.eu-central-1.aws.neon.tech/LearningDB?user=LearningDB_owner&password=FCV1wYhAe7su&sslmode=require";
        return DriverManager.getConnection(url);
    }
}
