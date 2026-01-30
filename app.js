// Simpan data secara lokal (seperti dalam APK)
function saveData() {
    const input = document.getElementById('dataInput').value;
    localStorage.setItem('saved_automation_data', input);
    document.getElementById('status').innerText = "Data berjaya disimpan dalam sistem.";
}

// Fungsi Trigger yang akan kita sambungkan ke API atau Proxy
async function triggerAction(type) {
    document.getElementById('status').innerText = "Menjalankan: " + type + "...";
    
    // PERHATIAN: Kerana ini bukan extension, kita perlu gunakan Fetch API
    // ke server anda atau gunakan teknik Headless Browser jika di APK.
    console.log("Menjalankan logik untuk:", type);
    
    // Contoh simulasi logik dari content.js
    if(type === 'WIPE') {
        localStorage.removeItem('reels_data');
        alert("Semua data Reels telah dipadamkan dari memori sistem.");
    }
}
