
const searchInput = document.getElementById("searchInput");
const movieCards = document.querySelectorAll(".movie-card");

searchInput.addEventListener("keyup", function(){
  let filter = searchInput.value.toLowerCase();

  movieCards.forEach(function(card){
    let title = card.querySelector("h3").innerText.toLowerCase();

    if(title.includes(filter)){
      card.style.display = "block";
    }else{
      card.style.display = "none";
    }
  });
});


// ===============================
// LOCATION CODE (ADD BELOW)
// ===============================

// Google Places Autocomplete
function initAutocomplete(){
  let input = document.getElementById("locationInput");
  new google.maps.places.Autocomplete(input);
}

// Page load ayyaka run avvali
window.onload = function(){
  initAutocomplete();
};

// Use My Location Button
function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      alert(
        "Latitude: " + position.coords.latitude +
        ", Longitude: " + position.coords.longitude
      );
    });
  }else{
    alert("Geolocation not supported");
  }
}

// REMOVE ANY INPUT LIMITATIONS
const locationBox = document.getElementById("locationInput");
const searchBox = document.getElementById("searchInput");

locationBox.removeAttribute("maxlength");
searchBox.removeAttribute("maxlength");

locationBox.addEventListener("input", function(){
  this.value = this.value;   // force normal behavior
});


searchBox.addEventListener("input", function(){
  this.value = this.value;
});