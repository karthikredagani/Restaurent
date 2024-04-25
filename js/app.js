document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const partySize = document.getElementById('party-size').value;
    const isAvailable = Math.random() > 0.5;
    const statusElement = document.getElementById('reservation-status');
    if (isAvailable) {
        statusElement.textContent = `Reservation confirmed for ${date} at ${time} for a party of ${partySize}.`;
    } else {
        statusElement.textContent = `Sorry, no availability for the selected date and time.`;
    }
});
function fetchUserProfile() {
    const userId = 1; 
    fetch(`https://reqres.in/api/users/${userId}`)
        .then(response => response.json())
        .then(data => {
            const userInfoElement = document.getElementById('user-info');
            userInfoElement.innerHTML = `
                <p>Name: ${data.data.first_name} ${data.data.last_name}</p>
                <p>Email: ${data.data.email}</p>
            `;
        })
        .catch(error => console.error('Error fetching user data:', error));
}
if (document.getElementById('user-info')) {
    fetchUserProfile();
}
