// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const weatherApi = {
    key: "267146cb7e03f6e59bc4f2cc652fa9dc",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}
fetch(`${weatherApi.baseUrl}?q=Mumbai&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(show);
function show(gw) {
    // console.log(gw);
    city.innerText = `${gw.name}, ${gw.sys.country}`;
    temp.innerHTML = `${Math.round(gw.main.temp)}&deg;C`;
    let d = document.getElementById('min-max');
    d.innerHTML = `${Math.floor(gw.main.temp_min)}&deg;C (min) / ${Math.ceil(gw.main.temp_max)}&deg;C (max)`
    let u = document.getElementById('weath');
    u.innerText = `${gw.weather[0].main}`;
    let k = new Date();
    date.innerText = dateManage(k);
    gwe = document.getElementById('weath');
    if (gwe.textContent == 'Rain') {
        document.body.style.background = `url('ranii.jpg') no-repeat center center/cover`;
        // document.body.style.height = `120vh`;
        img.innerHTML = `<img src="ran.png" height="80px" width="80px">`;

    }
    else if (gwe.textContent == 'Haze') {
        document.body.style.background = `url('haze.jpg') no-repeat center center/cover`;
        img.innerHTML = `<img src="hazee.png" height="80px" width="80px">`;
    }
    else if (gwe.textContent == 'Clouds') {
        document.body.style.background = `url('cloud.jpg') no-repeat center center/cover`;
        img.innerHTML = `<img src="cludy.png" height="80px" width="80px">`;
    }
    else if (gwe.textContent == 'Clear') {
        document.body.style.background = `url('clearr.jpeg') no-repeat center center/cover`;
        img.innerHTML = `<img src="clear.png" height="80px" width="80px">`;
    }
    else if (gwe.textContent == 'Snow') {
        document.body.style.background = `url('snoww.jpg') no-repeat center center/cover`;
        img.innerHTML = `<img src="snow.png" height="80px" width="80px">`;
    }
}
//Event listner function on keypress

const search = document.getElementById('input-box');
search.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        // console.log(search.value);
        getWeatherReport(search.value);
    }
})
// Get weather report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

// show weather report 
function showWeather(weather) {
    console.log(weather);
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
    let a = document.getElementById('min-max');
    a.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`
    let w = document.getElementById('weath');
    w.innerText = `${weather.weather[0].main}`;
    let t = new Date();
    date.innerText = dateManage(t);
    if (w.textContent == 'Rain') {
        document.body.style.background = `url('ranii.jpg') no-repeat center center/cover`;
        img.innerHTML = `<img src="ran.png" height="80px" width="80px">`;
        document.body.style.height = `120vh`;

    }
    else if (w.textContent == 'Haze') {
        document.body.style.background = `url('haze.jpg') no-repeat center center/cover`;
        img.innerHTML = `<img src="hazee.png" height="80px" width="80px">`;
    }
    else if (w.textContent == 'Clouds') {
        document.body.style.background = `url('cloud.jpg') no-repeat center center/cover`;
        img.innerHTML = `<img src="cludy.png" height="80px" width="80px">`;
    }
    else if (w.textContent == 'Clear') {
        document.body.style.background = `url('clearr.jpeg') no-repeat center center/cover`;
        img.innerHTML = `<img src="clear.png" height="80px" width="80px">`;
    }
    else {
        document.body.style.background = `url('snoww.jpg') no-repeat center center/cover`;
        img.innerHTML = `<img src="snow.png" height="80px" width="80px">`;
    }

}

//for date and time function
function dateManage(tm) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"];
    let year = tm.getFullYear();
    let date = tm.getDate();
    let month = months[tm.getMonth()];
    let day = days[tm.getDay()];
    return `${date} ${month} (${day}), ${year}`;
}

