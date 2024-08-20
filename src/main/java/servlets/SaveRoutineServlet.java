package servlets;

import DAOs.RoutineDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.Map;

@WebServlet(name = "SaveRoutineServlet", urlPatterns = "/saveRoutine")
public class SaveRoutineServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Map<String,String[]> params = req.getParameterMap();
        params.forEach((key,value) -> System.out.println(key + " = " + value[0]));

        RoutineDAO.saveRoutine(params);
    }
}
