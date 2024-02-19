function encryptText() {
    var inputText = document.getElementById("text").value.toLowerCase();
    var result = inputText.replace(/e/g, "enter")
                           .replace(/i/g, "imes")
                           .replace(/a/g, "ai")
                           .replace(/o/g, "ober")
                           .replace(/u/g, "ufat");
    
    document.getElementById("result").innerText = result;
    var resultButton = document.getElementById("resultButton");
    if (result !== "") {
       
        showResultButton(resultButton);
    } else {
        hideResultButton(resultButton);
    }
}

function decryptText() {
    var inputText = document.getElementById("text").value.toLowerCase();
    var result = inputText.replace(/enter/g, "e")
                           .replace(/imes/g, "i")
                           .replace(/ai/g, "a")
                           .replace(/ober/g, "o")
                           .replace(/ufat/g, "u");
                           
    document.getElementById("result").innerText = result;
    var resultButton = document.getElementById("resultButton");
    if (result !== "") {
        
        showResultButton(resultButton);
    } else {
        hideResultButton(resultButton);
    }
}

function copyToClipboard() {
    var resultText = document.getElementById("result").innerText;
    var textarea = document.createElement("textarea");
    textarea.value = resultText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("Texto copiado al portapapeles: " + resultText);
}

document.addEventListener("DOMContentLoaded", function () {
    
    var resultButton = document.getElementById("resultButton");
    var resultElement = document.getElementById("result");

    
    hideResultButton(resultButton);

    
    function toggleResultButton() {
        if (resultElement.innerText.trim() !== "") {
            showResultButton(resultButton);
        } else {
            hideResultButton(resultButton);
        }
    }

    
    resultElement.addEventListener("input", toggleResultButton);
});

function showResultButton(resultButton) {
    resultButton.style.display = "block";
}

function hideResultButton(resultButton) {
    resultButton.style.display = "none";
}