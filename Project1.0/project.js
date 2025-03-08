document.getElementById("changeContentButton").addEventListener('click', function() {
    let heading = document.getElementById("heading");
    
    if (heading.innerHTML === "This is the heading") {
        heading.innerHTML = "This heading has been changed by JavaScript";
        heading.style.color = "aqua";
    } else {
        heading.innerHTML = "This is the heading"; // Reset to original content
        heading.style.color = "rgb(255, 0, 0)"; // Reset to original color
    }
});
