import gsap from "gsap"
import Lenis from '@studio-freight/lenis'

document.addEventListener('DOMContentLoaded', function () {

    // Smooth Scroll

    const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: .9,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    })
      
    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)



    if(window.matchMedia("(pointer: coarse)").matches) {
        document.body.classList.add('touch');
    } else {
        document.body.classList.add('desktop');
    }

    if(!document.body.classList.contains('touch')) {
        var bubbles = document.querySelectorAll('section .bubble');

        bubbles.forEach(function (bubble) {
            bubble.addEventListener('mouseover', function () {
                document.querySelector('.custom-cursor').classList.add('black');
                gsap.to(bubble.firstElementChild, .7, { scale: 1 });
            });
    
            bubble.addEventListener('mouseleave', function () {
                document.querySelector('.custom-cursor').classList.remove('black');
                gsap.to(bubble.firstElementChild, .7, { scale: 0 });
            });
        });
    
    
        //Magnet Effect
        var magnets = document.querySelectorAll('.magnetic')
        var strength = 100
        
        magnets.forEach( (magnet) => {
            magnet.addEventListener('mousemove', moveMagnet );
            magnet.addEventListener('mouseout', function(event) {
                gsap.to( event.currentTarget, 1, {x: 0, y: 0})
            } );
        });
        
        function moveMagnet(event) {
            var magnetButton = event.currentTarget
            var bounding = magnetButton.getBoundingClientRect()
        
            //console.log(magnetButton, bounding)
        
            gsap.to( magnetButton, 1, {
                x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
                y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength
            })
        }
    
        
        //Arrow follows cursor (Bubbles)
        let arrows = document.querySelectorAll(".shape img");
    
        let rotations = [];
        
        function calculatePositions() {
            rotations = [];
        
            arrows.forEach((arrow, index) => {
                let dr = arrow.getBoundingClientRect();
                let center = { x: dr.left + arrow.offsetWidth / 2, y: dr.top + arrow.offsetHeight / 2 };
        
                rotations[index] = {
                    element: arrow,
                    center: center,
                    angle: 0,
                    prevAngle: 0
                };
            });
        }
        
        function updatePositions() {
            rotations.forEach(rotation => {
                let dr = rotation.element.getBoundingClientRect();
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        
                rotation.center = { 
                    x: dr.left + scrollLeft + rotation.element.offsetWidth / 2, 
                    y: dr.top + scrollTop + rotation.element.offsetHeight / 2 
                };
            });
        }
        
        calculatePositions();
        
        window.addEventListener('resize', function () {
            calculatePositions();
            updatePositions();
        });
        
        document.addEventListener("mousemove", function (e) {
            updatePositions();
        
            rotations.forEach(rotation => {
                let dx = e.pageX - rotation.center.x;
                let dy = e.pageY - rotation.center.y;
                let cra = Math.atan(dy / dx) * 180 / Math.PI;
        
                if (dx > 0 && dy < 0 || dx > 0 && dy > 0) {
                    cra = 180 + cra;
                } else if (dx < 0 && dy > 0) {
                    cra = 360 + cra;
                }
        
                if (rotation.angle == 0) {
                    rotation.angle = cra;
                } else {
                    let da = cra - rotation.prevAngle;
                    rotation.angle += da;
        
                    if ((da < 0 && Math.abs(da) > 360 + da) || da > 180) {
                        rotation.angle += da > 180 ? -360 : 360;
                    }
                }
        
                rotation.prevAngle = cra;
                rotation.element.style.transform = "rotate(" + rotation.angle + "deg)";
            });
        });
        
        document.addEventListener("scroll", function () {
            updatePositions();
        });
    
    
        //Custom cursor
        const cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        document.body.appendChild(cursor);
    
        function updateCursorPosition(e) {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
    
        document.addEventListener('mousemove', updateCursorPosition);
    
        // Center the cursor initially
        updateCursorPosition({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });
    
        var ctas = document.querySelectorAll('section.section2 li a, .main-btn');
    
        ctas.forEach(function (cta) {
            cta.addEventListener('mouseenter', function () {
                document.querySelector('.custom-cursor').classList.add('yellow');
            });
    
            cta.addEventListener('mouseleave', function () {
                document.querySelector('.custom-cursor').classList.remove('yellow');
            });
        });
    } else {

        var burgerMenu = document.querySelector('.burger-menu');
        var header = document.querySelector('header');

        burgerMenu.addEventListener('click', function() {
            if(!header.classList.contains('active')) {
                document.body.classList.remove('blured');
            } else {
                document.body.classList.add('blured');
            }
        });
    }

    if(window.innerWidth < 551) {
        var bubblesTl = gsap.timeline({duration: 1.5});

        bubblesTl.from('body', {opacity: 0})
                 .from('section.hero-section .bubble1 a', {x: '50%', y: '50%', opacity: 0}, 'st', '-=300')
                 .from('section.hero-section .bubble2 a', {x: '-50%', y: '50%', opacity: 0}, 'st')
                 .from('section.hero-section .bubble3 a', {x: '50%', y: '-50%', opacity: 0}, 'st')
                 .from('section.hero-section .bubble4 a', {x: '-50%', y: '-50%', opacity: 0}, 'st');
    }
    

    
});


