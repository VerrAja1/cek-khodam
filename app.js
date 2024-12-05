document.getElementById("khodamForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("namalengkap").value;

  const khodam = generateKhodam(nama);

  document.getElementById(
    "hasil"
  ).innerHTML = `Khodam Untuk ${nama}: ${khodam}`;
  document.getElementById("namalengkap").value = "";
});

function generateKhodam(nama) {
  const khodams = [
    "Sigma Boy",
    "Raja Kripto",
    "Dimas Raja Kripto",
    "Naga Skibidi",
    "Ulet Introvert",
    "Naga Sigma",
    "Kucing Terbang",
    "Harimau Mewing",
    "Topi Terbang",
    "Skibidi Toilet",
    "Ohio Final Boss",
    "Ulet sigma",
  ];
  const index = nama.length % khodams.length;
  return khodams[index];
}
