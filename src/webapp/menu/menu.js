document.getElementById("disconnectBtn").addEventListener("click", () => {
    localStorage.removeItem("username");
})

document.getElementById("dataForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const formBody = new URLSearchParams();
    formData.forEach((value, key) => {
        formBody.append(key, value);
    })
    const exerciseName = formBody.get("exerciseName");
    localStorage.setItem("exerciseName", exerciseName);
    if (!localStorage.getItem(exerciseName)) {
        localStorage.setItem(exerciseName, JSON.stringify({}));
    }
    window.location.href = "../exercise/exercise.html";
})