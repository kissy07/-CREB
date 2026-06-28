// =========================
// HOME BUTTON
// =========================
const exploreBtn = document.getElementById("exploreBtn");

if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
        document.getElementById("services").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// =========================
// ADD REVIEW
// =========================
function addReview() {

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || message === "") {
        alert("Please fill out all fields!");
        return;
    }

    // Get the testimonials container
    const container = document.querySelector(".testimonial-cards");

    // Create a new testimonial card
    const card = document.createElement("div");
    card.className = "testimonial-card";

    card.innerHTML = `
        <h3>⭐⭐⭐⭐⭐</h3>
        <h4>${name}</h4>
        <p>${message}</p>
        <button type="button" onclick="deleteReview(this)">Delete</button>
    `;

    // Add the new review
    container.appendChild(card);

    // Clear the form
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";

    // Scroll to Testimonials
    document.getElementById("testimonials").scrollIntoView({
        behavior: "smooth"
    });

    // Optional message
    alert("Thank you! Your review has been added.");
}
function deleteReview(button) {
    button.parentElement.remove();
}