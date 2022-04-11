



$("#searchButton").on("click", () => {
let ip = $("#ipText").val()
let key = "at_GQsXLeskcUhqFvMRM5p8JndZc0hWJ"
$(function () {
    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: {apiKey: key, ipAddress: ip},
        success: function(data) {
            let a = JSON.stringify(data);
            ups(a);
        },
        error: function() {
            alert("Invalid IP");
        }
    });
})});

function ups (a) {
    const bilgi = JSON.parse(a);
    $("#ipAdress").text(bilgi.ip);
    $("#location").text(bilgi.location.country +"/"+ bilgi.location.region);
    $("#timezone").text(bilgi.location.timezone);
    $("#isp").text(bilgi.isp);
    let lat = bilgi.location.lat
    let lng= bilgi.location.lng
    mapboxgl.accessToken = 'pk.eyJ1IjoiaWFtdGJheSIsImEiOiJjbDF1dHpzM3UwMDNkM2pvMDg4Y2VlNW11In0.1XAJx0DrjDoqrtXLJywFSw';
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [lng, lat], // starting position [lng, lat]
    zoom: 15 // starting zoom
    });
    
   


}