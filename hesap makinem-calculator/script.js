const result = document.getElementById('result');

function appendChar(char) {
    if (result.innerText === 'Hata') result.innerText = '';
    result.innerText += char;
}

function removeLastChar() {
    result.innerText = result.innerText.slice(0, -1);
}

function clearResult() {
    result.innerText = '';
}

function evaluateResult() {
    try {
        result.innerText = eval(result.innerText.replace(/,/g, '.'));
    } catch {
        result.innerText = 'Hata';
    }
}
