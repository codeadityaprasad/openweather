function displayresult(){
    var city= document.getElementById("city").value;
    var apikey="91d3d5416fccb7e851537cdcb0e62d7c";
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +city + '&appid='+apikey+'&units=metric')
    .then(response=> response.json())
    .then(data=>{
        var t=data['main']['temp']
        document.getElementById("output").innerHTML=t;
    })
}