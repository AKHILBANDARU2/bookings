let selectedMovie = "";
let ticketPrice = 12; // Default ticket price for Action Movie
let totalPrice = ticketPrice;

function selectMovie(movieName, price) {
    selectedMovie = movieName;
    ticketPrice = price;
    totalPrice = price;

    // Update the total price and display the selected movie
    document.getElementById("total-price").textContent = totalPrice;
    document.getElementById("ticket-count").value = 1;
}

function updateTotalPrice() {
    const ticketCount = document.getElementById("ticket-count").value;
    totalPrice = ticketCount * ticketPrice;
    document.getElementById("total-price").textContent = totalPrice;
}

document.getElementById("ticket-form").addEventListener("submit", function (e) {
    e.preventDefault();

    if (selectedMovie === "") {
        alert("Please select a movie first!");
        return;
    }

    const ticketCount = document.getElementById("ticket-count").value;
    const confirmationMessage = `Your booking for ${ticketCount} ticket(s) of ${selectedMovie} has been confirmed. Total price: $${totalPrice}.`;

    document.getElementById("confirmation-message").textContent = confirmationMessage;
    document.getElementById("confirmation-modal").style.display = "flex";
});

function closeModal() {
    document.getElementById("confirmation-modal").style.display = "none";
}
