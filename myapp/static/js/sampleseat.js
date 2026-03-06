const seatsContainer = document.getElementById("seats");
const count = document.getElementById("count");
const total = document.getElementById("total");
const seatNamesDiv = document.getElementById("seatNames");

const price = 200;
const rows = 8;
const cols = 10;
const maxSeats = 6;

const rowNames = ["A","B","C","D","E","F","G","H"];

// Create seats
rowNames.forEach(row => {
  for (let i = 1; i <= cols; i++) {
    const seat = document.createElement("div");
    const seatName = row + i;

    seat.innerText = seatName;
    seat.setAttribute("data-seat", seatName);

    if (Math.random() < 0.2) {
      seat.classList.add("booked");
    }

    seatsContainer.appendChild(seat);
  }
});

// Click event
seatsContainer.addEventListener("click", e => {

  if(
    e.target.tagName === "DIV" &&
    !e.target.classList.contains("booked")
  ){

    if(e.target.classList.contains("selected")){
      e.target.classList.remove("selected");
    }
    else{
      const selectedSeats =
        document.querySelectorAll(".seats .selected");

      if(selectedSeats.length >= maxSeats){
        alert("You can select maximum 6 seats only");
        return;
      }
      e.target.classList.add("selected");
    }

    updateSummary();
  }
});

function updateSummary(){
  const selectedSeats =
    document.querySelectorAll(".seats .selected");

  count.innerText = selectedSeats.length;
  total.innerText = selectedSeats.length * price;

  const names = [...selectedSeats].map(s => s.innerText);
  seatNamesDiv.innerText = "Seats: " + names.join(", ");
}

function goToPayment(){

  const selectedSeats =
    document.querySelectorAll(".seats .selected");

  if(selectedSeats.length === 0){
    alert("Please select seats first");
    return;
  }

  const seatNames = [...selectedSeats].map(s => s.innerText);

  localStorage.setItem("selectedSeats", JSON.stringify(seatNames));
  localStorage.setItem("ticketCount", selectedSeats.length);
  localStorage.setItem("totalAmount", selectedSeats.length * price);

  // redirect to payment page
  window.location.href = "/payment/";
}


// Clear everything when page loads
window.addEventListener("load", () => {
  localStorage.removeItem("selectedSeats");
  localStorage.removeItem("ticketCount");
  localStorage.removeItem("totalAmount");

  document.getElementById("count").innerText = 0;
  document.getElementById("total").innerText = 0;
  document.getElementById("seatNames").innerText = "";
});