
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
});

function order() {
    window.location.href = "order.html";
}

function pay() {
    window.location.href = "order.html";
    document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted successfully!");});
}

function searchClick() {
    alert("Search feature coming soon!, and click now Search text");
}


