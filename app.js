const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");


});
app.post("/", function(req, res){
  console.log("Post request received.");
});
// const query = "London";
// const apiKey = "7093f6393ae6d4f53f64ff841aaa81d2";
// const unit = "metric";
// const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit";
//
// https.get(url, function(response){
//   console.log(response.statusCode);
//
//   response.on("data", function(data){
//     const weatherData = JSON.parse(data);
//   console.log(weatherData);
//   const temp = weatherData.main.temp;
//   const weatherDescription = weatherData.weather[0].description
//   const icon = weatherData.weather[0].icon
//   const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
//   console.log(weatherDescription);
//   res.write("<p>The weather is currently" + weatherDescription + "</p>");
//   res.write("<h1>The temperature in Nuneaton is " + temp + "degrees Celcius</h1>");
//   res.write("<img src=" + imageURL +">");
//   res.send()
//  });
// });

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
