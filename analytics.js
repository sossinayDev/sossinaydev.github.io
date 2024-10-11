console.log("Welcome to sossinaydev.github.io");
const myDeviceId = '0362a647-9fdb-4671-a73c-efaeade4d212';

let userId = localStorage.getItem('user_id');

if (!userId) {
    userId = crypto.randomUUID();
    localStorage.setItem('user_id', userId);
}

if (userId !== myDeviceId) {
    fetch('https://sossinaydev-analyt-default-rtdb.firebaseio.com/homepage_sosDev/site-loads.json').then(r => r.json()).then(d => fetch('https://sossinaydev-analyt-default-rtdb.firebaseio.com/homepage_sosDev/site-loads.json', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify((d || 0) + 1) }));
    console.log("Site visit logged.");
}
else {
    console.log("Hello, sossinay");
}

