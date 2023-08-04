
function updateTemp(){
    document.getElementById("Search_btn").addEventListener("click", function(){
        const cityName = document.getElementById("city_name").value;

        if(cityName == ""){
              
        }
        else{
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c30a573abbe31f9cc5dbf0894290f0c8&units=metric`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
          // update city name
           document.getElementById("update_city").innerText = cityName;

           //update city Temperature
           const temp = Math.ceil(data.main.temp);
           document.getElementById("update_temp").innerText = `${temp}`;
           
           //update weather Condition
           const weather = data.weather[0].main;
           console.log(weather);
           document.getElementById("weather").innerText = weather;
            
           //update weather icon
           const weatherImageCode = data.weather[0].icon;
           document.getElementById("image").src = `https://openweathermap.org/img/wn/${weatherImageCode}@2x.png`;

           //clear input
           document.getElementById("city_name").value = "";
    })
        }

        
  })
}

updateTemp();