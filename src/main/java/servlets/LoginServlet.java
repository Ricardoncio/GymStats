package servlets;

import DAOs.LoginDAO;
import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import models.User;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet(name = "LoginServlet", urlPatterns = "/login")
public class LoginServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        String responseJSON = "";

        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        if (!username.isEmpty() && !password.isEmpty()) {
            if (LoginDAO.login(username,password)) {
                User user = new User(username, new ArrayList<>());
                responseJSON = new Gson().toJson(user);
                PrintWriter pw = resp.getWriter();
                pw.print(responseJSON);
                pw.flush();

            } else {
                resp.sendError(404,"Not a valid user");
            }

        } else {
            resp.sendError(400,"Fill all the fields please");
        }
    }
}
