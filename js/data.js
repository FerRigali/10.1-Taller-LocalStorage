document.addEventListener("DOMContentLoaded", (e) => {
    const storedData = localStorage.getItem("storedData");

    const dataContainer = document.getElementById("data");

    if (storedData) {
        dataContainer.innerText = storedData;
    } else {
        dataContainer.innerText = "No hay datos almacenados.";
    }

});