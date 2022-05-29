import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#load').click(function() {
    console.log("button clicked");
    let request = new XMLHttpRequest();
    const url = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&callback=initMap&v=weekly`;

    request.onreadystatechange = function() {
      console.log(this.readyState);
    };

    request.open("GET", url, true);
    request.send();
  });
});