// JavaScript for modal functionality
function bookService() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'block';

    // Add the animation class to the form
    const bookingForm = document.getElementById('bookingForm'); // Ensure your form has this ID
    bookingForm.classList.add('form-appear');
}

// Ensure to remove the class when closing the modal
function closeModal() {
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.classList.remove('form-appear'); // Remove the animation class
    document.getElementById('bookingModal').style.display = 'none';
}


// Show and hide greeting pop-up
window.addEventListener('load', () => {
    const greeting = document.getElementById('greeting');
    const exploreButton = document.getElementById('explore-button');

    // Show the greeting on page load
    setTimeout(() => {
        greeting.classList.add('show');
    }, 500); // Adjust time to control when the greeting appears

    // Close the greeting when the button is clicked
    exploreButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default action of the button
        greeting.classList.remove('show');
        // Optionally, you can add smooth scrolling to the #services section here if desired
        document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
    });

    // Optional: Auto-hide the greeting after a few seconds if not clicked
    setTimeout(() => {
        if (greeting.classList.contains('show')) {
            greeting.classList.remove('show');
        }
    }, 5000); // Adjust time to control how long the greeting stays visible
});

// blog read more functionality
function toggleBlogContent(event) {
    event.preventDefault(); // Prevent the default link behavior
    
    const blogPost = event.target.closest('.blog-post');
    const fullContent = blogPost.querySelector('.blog-full-content');
    
    if (fullContent.style.display === 'none' || fullContent.style.display === '') {
        fullContent.style.display = 'block';
        event.target.textContent = 'Read Less';
    } else {
        fullContent.style.display = 'none';
        event.target.textContent = 'Read More';
    }
}


// JavaScript for smooth scrolling to the contact section
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior

    // Get the target section
    const targetSection = document.querySelector('#contact');

    // Scroll to the target section
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// hiding header when scroll up and shows when scroll dwon
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.top = "-100px"; // Adjust based on your navbar's height
  } else {
    // Scrolling up
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});


// hambuerger toogle
const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active'); // Add this line for hamburger animation
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active'); // Close the menu
            hamburger.classList.remove('active'); // Reset hamburger animation
        });
    });


