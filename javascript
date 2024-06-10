document.getElementById("peminatanForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah formulir untuk melakukan submit

    // Mengambil nilai dari inputan
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.querySelector('input[name="peminatan"]:checked').value;
    var alamat = document.getElementById("alamat").value;

    // Membuat template untuk hasil
    var hasilTemplate = `
        <h2>Hasil Pendaftaran</h2>
        <p>Nama: ${nama}</p>
        <p>NIM: ${nim}</p>
        <p>Peminatan: ${peminatan}</p>
        <p>Alamat: ${alamat}</p>
    `;

    // Menampilkan hasil di dalam div dengan id "result"
    document.getElementById("result").innerHTML = hasilTemplate;
});
