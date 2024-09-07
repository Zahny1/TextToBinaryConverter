// script.js

// Funktion, um zwischen den Eingabefeldern umzuschalten
function toggleInputFields() {
    const option = document.getElementById('option').value;
    const textInputContainer = document.getElementById('textInputContainer');
    const binaryInputContainer = document.getElementById('binaryInputContainer');

    if (option === 'textToBinary') {
        textInputContainer.style.display = 'block';
        binaryInputContainer.style.display = 'none';
    } else {
        textInputContainer.style.display = 'none';
        binaryInputContainer.style.display = 'block';
    }
}

// Funktion, um Text in ASCII-Binär umzuwandeln
function textToBinary(text) {
    return text.split('').map(char => {
        const binary = char.charCodeAt(0).toString(2);
        return binary.padStart(8, '0'); // Füllt auf 8 Bits auf
    }).join(' ');
}

// Funktion, um Binär in Text umzuwandeln
function binaryToText(binary) {
    return binary.split(' ').map(bin => {
        return String.fromCharCode(parseInt(bin, 2));
    }).join('');
}

// Hauptfunktion, um den Konvertierungsvorgang auszuführen
function convert() {
    const option = document.getElementById('option').value;
    let output = '';

    if (option === 'textToBinary') {
        const text = document.getElementById('textInput').value;
        output = textToBinary(text);
    } else {
        const binary = document.getElementById('binaryInput').value;
        output = binaryToText(binary);
    }

    document.getElementById('output').textContent = output;
}

// Funktion, um den Ausgabe-Text zu kopieren
function copyToClipboard() {
    const outputText = document.getElementById('output').textContent;

    // Temporäres Textfeld erstellen
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = outputText;
    document.body.appendChild(tempTextArea);

    // Text auswählen und in die Zwischenablage kopieren
    tempTextArea.select();
    document.execCommand('copy');

    // Temporäres Textfeld wieder entfernen
    document.body.removeChild(tempTextArea);

    // Feedback für den Benutzer
    alert("Text wurde in die Zwischenablage kopiert!");
}
