// functie om data op te halen uit de api
function fetchData() {
    // api url aanmaken
    const apiUrl = 'https://www.boredapi.com/api/activity'

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // data laten zien, (activity) uit de api halen en linken aan de html id 'activity'
            document.getElementById('activity').textContent = data.activity
        })
};

// Button data laten zien
document.getElementById('btn').addEventListener('click', fetchData) 