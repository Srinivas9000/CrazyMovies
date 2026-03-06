// Get booking data
let tickets = localStorage.getItem("tickets") || 0;
let amount = localStorage.getItem("amount") || 0;

document.getElementById("ticketCount").innerText = tickets;
document.getElementById("totalAmount").innerText = amount;

let modes = Array.from(document.getElementsByName("mode"));
let cardForm = document.getElementById("cardForm");
let upiForm = document.getElementById("upiForm");
let success = document.getElementById("successMsg");

// Toggle payment forms
modes.forEach(mode => {
    mode.addEventListener("change", () => {
        if (mode.value === "card") {
            cardForm.style.display = "block";
            upiForm.style.display = "none"; 
        } else {
            cardForm.style.display = "none";
            upiForm.style.display = "block";
        }
    });
});

// Card Payment
cardForm.addEventListener("submit", function(e){
    e.preventDefault();
    success.style.display = "block";

    alert("Card Payment Successful 🎉");

    const confirmTickets = confirm("Tickets Confirmed 🎟️\nClick OK to download tickets");
    if (confirmTickets) {
        downloadTicket();
        window.location.href = "/confirmation/";
    }
});

// UPI Payment
upiForm.addEventListener("submit", function(e){
    e.preventDefault();

    let upi = document.getElementById("upiId").value;

    if (!upi.includes("@")) {
        alert("Enter valid UPI ID");
        return;
    }

    // Show UPI payment success
    alert("UPI Payment Successful 🎉");

    // Confirm tickets
    const confirmTickets = confirm("Tickets Confirmed 🎟️\nClick OK to download tickets");
    if (confirmTickets) {
      downloadTicket();  
        window.location.href = "/confirmation/";
    }
});
function downloadTicket() {
    // Get booking data from localStorage
    let tickets = localStorage.getItem("tickets") || 0;
    let amount = localStorage.getItem("amount") || 0;
    let movie = localStorage.getItem("selectedMovie") || "Movie Name";
    let theatre = localStorage.getItem("selectedTheatre") || "Theatre";
    let time = localStorage.getItem("selectedShowTime") || "Showtime";
    let seats = localStorage.getItem("selectedSeats") || "Seats";

    // Create ticket content
    let content = `🎟️ Movie Ticket 🎟️\n\nMovie: ${movie}\nTheatre: ${theatre}\nTime: ${time}\nSeats: ${seats}\nTickets: ${tickets}\nTotal Amount: ₹${amount}\n\nEnjoy the show!`;

    // Create a Blob and link to download
    let blob = new Blob([content], { type: "text/plain" });
    let url = URL.createObjectURL(blob);

    let a = document.createElement("a");
    a.href = url;
    a.download = `${movie}_ticket.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
