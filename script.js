const container = document.querySelector(".testimonial-container");
const testimonials = document.querySelectorAll(".testimonial");

// Calculate the width of a single testimonial slide (including margin)
const slideWidth = testimonials[0].offsetWidth + 15;

let currentIndex = 0; // Keeps track of the current slide index

// Clone the first testimonial and append it at the end to create an infinite loop effect
const firstClone = testimonials[0].cloneNode(true);
container.appendChild(firstClone);

function showTestimonial() {
    // Move to the next slide by increasing the current index
    currentIndex++;
    container.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Shift the container
    container.style.transition = "transform 0.6s ease-in-out"; // Apply a smooth transition effect

    // Check if we've reached the cloned slide, and if so, reset the slides
    if (currentIndex === testimonials.length) {
        setTimeout(() => {
            container.style.transition = "none"; // Disable transition for an instant reset
            container.style.transform = `translateX(0px)`; // Reset to the first slide
            currentIndex = 0; // Reset the index to the first slide
        }, 600); // Wait for the transition to complete before resetting
    }
}

// Automatically switch testimonials every 3 seconds
setInterval(showTestimonial, 3000);
