const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');

});


const typed = new Typed('.multiple' , {
    strings: ['Game Developer','Student','Programmer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});


  

/*function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [r, g, b];
}

function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const element = document.getElementById('Rainbow');

function changeRandomShadow() {
    const randomColor = getRandomColor();

    // Convert RGB to hex
    const hexColor = rgbToHex(...randomColor);

    // Set the new shadow with fading effect using CSS transition
    element.style.transition = 'box-shadow 0.8s ease-in-out'; // Use ease-in-out for a smoother transition
    element.style.boxShadow = `0 0 60px ${hexColor}`;

    // Reset transition property after the animation is complete
    setTimeout(() => {
        element.style.transition = 'none';
    }, 500);
}

// Call the changeRandomShadow function every 2000 milliseconds (2 seconds)
setInterval(changeRandomShadow, 3000); */