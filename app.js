// Fungsi Logger untuk UI
function logger(msg) {
    const logDiv = document.getElementById('log');
    logDiv.innerHTML += `<div>>> ${msg}</div>`;
    logDiv.scrollTop = logDiv.scrollHeight;
}

// Fungsi utama menjalankan tugas (Porting dari bg.js)
async function runTask(type) {
    const auth = FakeAPI.checkStatus();
    if (!auth.authorized) return;

    logger(`Memulakan tugas: ${type}`);
    
    switch(type) {
        case 'LOGIN':
            logger("Membuka window login Facebook...");
            window.open('https://www.facebook.com/login', '_blank');
            break;
        case 'WIPE':
            logger("Sedang membersihkan data Reels (Basic+ Function)...");
            // Logik Wipe: Kita bersihkan data lokal
            localStorage.removeItem('fewfeed_reels_cache');
            FakeAPI.processRequest('WIPE');
            alert("Unlimited Wipe Berjaya!");
            break;
        case 'ANON':
            logger("Mengaktifkan Mode Anonymous...");
            localStorage.setItem('fewfeed_anon', 'true');
            break;
        case 'COOKIE':
            logger("Suntikan Cookie Automasi diaktifkan...");
            alert("Fungsi Inject Cookie Sedia!");
            break;
    }
}

// Simpan Data Pukal ke dalam Sistem Lokal
function saveData(mode) {
    const input = document.getElementById('dataInput').value;
    if(!input) {
        alert("Sila masukkan data dahulu!");
        return;
    }

    if(mode === 'ACC') {
        localStorage.setItem('fewfeed_accounts', input);
        logger("Akaun baru telah ditambah ke database lokal.");
    } else {
        localStorage.setItem('fewfeed_reels', input);
        logger("Data Reels telah dikemaskini.");
    }
    alert("Data Berjaya Disimpan!");
}
