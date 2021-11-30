// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";
import { initPerformanceCable } from '../channels/performance_channel';
import { initMapbox } from '../plugins/init_mapbox';
// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  initPerformanceCable();
  initMapbox();
});

import "controllers"
import { MapMouseEvent } from "mapbox-gl";

// Opacity fade for top nav search bar
document.getElementById('test').style.opacity = 0;
window.addEventListener('scroll', function () {
  var currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  if (currScrollPos2 < 200) {
    document.getElementById('test').style.opacity = currScrollPos2 / 200;
  } else {
    document.getElementById('test').style.opacity = 1;
  }
}
);


/* When the user clicks on the button,
toggle between hiding and showing the drop content */

// #useroptions-dropdown
// #useroptions-dropdown-menu
const dropDownBtn = document.querySelector("#useroptions-dropdown");
dropDownBtn.addEventListener("click", (event) => {
  console.log(event);
  document.getElementById("useroptions-dropdown-menu").classList.toggle("show");
});


// #useroptions-dropup
// #useroptions-dropup-menu
const dropUpBtn = document.querySelector("#useroptions-dropup");
dropUpBtn.addEventListener("click", (event) => {
  console.log(event);
  document.getElementById("useroptions-dropup-menu").classList.toggle("show");
});


//.ro-button-useroptions-cssdropbtn

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.ro-button-useroptions-cssdropbtn')) {
    var dropdowns = document.getElementsByClassName("ro-button-useroptions-cssdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




function mapset() {
  initMapbox();
  map.resize();
}
