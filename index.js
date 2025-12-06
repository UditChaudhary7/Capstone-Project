let agentName = "Ravi Sharma";
const marketRating = 4.9;
let isAvailable = true;
let tourDate = null;
let commissionRate;

console.log("--- UrbanGhar JS Console Demo ---");
console.log("Agent:", agentName);
console.log("Market Rating:", marketRating);
console.log("Availability:", isAvailable);
console.log("Tour Date:", tourDate);
console.log("Commission Rate (undefined):", commissionRate);
console.log("----------------------------------");

if (marketRating >= 4.5 && isAvailable) {
    console.log("Comparison Check: Agent is highly rated and available (True)");
} else {
    console.log("Comparison Check: Agent needs review (False)");
}

console.log("Is 14 Days (number) equal to '14 Days' (string)?", 14 === "14");

const featuredCities = ["Gurgaon", "Shimla", "Mumbai", "Bangalore"];
console.log("Featured Cities:", featuredCities);

const propertyData = {
    id: 101,
    type: "Villa",
    price: 325800000,
    location: featuredCities[0]
};
console.log("Featured Property:", propertyData);
console.log("Property Price (raw number):", propertyData.price);

function formatCurrency(amount) {
    return `Rs ${(amount / 10000000).toFixed(2)} Cr`;
}

function handleSearch(query) {
    if (query.trim() === "") {
        console.warn("Please enter a location to search.");
        document.getElementById('searchInput').focus();
    } else {
        console.log(`Searching for properties in: ${query}`);
    }
}

const heroTitle = document.getElementById("hero-title");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const listingsTitle = document.getElementById("listings");
const submitButton = document.getElementById("submitBtn");

heroTitle.textContent = "Your journey to a new home starts here!";
listingsTitle.style.textDecoration = "underline";
listingsTitle.style.textDecorationColor = "#006aff";

searchInput.addEventListener('focus', () => {
    searchForm.classList.add('active');
});
searchInput.addEventListener('blur', () => {
    searchForm.classList.remove('active');
});

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    handleSearch(searchInput.value);
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;
    console.log(`Form Submission: Name: ${name}, Email: ${email}, Interested in: ${interest}`);
    document.getElementById('formStatus').style.display = 'block