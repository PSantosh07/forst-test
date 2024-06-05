const textElement = document.querySelector('.about-heading .typing-effect');
const textArray = ["Hi, I'm Santosh", "A Creative Web Dev"];
let arrayIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 200;

function type() {
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    textElement.textContent = textArray[arrayIndex].substring(0, charIndex);

    if (!isDeleting && charIndex === textArray[arrayIndex].length) {
        setTimeout(() => {
            isDeleting = true;
        }, 1000); // Set delay to 1 second before starting to erase
    } else if (isDeleting && charIndex === 0) {
        arrayIndex = (arrayIndex + 1) % textArray.length;
        isDeleting = false;
    }

    let currentSpeed = isDeleting ? typingSpeed / 2 : typingSpeed;
    setTimeout(type, currentSpeed);
}

type(); // Start the typing effect
