function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")

}


const nameElement = document.getElementById('name');
const name = 'Manthan Pathak';
let i = 0;

function nameTitle() {
  if (i < name.length) {
    nameElement.textContent += name[i];
    i++;
    setTimeout(nameTitle, 100); // Simulate typing speed
  } else {
    setTimeout(erase, 2000); // Wait 2 seconds before erasing
  }
}

function erase() {
  if (i > 0) {
    nameElement.textContent = nameElement.textContent.substring(0, i - 1);
    i--;
    setTimeout(erase, 50); // Simulate erasing speed
  } else {
    setTimeout(nameTitle, 1000); // Wait 1 second before typing again
  }
}

nameTitle(); // Start the animation
