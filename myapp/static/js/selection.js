let selectedSeats = 0;

function openSeatPopup(){
  document.getElementById("seatModal").style.display="flex";
}

function closeSeatPopup(){
  document.getElementById("seatModal").style.display="none";
}

function selectCount(num){
  selectedSeats = num;

  document.querySelectorAll(".seat-count span")
  .forEach(s => s.classList.remove("active"));

  document.querySelectorAll(".seat-count span")[num-1]
  .classList.add("active");
}

function goToSeats(){
  if(selectedSeats==0){
    alert("Select seats count");
    return;
  }
  localStorage.setItem("seatCount",selectedSeats);
  window.location.href="{% url 'sampleseat' %}";
}