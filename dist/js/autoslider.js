// Mendapatkan elemen wrapper dan elemen kartu
const wrapper = document.querySelector('#wrapper');
const card = document.querySelector('#card');

// Mengatur variabel untuk mengatur kecepatan autoplay dan arah scroll
const autoplaySpeed = 3000; // Kecepatan autoplay dalam milidetik
let scrollDirection = 'right'; // Arah scroll awal, dalam contoh ini ke kanan

// Fungsi untuk menggerakkan slider
function autoScroll() {
  if (scrollDirection === 'right') {
    // Scroll ke kanan jika belum mencapai akhir card terlihat
    if (wrapper.scrollLeft + wrapper.offsetWidth < wrapper.scrollWidth) {
      wrapper.scrollLeft += card.offsetWidth;
    }
  } else {
    // Scroll ke kiri jika belum mencapai awal card terlihat
    if (wrapper.scrollLeft > 0) {
      wrapper.scrollLeft -= card.offsetWidth;
    }
  }
}

// Fungsi untuk mengatur arah scroll saat mencapai batas
function handleScrollBoundary() {
  if (scrollDirection === 'right') {
    // Jika mencapai batas kanan, ubah arah ke kiri
    if (wrapper.scrollLeft + wrapper.offsetWidth >= wrapper.scrollWidth) {
      scrollDirection = 'left';
    }
  } else {
    // Jika mencapai batas kiri, ubah arah ke kanan
    if (wrapper.scrollLeft === 0) {
      scrollDirection = 'right';
    }
  }
}

// Fungsi untuk memulai autoplay
function startAutoplay() {
  autoplayInterval = setInterval(() => {
    autoScroll();
    handleScrollBoundary();
  }, autoplaySpeed);
}

// Fungsi untuk menghentikan autoplay
function stopAutoplay() {
  clearInterval(autoplayInterval);
}

// Memulai autoplay saat halaman dimuat
startAutoplay();

// Menambahkan event listener untuk menghentikan autoplay saat kursor diarahkan ke slider
wrapper.addEventListener('mouseenter', stopAutoplay);

// Menambahkan event listener untuk melanjutkan autoplay saat kursor meninggalkan slider
wrapper.addEventListener('mouseleave', startAutoplay);
