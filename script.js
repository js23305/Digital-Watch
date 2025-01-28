// Function to update the clock every second
function updateClock() {
    // Step 1: Get the current time
    const now = new Date(); // Creates a new Date object with the current date and time

    // Step 2: Specify formatting options for UK time
    const options = {
        timeZone: "Europe/London", // Ensures the time is based on the uk time zone (GMT or BST)
        hour12: false
    };

    // Step 3:Convert the current time to a string in UK time format
    const timeString = now.toLocaleTimeString("en-GB", options)
    // 'toLocateTimeString formats the time to match the locale 'en-GB' (British English)
    // For example, it will return something like '14:30:45'

    // Step 4: Display the formatted time inside the HTML element with the ID 'time'
    document.getElementById("time").textContent = timeString;
    // Accessesb the HTML element with the ID 'time' and updates its text to the current UK time
}

// Step 5: Run the updateClock function every 1 second (1000 milliseconds)
setInterval (updateClock, 1000);
// `setInterval` repeatedly calls the updateClock function at the specified interval (1000 ms = 1 second)

// Step 6: Call the function once immediately to show the clock as soon as the page loads
updateClock(); 
// This ensures the clock starts displaying the correct time without waiting for 1 second.