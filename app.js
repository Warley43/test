document.addEventListener("DOMContentLoaded", function () {
    const btnCriptografar = document.getElementById("butaocriptografar");
    const btnDescriptografar = document.getElementById("butaodescriptografar");
    const btnCopiar = document.getElementById("copyButton");

    btnCriptografar.addEventListener("click", criptografar);
    btnDescriptografar.addEventListener("click", descriptografar);
    btnCopiar.addEventListener("click", copiar);

    function criptografar() {
        const inputText = document.getElementById("inputText");
        const outputText = document.getElementById("outputText");

        const textoOriginal = inputText.value.trim().toLowerCase();

        const textoCriptografado = textoOriginal
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        outputText.value = textoCriptografado;
    }

    function descriptografar() {
        const inputText = document.getElementById("inputText");
        const outputText = document.getElementById("outputText");

        const textoCriptografado = inputText.value.trim().toLowerCase();

        const textoOriginal = textoCriptografado
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        outputText.value = textoOriginal;
    }

    function copiar() {
        const outputText = document.getElementById("outputText");

        outputText.select();
        document.execCommand("copy");

        alert("Texto copiado para a área de transferência!");
    }
});
