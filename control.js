 function sendCommand(command) {
     fetch(`http://192.168.1.102//arduino_car/control.html?cmd=${command}`)
         .then(response => response.text())
         .then(data => console.log(data))
         .catch(error => console.error('Error:', error));
 }


function sendCommand(command) {
    fetch(`http://192.168.1.103//arduino_car/control.html?cmd=${command}`)
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}

function toggleAuto() {
    const autoButton = document.getElementById('autoButton');
    if (autoButton.innerText === 'Start Auto') {
        autoButton.innerText = 'Stop Auto';
        sendCommand('auto');
    } else {
        autoButton.innerText = 'Start Auto';
        sendCommand('stop');
    }
}
