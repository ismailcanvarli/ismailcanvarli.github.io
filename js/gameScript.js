// Değişkenler
var score = 0;
var targetScore = 20;
var fruitSpeed = 1; // Meyve hareket hızı

// HTML elementlerini seçme
var scoreElement = document.getElementById("score");
var fruits = document.querySelectorAll(".fruit");
var gameContainer = document.querySelector(".game-container");

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
var animationId;

function moveFruits() {
  // Her bir meyve için
  fruits.forEach(function(fruit) {
    // Yeni pozisyonu hesapla
    var newPos = fruit.offsetTop + -7;

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
  animationId = requestAnimationFrame(moveFruits);
}

// Meyve hareketi döngüsünü başlat
requestAnimationFrame(moveFruits);

// Oyunu duraklat
function pauseGame() {
  cancelAnimationFrame(animationId);
}

// Oyunu devam ettir
function resumeGame() {
  animationId = requestAnimationFrame(moveFruits);
}

// Oyun duraklatma ve devam ettirme butonlarını seçme
var increaseSpeedButton = document.getElementById("reduce-speed-button");
var reduceSpeedButton = document.getElementById("increase-speed-button");


// Oyunu durdurmak veya devam ettirmek için butonlara tıklama olayı ekleme
reduceSpeedButton.addEventListener("click", pauseGame);
increaseSpeedButton.addEventListener("click", resumeGame);
