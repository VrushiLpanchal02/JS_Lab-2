// Lab 2 - Mission Status Simulator
// Student: Vrushil Panchal
// Student ID: 200628377

// Mission variables for this simulation
let health = 65;
let ammo = 8;
let shield = true;
let missionProgress = 40;
let enemyNearby = true;

// Connect to the page
const missionStatus = document.querySelector("#missionStatus");
const studentInfo = document.querySelector("#studentInfo");

// Show student details on page
studentInfo.textContent = "Vrushil Panchal - 200628377";

// Decide mission status based on priority rules
if (health < 30 && enemyNearby === true) {
    missionStatus.textContent = "CRITICAL ALERT: Immediate Evacuation Required";
}
else if (ammo < 5 || shield === false) {
    missionStatus.textContent = "Warning: Low Resources";
}
else if (missionProgress === 100) {
    missionStatus.textContent = "Mission Complete Successfully";
}
else if (missionProgress >= 1 && missionProgress <= 70) {
    missionStatus.textContent = "Mission In Progress";
}
else if (missionProgress > 70 && enemyNearby === false) {
    missionStatus.textContent = "Approaching Mission Completion";
}
else {
    missionStatus.textContent = "System Stable";
}