const form = document.getElementById("dataForm");

function showRoutine() {
    let user = JSON.parse(localStorage.getItem("user"));
    let routineJSON = user["routine"];
    let newDiv = document.getElementById("routineDiv")
    if (!newDiv) {
        newDiv = document.createElement("div");
        newDiv.id = "routineDiv";
        document.getElementById("divContainer").appendChild(newDiv);
        for (let exercise in routineJSON) {
            const name = document.createElement("h2");
            name.innerText = exercise;
            newDiv.appendChild(name);
            const setsDiv = document.createElement("div");
            setsDiv.id = "setsDiv";
            newDiv.appendChild(setsDiv);
            for (let set in routineJSON[exercise]) {
                const setText = document.createElement("p");
                setText.textContent = (parseInt(set) + 1) + "º: " + routineJSON[exercise][set];
                setsDiv.appendChild(setText);
            }
        }
        const submitBtn = document.createElement("input");
        submitBtn.id = "submitBtn";
        submitBtn.type = "submit";
        submitBtn.value = "Save routine";
        newDiv.appendChild(submitBtn);
    }
}
showRoutine();
