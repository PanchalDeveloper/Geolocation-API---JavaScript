// Run Function after DOM is loaded
window.addEventListener('DOMContentLoaded', initialize, false);

async function initialize() {
    const posArea = document.getElementById('positionInfo');
    try {
        let myPos = await getCurrLocation();
        
        posArea.innerHTML = 
        `<h2>Your Current Location Coordinates are:</h2>
        <br>
        <p>Latitude: ${myPos.coords.latitude}</p>
        <p>Longitude: ${myPos.coords.longitude}</p>
        <br>
        <p>Accuracy: ${myPos.coords.accuracy}</p>
        <br>
        <p>Time-Stamp: ${new Date(myPos.timestamp)}</p>`;
    } catch (error) {
        posArea.innerHTML = "We don't have permission to use your location.";
        console.log(error);
    }
}

// Get Your Current Location
async function getCurrLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                resolve(pos);
            }, err => {
                reject(err);
            });
        }
    })
}