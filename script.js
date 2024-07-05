function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function playVideo(e) {
    e.play();
    e.classList.remove('fading');
    setTimeout(() => {
      e.classList.add('fading');
    }, (e.duration / e.playbackRate - 1) * 1000);
  }