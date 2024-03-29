
const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
search.addEventListener('click', () =>{

    const APIKey = '52e2f2de73cb32c80512c99318fd0f90';
    let city = document.querySelector('.search-box input').value;
    console.log(city);

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
        console.log(json);
        if (json.cod === '404'){
            container.style.height = '450px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }

        error404.style.display = 'none';
        error404.classList.remove('fadeIn');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity');
        const wind = document.querySelector('.weather-details .wind');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = "https://cdn-icons-png.flaticon.com/512/2893/2893120.png";
                break
            case 'Clouds':
                image.src = "https://cdn-icons-png.flaticon.com/512/1585/1585341.png";
                break
            case 'Rain':
                image.src = "https://cdn-icons-png.flaticon.com/512/3072/3072063.png";
                break
            case 'Snow':
                image.src = "https://cdn-icons-png.flaticon.com/512/2465/2465979.png";
                break
            case 'Haze':
                image.src = "https://cdn-icons-png.flaticon.com/512/182/182264.png ";
                break

            default:
                image.src = '';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>℃<span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '590px';



    })

    console.log(humidity, temperature, description)
})


















