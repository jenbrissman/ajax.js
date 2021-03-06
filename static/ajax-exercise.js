"use strict";


// PART 1: SHOW A FORTUNE
function replaceFortune(res) {
    $("#fortune-text").html(res);
}

function showFortune(evt) {
    $.get('/fortune', replaceFortune);

}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function replaceForecast(weather) {
    $("#weather-info").html(weather.forecast);
}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, replaceForecast);

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function finalSale(res){
    if (result_Code === "OK") {
  $("order-status").html(res);
};
  

function orderMelons(evt) {
    evt.preventDefault();

    const formInputs =  {
      'melon-type': $('#melon-type-field').val(),
      'qty': $('#qty-field').val()
    };

    $.post('/order-melons.json', formInputs, finalSale);


    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


