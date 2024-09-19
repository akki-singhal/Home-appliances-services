// JavaScript for modal functionality
function bookService() {
    document.getElementById('bookingModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('bookingModal')) {
        closeModal();
    }
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

// iske neeche ka code maine likha hai

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


// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('header nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});


// // Function to change image source based on screen width
// function changeImageSrc() {
//     const homeImage = document.getElementById('homeimage');
//     if (window.innerWidth <= 768) {
//         homeImage.src = 'Design-1.1/images/washing-machine.png';
//     } else {
//         homeImage.src = 'desktop-image.jpg';
//     }
// }

// // Call function when the window is resized or when the page loads
// window.addEventListener('resize', changeImageSrc);
// window.addEventListener('load', changeImageSrc);

