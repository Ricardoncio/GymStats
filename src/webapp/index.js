const user = localStorage.getItem("user");
if (user) {
    window.location.href = "./menu/menu.html";
}

document.getElementById("dataForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const formBody = new URLSearchParams();
    formData.forEach((value, key) => {
        formBody.append(key, value);
    })

    let errorText;
    try {
        const response = await fetch(this.action, {
            method: this.method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody.toString()
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("user", JSON.stringify(data));
            window.location.href = "./menu/menu.html";
        } else {
            if (response.status === 404) {
                errorText = "Not a valid user"
            } else if (response.status === 400) {
                errorText = "Fill all the fields please"
            }
            throw new Error('Network response was not ok ' + response.statusText);
        }

    } catch (error) {
        console.error('Error:', error);
        let errorMsg = document.getElementById("errorMsg");
        if (!errorMsg) {
            errorMsg = document.createElement("p");
            errorMsg.id = "errorMsg";
            document.getElementById("formDiv").appendChild(errorMsg);
        }
        errorMsg.textContent = errorText;
    }
});