// Değişkenler
var score = 0;
var targetScore = 20;

// HTML elementlerini seçme
var scoreElement = document.getElementById("score");
var fruits = document.querySelectorAll(".fruit");

// Meyvelere tıklama olayı ekleme
fruits.forEach(function(fruit) {
  fruit.addEventListener("click", function() {
    // Skor artırma ve gösterme
    score++;
    scoreElement.textContent = score;

    // Kazanma koşulunu kontrol etme
    if (score === targetScore) {
      alert("Congratulations! You won the game!");
    }
  });
});

// Meyve hareketi
function moveFruits() {
    // Her bir meyve için
    fruits.forEach(function(fruit) {
      // Yeni pozisyonu hesapla
      var newPos = fruit.offsetTop + 1;
  
      // Meyve sınırı kontrolü
      if (newPos > gameContainer.clientHeight) {
        // Eğer sınırı geçtiyse, meyveyi en üstte yeniden konumlandır
        newPos = -50;
        fruit.style.left = Math.floor(Math.random() * gameContainer.clientWidth) + "px";
      }
  
      // Yeni pozisyonu uygula
      fruit.style.top = newPos + "px";
    });
  
    // Sonsuz döngü
    requestAnimationFrame(moveFruits);
  }
  
  // Meyve hareketi döngüsünü başlat
  requestAnimationFrame(moveFruits);