const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


const navToggle = document.getElementById('navToggle');
const resNav = document.getElementById('resNav');

navToggle.addEventListener('change', () => {
    resNav.style.height = navToggle.checked ? "100%" : "0%";
});


gsap.registerPlugin(ScrollTrigger);

const counters = [
    { id: '#counter1', endValue: 900 },
    { id: '#counter2', endValue: 800 },
    { id: '#counter3', endValue: 5000 },
];

counters.forEach(counter => {
    let elem = document.querySelector(counter.id);

    gsap.fromTo(elem,
        { innerText: 0 },
        {
            innerText: counter.endValue,
            duration: 2,
            scrollTrigger: {
                trigger: elem,
                start: "top 80%", // Starts when the element reaches 80% of the viewport
                once: true, // Play the animation only once
            },
            snap: { innerText: 1 }, // Ensure whole numbers
            onUpdate: function () {
                elem.innerText = Math.floor(elem.innerText); // Ensure integers during animation
            }
        }
    );
});


// Create the timeline
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".fade-in-section",
        start: "top 80%",  // Animation starts when the top of the section is at 80% of the viewport
        toggleActions: "play none none none"  // Only play once
    }
});

// Image Animation (First)
tl.from(".fade-in-image", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
})

    // Heading Animation (Second)
    .from(".fade-in-heading", {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.3 // Delay between multiple headings
    }, "-=0.5") // Overlaps the heading animation slightly with the image animation for a smoother flow

    // Paragraph Animation (Third)
    .from(".fade-in-paragraph", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.3  // Staggered appearance for paragraphs
    }, "-=0.4"); // Overlaps slightly with heading animation


gsap.from(".box-item", {
    scrollTrigger: {
        trigger: ".stagger-boxes",
        start: "top 80%",  // Trigger animation when top of grid reaches 80% of the viewport
        toggleActions: "play none none none"  // Only play once
    },
    opacity: 0,
    y: 50,              // Moves up from 50px below
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.3        // Staggers the animation by 0.3 seconds for each box
});


gsap.utils.toArray('.fade-in').forEach((elem) => {
    gsap.from(elem, {
        opacity: 0,
        y: 20, // Slight upward motion for a smoother feel
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: elem,
            start: "top 80%",  // Animation starts when element reaches 80% of viewport height
            toggleActions: "play none none reverse", // Reverses the animation when scrolling up
        }
    });
});