const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Code for the cursor:

function circleChaptakaro() {
    var xscale = 1
    var yscale = 1

    var xprev = 0
    var yprev = 0

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout)

        var xdiff = dets.clientX - xprev
        var ydiff = dets.clientY - yprev

        xprev = dets.clientX
        yprev = dets.clientY

        xscale = gsap.utils.clamp(0.8, 1.2, xdiff)
        yscale = gsap.utils.clamp(0.8, 1.2, ydiff)

        timeout = setTimeout(function () {
            document.querySelector("#circleScroll").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        }, 100)

    })
}

function MouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#circleScroll").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}


MouseFollower();


// Code for animated background in page 1:
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.createElement("canvas");
    canvas.id = "animated-bg";
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let waveOffset = 0;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function drawBackground() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Darker gradient background
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "#6c757d");
        gradient.addColorStop(1, "#1b263b");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawWave() {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.5);

        for (let i = 0; i <= canvas.width; i += 10) {
            const waveHeight = Math.sin((i + waveOffset) * 0.02) * 15;
            ctx.lineTo(i, canvas.height * 0.5 + waveHeight);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fillStyle = "#000000";
        ctx.fill();

        waveOffset += 0.4; // Speed of wave movement
    }

    function animate() {
        drawBackground();
        drawWave();
        requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resizeCanvas);
    animate();
});



// Code for About button hover effect:
const aboutButton = document.getElementById('aboutButton');
const aboutSection = document.getElementById('aboutSection');
const nav = document.getElementById('nav');

aboutButton.addEventListener('mouseover', () => {
    aboutSection.style.opacity = '1';
    aboutSection.style.visibility = 'visible';
    // nav.style.backgroundImage = 'linear-gradient(to bottom, #6c757d, #f8f9fa)';
});

aboutButton.addEventListener('mouseout', () => {
    aboutSection.style.opacity = '0';
    aboutSection.style.visibility = 'hidden';
    // nav.style.backgroundColor = '';
    // nav.style.backgroundImage = '';
});


// Code for scroll down clicking effect:

// document.addEventListener('DOMContentLoaded', () => {

    const scrollDownButton = document.getElementById('scrollDown');

    scrollDownButton.addEventListener('click', () => {
        scroll.scrollTo('#page2');
    });
// });
