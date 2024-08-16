function redirect() {
    if (!localStorage.getItem("user")) {
        window.location.href = "../index.html";
    }
}
redirect();

document.getElementById("disconnectBtn").addEventListener("click", () => {
    localStorage.removeItem("user");
})

document.getElementById("dataForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const formBody = new URLSearchParams();
    formData.forEach((value, key) => {
        formBody.append(key, value);
    })
    const selectedExercise = formBody.get("selectedExercise");
    if (selectedExercise.length !== 0) {
        localStorage.setItem("selectedExercise", selectedExercise);
        window.location.href = "../exercise/exercise.html";
    }
})