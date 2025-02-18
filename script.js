// Add event listeners for dropdown toggling
const dropdownItems = document.querySelectorAll('.dropdown > li > a');

dropdownItems.forEach(item => {
    item.addEventListener('click', function(event) {
        const dropdown = this.nextElementSibling;
        
        if (dropdown && dropdown.classList.contains('dropdown')) {
            event.preventDefault(); // Prevent link navigation
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }
    });
});
