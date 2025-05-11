// Esercizio 1
function controllaNumero() {
    let num = parseInt(document.getElementById("numero1").value);
    let output = "";

    console.log(num);

    if (num % 2 === 0) {
        output += "Numero pari. ";
    } else {
        output += "Numero dispari. ";
    }

    if (num > 10) {
        alert("Grande!");
    }

    document.getElementById("output1").innerText = output;
}

// Esercizio 2
function contoAllaRovescia() {
    let output = "";
    for (let i = 10; i >= 0; i--) {
        output += i + " ";
        if (i === 0) {
            alert("BOOM!");
        }
    }
    document.getElementById("output2").innerText = output;
}

// Esercizio 3
function operaLista() {
    let numeri = [3, 6, 1, 9];
    numeri.push(5);
    numeri.sort((a, b) => a - b);
    let output = "Numeri ordinati: " + numeri.join(", ") +
        "\nPrimo: " + numeri[0] +
        " - Ultimo: " + numeri[numeri.length - 1];
    document.getElementById("output3").innerText = output;
}

// Esercizio 4
function calcola() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("operazione").value;
    let risultato;

    if (op === "+") risultato = n1 + n2;
    else if (op === "-") risultato = n1 - n2;
    else if (op === "*") risultato = n1 * n2;
    else if (op === "/") {
        if (n2 === 0) {
            risultato = "Errore: divisione per zero";
        } else {
            risultato = n1 / n2;
        }
    } else {
        risultato = "Operazione non valida";
    }

    document.getElementById("output4").innerText = "Risultato: " + risultato;
}

// Esercizio 5
function saluta() {
    let nome = document.getElementById("inputNome").value;
    document.getElementById("saluto").innerText = "Ciao, " + nome + "!";
}
