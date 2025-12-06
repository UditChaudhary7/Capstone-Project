const maxWaitTime = 5;
let isSupportActive = true;
const companyName = "UrbanGhar";
const supportTopics = ["Buying", "Renting", "Selling", "Account"];
const appConfig = {
    version: 1.2,
    language: "en-US",
    contactEmail: "support@urbanghar.com"
};

console.log(`--- Initial App State (${companyName}) ---`);
console.log("Max Estimated Wait Time:", maxWaitTime, "minutes");
console.log("Support Status:", isSupportActive ? "Online" : "Offline");
console.log("Configuration:", appConfig);
console.log("Available Topics:", supportTopics);

function generateReferenceId() {
    return Math.floor(Math.random() * 1000000);
}

function handleSupportClick() {
    const supportBtn = document.getElementById('supportBtn');
    const messageCard = document.getElementById('msg');
    const refIdSpan = document.getElementById('refId');
    const referenceId = generateReferenceId();
    refIdSpan.textContent = referenceId;
    messageCard.style.display = 'grid';
    supportBtn.textContent = 'Request Sent!';
    supportBtn.disabled = true;
    supportBtn.style.opacity = 0.7;

    if (isSupportActive) {
        console.log(`SUCCESS: Support request sent. Ref ID: ${referenceId}`);
        if (maxWaitTime > 4) {
            console.warn("NOTE: Current wait time is high. We apologize for the delay.");
        }
    } else {
        console.error("ERROR: Support is currently offline.");
        messageCard.innerHTML = "<h2>Support is Offline</h2><p>Please try again during business hours.</p>";
    }
}

document.getElementById('supportBtn').addEventListener('click', handleSupportClick);

const heroTitle = document.querySelector(".hero h1");
if (heroTitle) {
    heroTitle.textContent = heroTitle.textContent + " Live!";
}