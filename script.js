// Add your JavaScript code here
document.addEventListener("DOMContentLoaded", function () {
    const heading = document.getElementById("heading");
    const colorChangeButton = document.getElementById("colorChangeButton");

    colorChangeButton.addEventListener("click", function () {
        // Generate a random color
        const randomColor = getRandomColor();
        // Change the text color of the heading
        heading.style.color = randomColor;
    });

    // Function to generate a random color
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
