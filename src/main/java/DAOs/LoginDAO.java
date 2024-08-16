package DAOs;

import models.Connector;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class LoginDAO {

    public static boolean login(String username, String password) {
        boolean logged = false;
        Connection con = null;
        try {
            con = new Connector().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT * FROM users WHERE user_name = ? AND user_pass = ?");
            ps.setString(1,username);
            ps.setString(2,password);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                logged = true;
            }

        } catch (SQLException | ClassNotFoundException e) {
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

        return logged;
    }
}
