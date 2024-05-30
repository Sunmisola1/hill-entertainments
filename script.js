// Replace the targetDate with your event date
const targetDate = new Date('December 1, 2024 00:00:00').getTime()

// Update the countdown every 1 second
const countdownInterval = setInterval(function () {
  const currentDate = new Date().getTime()
  const timeRemaining = targetDate - currentDate

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)

  document.getElementById(
    'countdown'
  ).innerHTML = `${days}d :  ${hours}h : ${minutes}m : ${seconds}s`

  // If the countdown is over, display a message
  if (timeRemaining < 0) {
    clearInterval(countdownInterval)
    document.getElementById('countdown').innerHTML = 'Event has started!'
  }
}, 1000)

// JavaScript to toggle mobile menu
const mobileMenuButton = document.getElementById('mobile-menu-button')
const mobileMenu = document.getElementById('mobile-menu')
mobileMenuButton.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden')
  subscribeButton.classList.toggle('hidden')
})

// // Close mobile menu when clicking outside
document.addEventListener('click', function (event) {
  const isClickInsideMobileMenu = mobileMenu.contains(event.target)
  const isClickOnMobileMenuButton = mobileMenuButton.contains(event.target)
  if (!isClickInsideMobileMenu && !isClickOnMobileMenuButton) {
    mobileMenu.classList.add('hidden')
    subscribeButton.classList.remove('hidden')
  }
})

// // typedjs
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    // Your code here
    const options = {
      strings: ['This is Hills Entertainment', 'nive to meeet you'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      loop: true
    }
    const typed = new Typed('#typed-output', options)
  })
} else {
  // The DOM is already ready
  // Your code here
  const options = {
    strings: ['This is Hills Entertainment'],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1500,
    loop: true
  }
  const typed = new Typed('#typed-output', options)
}
// slider
var swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000 // Time in milliseconds between slides
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
// animation
// let sections = document.querySelectorAll('section')
// window.onscroll=()=>{
//   sections.forEach(sec => {
//     // the amount i used to scrolll down
//     let top = window.scrollY;
//     let offset =sec.offsetTop-300;
//     let height = sec.offsetHeight;
//     let inner= sec.innerHeight;

//     if(top >= offset && top < offset + height){
    
//      sec.classList.add('show-animate');
//  } else{
  
//       sec.classList.remove('show-animate');
//     }
//   // first section




//     // console.log(top)
//     console.log(height);
// });}

 

// Function to handle animations
// function handleAnimation() {
//   const animatedElement = document.querySelector('.animate-on-scroll');
//   const elementPosition = animatedElement.getBoundingClientRect().top;

//   if (elementPosition < window.innerHeight * 0.75) {
//       animatedElement.classList.add('animate'); // Add a CSS class to trigger the animation
//       window.removeEventListener('scroll', handleAnimation); // Remove the scroll event listener once animation is triggered
//   }
// }

// Add a scroll event listener
// window.addEventListener('scroll', handleAnimation);


 // Initialize ScrollReveal
//  ScrollReveal().reveal('.scroll-reveal', {
//   duration: 1000, // Animation duration in milliseconds
//   origin: 'bottom', // Animation starting point (e.g., 'bottom', 'top', 'left', 'right')
//   distance: '20px', // Animation distance
//   easing: 'ease-in-out', // Animation easing
// });




