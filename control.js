
function sendCommand(command) {
    const ipAddress = document.getElementById('ipAddress').value;

    if (ipAddress) {
        fetch(`http://${ipAddress}/control?cmd=${command}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                console.log(data);
                alert('تم إرسال الأمر: ' + command);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('حدث خطأ: ' + error.message);
            });
    } else {
        alert('يرجى التأكد من إدخال عنوان IP');
    }
}

function toggleAuto() {
    const ipAddress = document.getElementById('ipAddress').value;
    const command = document.getElementById('autoButton').innerText === "Start Auto" ? "startAuto" : "stopAuto";

    if (ipAddress) {
        fetch(`http://${ipAddress}/control?cmd=${command}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                console.log(data);
                document.getElementById('autoButton').innerText = command === "startAuto" ? "Stop Auto" : "Start Auto";
            })
            .catch(error => {
                console.error('Error:', error);
                alert('حدث خطأ: ' + error.message);
            });
    } else {
        alert('يرجى التأكد من إدخال عنوان IP');
    }
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
