
// DO NOT show API KEY on your JS file
const API_KEY = "a67659252561fc914af938ba6e9652f3";

const loadTemperature = async (city) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid=${API_KEY}&&units=metric`;

	const res = await fetch(url);
	const data = await res.json();

	// console.log(data);
    displayTemp(data);
};


document.getElementById('search').addEventListener('click',(event)=>{
    const searchText = document.getElementById("input-field").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q= ${searchText}&appid=${API_KEY}&&units=metric`
        
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        displayTemp(data);
    });

    document.getElementById("city-name").innerText = searchText.toUpperCase();
})

const displayTemp = (data) => {
	const temp = document.getElementById("temp");
	temp.innerText = data.main.temp;

    // weather forecast 
    document.getElementById("weather").innerText = data.weather[0].main; 
};

loadTemperature("dhaka");