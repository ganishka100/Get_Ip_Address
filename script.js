function getip() {
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const ipAddress = data.ip;
        document.querySelector('.para').textContent = 'Your IP address: ' + ipAddress;
        document.getElementById('ip_details').textContent = ''; // Remove the initial message
        console.log('Your IP address:', ipAddress);
    })
    .catch(error => {
        console.error('Error retrieving IP address:', error);
    });
}
