
const hamburger = document.getElementById("hamburger");
const menuList = document.getElementById("menu-list");

hamburger.addEventListener('click', function() {
   hamburger.classList.toggle("hamburger-active")
   menuList.classList.toggle("hidden")
});

const cv = document.getElementById('cv');
cv.addEventListener('click', function() {
   alert("Akses Terbatas!")
})

//Navbar Fixed
window.onscroll = function () {
   const header = document.querySelector("header");
   const Fixed = header.offsetTop

   if(window.pageYOffset > Fixed) {
      header.classList.add("navbar-fixed");
   }else {
      header.classList.remove("navbar-fixed")
   }
}

//Musik Section About

const AboutSection = document.getElementById("about");
const Musik = document.getElementById("Musik");

let IsPlaying = false;
let SudahInteraksi = false;

// Deteksi scroll pertama sebagai interaksi user
window.addEventListener("scroll", function detectFirstScroll() {
  SudahInteraksi = true;
  window.removeEventListener("scroll", detectFirstScroll); // cuma sekali aja
});

window.addEventListener("scroll", function () {
  if (!SudahInteraksi) return;

  let Posisi = AboutSection.getBoundingClientRect();
  const WindowHeight = window.innerHeight;

  if (Posisi.top < WindowHeight / 2 && Posisi.bottom > WindowHeight / 2) {
    if (!IsPlaying) {
      Musik.play();
      IsPlaying = true;
    }
  } else {
    if (IsPlaying) {
      Musik.pause();
      Musik.currentTime = 0;
      IsPlaying = false;
    }
  }
});

//contact

function Message() {
  const Name = document.getElementById("Name").value;
  const Email = document.getElementById("Email").value;
  const Pesan = document.getElementById("pesan").value;
  
  const URL = "https://api.whatsapp.com/send?phone=6282136043762&text=Hello%20ArgiiAhm!%2C%20Saya%20"+ Name +"%2C%20"+ Pesan +"%2C%20"+ Email +"%20Saya%20"
  
  window.open(URL);
}


//viewmore 


const viewmore = document.getElementById("viewmore");
const card2 = document.getElementById("card2");

viewmore.addEventListener("click", function(){
  card2.classList.toggle("hidden")


   if(card2.classList.contains("hidden")) {
     viewmore.textContent = "Tampilkan Semua"
  }else {
    viewmore.textContent = "Tampilkan Lebih Sedikit"
   }

})


