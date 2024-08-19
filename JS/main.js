$(document).ready(function(){
    $('.hm-menu').click(function(){
        $('header').toggleClass('h-100');
        $('.hm-menu span').toggleClass('hm-100');
        $('html').toggleClass('over-x');
    });
     
     $('header nav a').click(function(){
        $('header').removeClass('h-100');
        $('.hm-menu span').removeClass('hm-100');
         $('html').removeClass('over-x');
    });
     
 });


 /* THE STATS*/
 document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.number');
    const statsSection = document.getElementById('stats');
    let hasScrolled = false;

    function animateStats() {
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const updateCount = () => {
                const current = +stat.innerText;
                const increment = target / 100;
                
                if (current < target) {
                    stat.innerText = Math.ceil(current + increment);
                    setTimeout(updateCount, 50);
                } else {
                    stat.innerText = target;
                }
            };
            updateCount();
        });
    }

    function checkScroll() {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && !hasScrolled) {
            hasScrolled = true;
            animateStats();
        }
    }

    window.addEventListener('scroll', checkScroll);
});





// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modal-image");
var images = document.querySelectorAll('.gallery-image');

images.forEach(function(image) {
    image.addEventListener('click', function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside of the image
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


