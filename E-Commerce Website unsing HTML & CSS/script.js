const text = "- In a world of trends, choose to be uniquely you.";
    let index = 0;

    function typeEffect() {
        if (index <= text.length) {
            document.getElementById("typing-text").innerText = text.substring(0, index);
            index++;
            setTimeout(typeEffect, 100); // Adjust speed (100ms per letter)
        }
    }

    typeEffect();