// Get values from localStorage
let tickets = localStorage.getItem("tickets") || 0;
let amount = localStorage.getItem("amount") || 0;

// Dummy seats
let seats = "M11, M12, M13";

// Random Booking ID
let bookingId = "VTMB" + Math.floor(Math.random()*10000000);

document.getElementById("ticketCount").innerText = tickets;
document.getElementById("amount").innerText = amount;
document.getElementById("seatNumbers").innerText = seats;
document.getElementById("bookingId").innerText = bookingId;

// Generate QR Code
let qrData = bookingId;
document.getElementById("qrImg").src =
`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrData}`;

localStorage.removeItem("selectedSeats");
localStorage.removeItem("ticketCount");
localStorage.removeItem("totalAmount");

function goHome(){
    window.location.href="/home/";
}