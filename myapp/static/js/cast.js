let currentTrailerUrl = "";

function openPopup(img, name, info, trailerUrl) {
  document.getElementById("popupImg").src = img;
  document.getElementById("popupName").innerText = name;
  document.getElementById("popupInfo").innerText = info;

  currentTrailerUrl = trailerUrl;   // store trailer link

  document.getElementById("actorPopup").style.display = "flex";
}

function openTrailer(btn) {
  let trailerUrl = btn.getAttribute("data-trailer");
  console.log("Opening:", trailerUrl);

  if (trailerUrl && trailerUrl !== "None") {
    window.open(trailerUrl, "_blank");
  } else {
    alert("Trailer not available");
  }
}



function closePopup() {
  document.getElementById("actorPopup").style.display = "none";
}
