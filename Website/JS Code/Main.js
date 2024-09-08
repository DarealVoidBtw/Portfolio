

const typed = new Typed('.multiple' , {
    strings: ['Game Developer','Student','Programmer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});

/* Weather Widget Script */



const input = document.getElementById('postcode');
const GetWeather = document.getElementById('btn');
const WeatherWidget = document.getElementById("Weather");
const InputUI = document.getElementById("Widget");

const BackBtn = document.getElementById("BackBtn");
const LocationName = document.getElementById("location-name");
const Temperature = document.getElementById("temp-value");
const Condition = document.getElementById("condition");
const WeatherImage = document.getElementById("weather-condition");
const Card4 = document.getElementById("card-4")

WeatherWidget.style.display = "none";
WeatherImage.src = "";
Card4.style.display = "flexbox";
Card4.style.padding = "32px";

// Add a click event listener to the button
GetWeather.addEventListener('click', function() {
    // Get the value of the input box
    const inputValue = input.value;

    // Log the values to the console (or handle them as needed)
    console.log('Input Value:', inputValue);

    const apiKey = '9e8951751f924be1b6a55108240309'; // Replace with your actual API key
       
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputValue}`)
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            const weatherInfo = `Location: ${data.location.name}, ${data.location.region}, ${data.location.country}\nTemperature: ${data.current.temp_c}°C\nCondition: ${data.current.condition.text}`;
            console.log(weatherInfo);
            LocationName.textContent = data.location.name;
            Temperature.textContent = data.current.temp_c;
            Condition.textContent = data.current.condition.text;
            if (data.current.condition.text == "Cloudy") {
                WeatherImage.src = "../Portfolio/Website/Images/Weather/Cloudy With sunny spells.jpg";
                Card4.style.display = "inline-block";
                Card4.style.padding = "0px";
            } else if (data.current.condition.text == "Mist") {
               WeatherImage.src = "../Portfolio/Website/Images/Weather/Drizzle-Mist.jpg";
               Card4.style.display = "inline-block";
               Card4.style.padding = "0px";
            } else if (data.current.condition.text == "Patchy rain nearby") {
                WeatherImage.src = "../Portfolio/Website/Images/Weather/Drizzle-Mist.jpg"
                Card4.style.display = "inline-block";
                Card4.style.padding = "0px";
            }
            InputUI.style.display = "none";
            WeatherWidget.style.display = "block";
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

BackBtn.addEventListener("click", function() {
    WeatherWidget.style.display = "none";
    InputUI.style.display = "block";
    WeatherImage.src = "";
    Card4.style.display = "flexbox";
    Card4.style.padding = "32px";
});

/*
function getRandomColor() {
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
setInterval(changeRandomShadow, 3000);
*/
