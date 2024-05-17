document.addEventListener("DOMContentLoaded", function () {
    // Sample data for demonstration
    const characterName = "The Lone Wanderer";
    const specialStats = {
        strength: 10,
        perception: 8,
        // ...
    };
    const skillLevels = {
        guns: 75,
        speech: 50,
        // ...
    };

    // Update character name and stats
    document.getElementById("character-name").textContent = characterName;
    for (const stat in specialStats) {
        document.getElementById(stat).textContent = specialStats[stat];
    }
    for (const skill in skillLevels) {
        document.getElementById(`${skill}-skill`).textContent = skillLevels[skill];
    }

    // Function to send player's reply
    function sendReply() {
        const userInput = document.getElementById("user-input").value;
        // Implement sending the reply to the backend or middleware
        console.log("Reply sent:", userInput);
        // Clear input field
        document.getElementById("user-input").value = "";
    }
});