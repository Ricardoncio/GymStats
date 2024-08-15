document.getElementById("menuBtn").addEventListener("click", () => {
    const exerciseName = localStorage.getItem("exerciseName");
    if (Object.keys(localStorage.getItem(exerciseName)).length === 0) {
        localStorage.removeItem(exerciseName);
    }
    localStorage.removeItem("exerciseName");
})

