function createRoutineObject() {
    let routine = {};
    routine.date = new Date().toLocaleDateString();
    localStorage.setItem("routine", JSON.stringify(routine));
}

function showRoutine() {
    let routineJSON = JSON.parse(localStorage.getItem("routine"));
    let newDiv = document.getElementById("routineDiv")
    if (!newDiv) {
        newDiv = document.createElement("div");
        newDiv.id = "routineDiv";
        document.getElementById("divContainer").appendChild(newDiv);
        const name = document.createElement("h2");
        name.innerText = "Routine " + routineJSON.date;
        newDiv.appendChild(name);
        const setsDiv = document.createElement("div");
        setsDiv.id = "setsDiv";
        newDiv.appendChild(setsDiv);
        const deleteBtn = document.createElement("button");
        deleteBtn.id = "deleteBtn";
        deleteBtn.innerHTML = "Delete routine";
        newDiv.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', () => {
            localStorage.removeItem("routine");
            createRoutineObject();
            removeRoutineDiv();
        })
    }

    for (let key in routineJSON) {
        if (key !== "date") {
            const set = document.createElement("p");
            set.id = key;
            set.innerHTML = "<b>" + key + ":</b><br/>" + routineJSON[key];
            setsDiv.appendChild(set);
        }
    }
}

if (!localStorage.getItem("routine")) {
    createRoutineObject();
} else {
    showRoutine();
}

function removeRoutineDiv() {
    const routineDiv = document.getElementById("routineDiv");
    if (routineDiv) {
        routineDiv.parentNode.removeChild(routineDiv);
    }
}

document.getElementById("dataForm").addEventListener('submit', function(event) {
    let routineJSON = JSON.parse(localStorage.getItem("routine"));
    event.preventDefault();
    const formData = new FormData(this);
    const formBody = new URLSearchParams();
    formData.forEach((value, key) => {
        formBody.append(key, value);
    })

    /* First, I check if the exercise introduced exists, if not I create it in the routine */
    const exercise = formBody.get("exerciseName");
    if (!routineJSON[exercise]) {
        routineJSON[exercise] = [];
    }

    let weight = formBody.get("weight");
    if (formBody.get("exerciseType") === "bar") {
        weight = weight * 2 + 20;
    }
    
    /* Introducing the set into the specific exercise */
    routineJSON[exercise].push(formBody.get("reps") + "x" + weight);
    localStorage.setItem("routine", JSON.stringify(routineJSON));
    removeRoutineDiv();
    showRoutine();
})