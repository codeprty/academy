// ✅ JavaScript for Home Page - Alumni Testimonial Section
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".testimonial-container");
    const testimonials = document.querySelectorAll(".testimonial");

    if (container && testimonials.length > 0) {
        const slideWidth = testimonials[0].offsetWidth + 15;
        let currentIndex = 0;

        // Clone the first testimonial to create an infinite loop effect
        const firstClone = testimonials[0].cloneNode(true);
        container.appendChild(firstClone);

        function showTestimonial() {
            currentIndex++;
            container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            container.style.transition = "transform 0.6s ease-in-out";

            if (currentIndex === testimonials.length) {
                setTimeout(() => {
                    container.style.transition = "none";
                    container.style.transform = `translateX(0px)`;
                    currentIndex = 0;
                }, 600);
            }
        }

        setInterval(showTestimonial, 4000);
    }
});


// ✅ jQuery for Course Listing & Course Pages
$(document).ready(function () {
    // Course Listing Page: Handle tab selection & filtering
    $(".filter-button").click(function () {
        $(".filter-button").removeClass("active");
        $(this).addClass("active");
        var category = $(this).data("filter");
        $("#course-search").val("");

        $(".course-item").hide().filter(function () {
            return category === "all" || $(this).data("category") === category;
        }).fadeIn();
    });

    // Search functionality - filters based on the selected category
    $("#course-search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        var category = $(".filter-button.active").data("filter");

        $(".course-item").each(function () {
            var matches = $(this).text().toLowerCase().includes(value);
            var inCategory = category === "all" || $(this).data("category") === category;
            $(this).toggle(matches && inCategory);
        });
    });

    // Course & Schedule Page: Handle menu tab switching
    $(".tab-button").click(function () {
        $(".tab-button").removeClass("active");
        $(".tab-content").removeClass("active");
        $(this).addClass("active");
        var target = $(this).data("target");
        $("#" + target).addClass("active");
    });

    // Course & Schedule Page: Handle toggle sections
    $(".toggle-content").hide();
    $(".toggle-title").click(function () {
        $(this).next(".toggle-content").slideToggle(300);
        $(this).find(".toggle-icon").text(function (_, text) {
            return text === "+" ? "−" : "+";
        });
    });
});