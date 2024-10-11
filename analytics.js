console.log("Welcome to sossinaydev.github.io");
const myDeviceId = '0362a647-9fdb-4671-a73c-efaeade4d212';
const localDeviceId = 'd1cd73a3-0be1-4822-a13a-3a2955e276ce';

let userId = localStorage.getItem('user_id');

if (!userId) {
    userId = crypto.randomUUID();
    localStorage.setItem('user_id', userId);
}

// Get the current file name from the URL path
let currentFileName = window.location.pathname.split('/').pop() || 'index'; // Default to 'index' if no file name
currentFileName = currentFileName.replace(".html", "");
console.log("Current file name:", currentFileName); // Log the current file name

if (userId !== myDeviceId) {
    if (userId !== localDeviceId) {
        const url = `https://sossinaydev-analyt-default-rtdb.firebaseio.com/homepage_sosDev/site-loads/${currentFileName}.json`;

        fetch(url)
            .then(r => {
                if (!r.ok) {
                    throw new Error(`HTTP error! status: ${r.status}`); // Capture non-200 responses
                }
                return r.json();
            })
            .then(d => {
                return fetch(url, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify((d || 0) + 1)
                });
            })
            .then(() => console.log("Site visit logged."))
            .catch(error => console.error("Error logging site visit:", error.message));
    } else {
        console.log("Hello, sossinay");
    }
}
