document.addEventListener("DOMContentLoaded", (e) => {
    const button = document.getElementById("buttonText");
    const input = document.getElementById("inputText");
    
    button.addEventListener("click", () => {
        const inputData = input.value;

        localStorage.setItem("storedData", inputData);

        input.value = '';
    });
    
});