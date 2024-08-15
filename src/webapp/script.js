const username = localStorage.getItem("username");
if (username) {
    localStorage.removeItem("username");
}

document.getElementById("dataForm").addEventListener("submit", function(event){
    event.preventDefault();
    const formData = new FormData(this);
    const formBody = new URLSearchParams();
    formData.forEach((value, key) => {
        formBody.append(key, value);
    })
    const username = formBody.get("username");
    localStorage.setItem("username", username);
    window.location.href = "./menu/menu.html";
})