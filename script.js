//function for get generate random 4 digit number
function getGeneratePin() {
    const getGeneratePin = (Math.random() * 10000 + '').split(".")[0];
    const generatePinInput = document.getElementById('generatePinInput')
    const generatePinValue = parseInt(generatePinInput);
    generatePinInput.value = getGeneratePin;
}

//function for get innput value
function getInputValue(pinInput) {
    const form = document.getElementById('form');
    const matchPinInput = document.getElementById('matchPinInput');
    form.matchPinInput.value = form.matchPinInput.value + pinInput;
}


//function for submit input value and match
function submitForMatch() {
    const matchPinInput = document.getElementById('matchPinInput').value
    const generatePinInput = document.getElementById('generatePinInput').value
    if (generatePinInput == matchPinInput) {
        document.getElementById('match').style.display = "block";
        document.getElementById('matchPinInput').value = null;
        document.getElementById('generatePinInput').value = null;
    } else {
        document.getElementById('dontMatch').style.display = "block";
    }
}


//Function for clear input value
function clearInput() {
    document.getElementById('matchPinInput').value = null
}