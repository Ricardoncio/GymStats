document.getElementById("menuBtn").addEventListener("click", () => {
    const exerciseName = localStorage.getItem("exerciseName");
    if (Object.keys(localStorage.getItem(exerciseName)).length === 0) {
        localStorage.removeItem(exerciseName);
    }
    localStorage.removeItem("exerciseName");
})

function showRoutine() {
    let user = JSON.parse(localStorage.getItem("user"));
    let routineJSON = user["routine"];
    let newDiv = document.getElementById("routineDiv")
    if (!newDiv) {
        newDiv = document.createElement("div");
        newDiv.id = "routineDiv";
        document.getElementById("divContainer").appendChild(newDiv);
        const name = document.createElement("h2");
        name.innerText = localStorage.getItem("selectedExercise");
        newDiv.appendChild(name);
        const setsDiv = document.createElement("div");
        setsDiv.id = "setsDiv";
        newDiv.appendChild(setsDiv);
        for (let i in user["routine"][localStorage.getItem("selectedExercise")]) {
            const set = document.createElement("p");
            set.textContent = (parseInt(i) + 1) + "º: " + user["routine"][localStorage.getItem("selectedExercise")][i];
            setsDiv.appendChild(set);
        }
        const deleteBtn = document.createElement("button");
        deleteBtn.id = "deleteBtn";
        deleteBtn.innerHTML = "Delete last set";
        newDiv.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', () => {
            let user = JSON.parse(localStorage.getItem("user"));
            const exercise = user["routine"][localStorage.getItem("selectedExercise")];
            if (exercise) {
                exercise.pop();
                if (exercise.length === 0) {
                    delete user["routine"][localStorage.getItem("selectedExercise")]
                }
                localStorage.setItem("user", JSON.stringify(user));
                removeRoutineDiv();
                showRoutine();
            }
        })
    }
}
showRoutine();

function removeRoutineDiv() {
    const routineDiv = document.getElementById("routineDiv");
    if (routineDiv) {
        routineDiv.parentNode.removeChild(routineDiv);
    }
}

document.getElementById("dataForm").addEventListener('submit', function(event) {
    let user = JSON.parse(localStorage.getItem("user"));
    event.preventDefault();
    const formData = new FormData(this);
    const formBody = new URLSearchParams();
    formData.forEach((value, key) => {
        formBody.append(key, value);
    })

    /* First, I check if the exercise introduced exists, if not I create it in the routine */
    const selectedExercise = localStorage.getItem("selectedExercise");
    if (!user["routine"][selectedExercise]) {
        user["routine"][selectedExercise] = [];
    }
    let weight = formBody.get("weight");
    if (formBody.get("exerciseType") === "bar") {
        weight = weight * 2 + 20;
    }

    /* Introducing the set into the specific exercise */
    user["routine"][selectedExercise].push(formBody.get("reps") + "x" + weight + "kg");
    localStorage.setItem("user", JSON.stringify(user));
    removeRoutineDiv();
    showRoutine();
})
