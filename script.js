// Course & Schedule Page
// Handle menu tab switching
$(document).ready(function () {
    $(".tab-button").click(function () {
        $(".tab-button").removeClass("active");
        $(".tab-content").removeClass("active");

        $(this).addClass("active");
        var target = $(this).data("target");
        $("#" + target).addClass("active");
    });
});

// Handle the toggle of section content
$(document).ready(function () {
    $(".toggle-content").hide();

    $(".toggle-title").click(function () {
        $(this).next(".toggle-content").slideToggle(300);
        $(this)
            .find(".toggle-icon")
            .text(function (_, text) {
                return text === "+" ? "−" : "+";
            });
    });
});

// Home Page - Alumni Testimonial Section
// Select the container that holds all testimonials
const container = document.querySelector(".testimonial-container");

// Select all individual testimonial elements
const testimonials = document.querySelectorAll(".testimonial");

// Calculate the width of a single testimonial slide (including margin)
const slideWidth = testimonials[0].offsetWidth + 15;

let currentIndex = 0; // Keeps track of the current slide index

// Clone the first testimonial and append it at the end to create an infinite loop effect
const firstClone = testimonials[0].cloneNode(true);
container.appendChild(firstClone);

function showTestimonial() {
    // Move to the next slide
    currentIndex++;
    container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    container.style.transition = "transform 0.6s ease-in-out";

    // If we reach the cloned slide, reset to the first slide instantly
    if (currentIndex === testimonials.length) {
        setTimeout(() => {
            container.style.transition = "none"; // Temporarily disable transition for instant reset
            container.style.transform = `translateX(0px)`;
            currentIndex = 0; // Reset index to the first slide
        }, 600); // Wait for the transition to complete before resetting
    }
}

// Automatically switch testimonials every 4 seconds
setInterval(showTestimonial, 4000);
