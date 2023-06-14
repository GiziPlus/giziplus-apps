const Test = {
  async render() {
    return `
    <app-status></app-status>
    <app-test></app-test>
        `;
  },

  async afterRender() {
    const mainContainer = document.querySelector('#panduan');
    const panduan = `
    <app-panduan></app-panduan>
    `;
    mainContainer.innerHTML = panduan;
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      // Mendapatkan input dari pengguna
      const jenisKelamin = document.querySelector('input[name="gender"]:checked').value;
      const usia = parseFloat(document.getElementById('usia').value);
      let tinggiBadan = parseFloat(document.getElementById('tinggi-badan').value);
      const beratBadan = parseFloat(document.getElementById('berat-badan').value);

      // Mengkonversi tinggi badan menjadi meter
      tinggiBadan /= 100;

      // Menghitung Indeks Massa Tubuh (BMI)
      const bmi = beratBadan / (tinggiBadan * tinggiBadan);

      // Menentukan kategori status gizi berdasarkan BMI
      let statusGizi;
      if (bmi < 18.5) {
        statusGizi = 'Underweight (Kurus)';
      } else if (bmi >= 18.5 && bmi < 25) {
        statusGizi = 'Normal (Sehat)';
      } else if (bmi >= 25 && bmi < 30) {
        statusGizi = 'Overweight (Kelebihan berat badan)';
      } else {
        statusGizi = 'Obese (Obesitas)';
      }

      // Menentukan kebutuhan gizi berdasarkan jenis kelamin dan usia
      let kebutuhanKalori;
      let kebutuhanProtein;
      let kebutuhanLemak;

      if (jenisKelamin === 'Laki-Laki') {
        // Menghitung kebutuhan kalori, protein, dan lemak untuk pria
        kebutuhanKalori = 10 * beratBadan + 6.25 * tinggiBadan * 100 - 5 * usia + 5;
        kebutuhanProtein = 0.8 * beratBadan;
        kebutuhanLemak = 0.25 * kebutuhanKalori;
      } else if (jenisKelamin === 'Perempuan') {
        // Menghitung kebutuhan kalori, protein, dan lemak untuk wanita
        kebutuhanKalori = 10 * beratBadan + 6.25 * tinggiBadan * 100 - 5 * usia - 161;
        kebutuhanProtein = 0.8 * beratBadan;
        kebutuhanLemak = 0.25 * kebutuhanKalori;
      } else {
        alert('Jenis kelamin yang Anda masukkan tidak valid.');
      }

      // Menampilkan hasil perhitungan gizi
      console.log('=== Hasil Perhitungan Gizi ===');
      console.log(`Status Gizi Anda: ${statusGizi}`);
      console.log(`Kebutuhan Kalori: ${kebutuhanKalori.toFixed(2)} kalori per hari`);
      console.log(`Kebutuhan Protein: ${kebutuhanProtein.toFixed(2)} gram per hari`);
      console.log(`Kebutuhan Lemak: ${kebutuhanLemak.toFixed(2)} gram per hari`);

      const statusGiziElement = document.querySelector('#status-gizi');
      const kebutuhanKaloriElement = document.querySelector('#kebutuhan-kalori');
      const kebutuhanProteinElement = document.querySelector('#kebutuhan-protein');
      const kebutuhanLemakElement = document.querySelector('#kebutuhan-lemak');

      statusGiziElement.innerHTML = `Status Gizi: ${statusGizi}`;
      kebutuhanKaloriElement.innerHTML = `Kebutuhan Kalori: ${kebutuhanKalori.toFixed(2)} kalori per hari`;
      kebutuhanProteinElement.innerHTML = `Kebutuhan Protein: ${kebutuhanProtein.toFixed(2)} gram per hari`;
      kebutuhanLemakElement.innerHTML = `Kebutuhan Lemak: ${kebutuhanLemak.toFixed(2)} gram per hari`;
    });
  },
};

export default Test;
