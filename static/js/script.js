// Fungsi untuk memuat dan menampilkan data
async function loadData() {
    try {
        const response = await fetch('/data');
        const data = await response.json();

        // Tampilkan Ringkasan Data
        document.getElementById('suhu-max').textContent = `${data.suhumax}°C`;
        document.getElementById('suhu-min').textContent = `${data.suhumin}°C`;
        document.getElementById('suhu-avg').textContent = `${data.suhurata}°C`;

        // Tampilkan Nilai Suhu Max & Humid Max
        const suhuTbody = document.getElementById('nilai-suhu-tbody');
        suhuTbody.innerHTML = data.nilai_suhu_max_humid_max.map((item, index) => `
            <tr>
                <td>${item.idx}</td>
                <td>${item.suhu} °C</td>
                <td>${item.humid}%</td>
                <td>${item.kecerahan}</td>
                <td>${item.timestamp}</td>
            </tr>
        `).join('');

        // Tampilkan Maks Bulan-Tahun
        const monthYearContainer = document.getElementById('month-year-container');
        monthYearContainer.innerHTML = data.month_year_max.map(item => `
            <div class="month-item">
                <div class="icon">📅</div>
                <p>${item.month_year}</p>
            </div>
        `).join('');

        // Tambahkan animasi fade-in ke setiap bagian
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => section.classList.add('fade-in'));
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

// Panggil loadData saat halaman dimuat
window.onload = loadData;