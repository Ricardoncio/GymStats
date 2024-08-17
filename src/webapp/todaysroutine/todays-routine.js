const form = document.getElementById("dataForm");
const user = JSON.parse(localStorage.getItem("user"));
const routineJSON = user["routine"];

function showRoutine() {
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
        submitBtn.addEventListener("click", async () => {
            console.log("entro")
            event.preventDefault();
            const formBody = new URLSearchParams();
            for (let key in routineJSON) {
                formBody.append(key, routineJSON[key]);
            }

            try {
                const response = await fetch(this.action, {
                    method: this.method,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: formBody.toString()
                });
                console.log("llego hasta aqui")
                const responseText = document.createElement("p");
                document.getElementById("routineDiv").appendChild(responseText);
                if (response.ok) {
                    responseText.textContent = "¡Routine saved successfully!"
                } else {
                    responseText.textContent = "Sorry, something went wrong"
                    throw new Error('Something went wrong... ' + response.statusText);
                }

            } catch (error) {
                console.error('Error:', error);
                let errorMsg = document.getElementById("errorMsg");
                if (!errorMsg) {
                    errorMsg = document.createElement("p");
                    errorMsg.id = "errorMsg";
                    document.getElementById("formDiv").appendChild(errorMsg);
                }
            }
        });
    }
}
showRoutine();
