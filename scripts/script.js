const animations = [
    {
        target: '.navbar',
        duration: 0.5,
        delay: 0.3,
        y: '-50%',
    },
    {
        target: '#h6-col-content',
        duration: 0.5,
        delay: 1,
        y: '10%',
        opacity: -5,
        ease: 'power2.out',
    },
    {
        target: '#h1-col-content',
        duration: 0.7,
        delay: 1,
        y: '10%',
        opacity: -5,
        ease: 'power2.out',
    },
    {
        target: '#p-col-content',
        duration: 0.8,
        delay: 1,
        y: '10%',
        opacity: -5,
        ease: 'power2.out',
    },
    {
        target: '#hero-img',
        duration: 0.2,
        delay: 1.8,
        opacity: 0,
        scale: 0.9,
        ease: 'power2.out',
    },
];

animations.forEach(animation => {
    gsap.from(animation.target, {
        duration: animation.duration,
        delay: animation.delay,
        y: animation.y,
        opacity: animation.opacity || 0,
        scale: animation.scale || 1,
        ease: animation.ease || 'none',
    });
});



function calculateDelay(className) {
    const number = parseInt(className.split('-')[1]);
    return 0.4 + (number - 1) * 0.1;
}

const animationSettings = {
    opacity: 0,
    y: '14%',
    scrollTrigger: {
        duration: 0.1,
        start: 'bottom bottom'
    },
    duration: 0.1,
    ease: 'power2.out'
};

for (let i = 1; i <= 4; i++) {
    gsap.set(`.col-${i}`, { opacity: 0, y: '50%' });

    gsap.to(`.col-${i}`, {
        ...animationSettings,
        scrollTrigger: { ...animationSettings.scrollTrigger, trigger: `.col-${i}` },
        opacity: 1,
        y: '0%',
        delay: calculateDelay(`col-${i}`),
        onStart: () => gsap.set(`.col-${i}`, { opacity: 0 })
    });
}


function calculateDelay1(className) {
    const number = parseInt(className.split('-')[1]);
    return 0.4 + (number - 20) * 0.2;
}

const animationSettings1 = {
    opacity: 0,
    y: '14%',
    scrollTrigger: {
        duration: 0.2,
        start: 'top bottom'
    },
    duration: 0.3,
    ease: 'power2.out'
};

for (let i = 1; i <= 4; i++) {
    gsap.set(`.col-2${i}`, { opacity: 0, y: '50%' });

    gsap.to(`.col-2${i}`, {
        ...animationSettings1,
        scrollTrigger: { ...animationSettings1.scrollTrigger, trigger: `.col-2${i}` },
        opacity: 1,
        y: '0%',
        delay: calculateDelay1(`col-2${i}`),
        onStart: () => gsap.set(`.col-2${i}`, { opacity: 0 })
    });
}
const card = document.querySelectorAll('.card');

card.forEach(divHover => {
    const icon = divHover.querySelector('.fa');

    divHover.addEventListener('mouseenter', () => {
        gsap.to(divHover, { scale: 1.01, boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.1)', duration: 0.3 });
        gsap.to(icon, { y: -8, duration: 0.3 });
    });

    divHover.addEventListener('mouseleave', () => {
        gsap.to(divHover, { scale: 1, boxShadow: 'none', duration: 0.3 });
        gsap.to(icon, { y: 0, duration: 0.3 });
    });
});


gsap.utils.toArray(".item").forEach(item => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            scale: 0.9,
            duration: 1,
            start: 'center bottom'
        },
        opacity: 1,
        y: '0%',
        duration: 1,
        ease: 'power2.out',
        onComplete: function () {
            gsap.set(item, { clearProps: 'opacity' });
        }
    })
})

function animateSection(selector) {
    gsap.set(selector, { opacity: 0, y: '1%' });

    gsap.to(selector, {
        scrollTrigger: {
            trigger: selector,
            scale: 0.9,
            duration: 0.3,
            start: 'center bottom'
        },
        opacity: 1,
        y: '0%',
        duration: 1,
        ease: 'power2.out',
        onComplete: function () {
            gsap.set(selector, { clearProps: 'opacity' });
        }
    });
}

animateSection(".our-mission-section");
animateSection(".download-app-section");
animateSection(".about-us-section");
animateSection(".item");
animateSection(".footer");

gsap.set(".press-news-content", { opacity: 0, scale: 0.9 });

gsap.to(".press-news-content", {
    scrollTrigger: {
        trigger: ".press-news-content",
        scale: 1,
        duration: 1,
        start: 'top bottom'
    },
    opacity: 1,
    scale: 1,
    ease: 'power2.out',
    onComplete: function () {
        gsap.set(".press-news-content", { clearProps: 'opacity,scale' });
    }
});

gsap.set("#card-img-2", { opacity: 0, y: '0%' });

ScrollTrigger.create({
    trigger: "#card-img-2",
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    onUpdate: self => {
        gsap.to("#card-img-2", {
            y: `-${self.progress * 50}px`,
            ease: 'power2.out',
            duration: 3
        });
    },
    end: () => "+=650px"
});

gsap.to("#card-img-2", {
    opacity: 1,
    duration: 0.1,
    delay: 2
});

gsap.set("#card-img-1", { opacity: 0, y: '0%' });

ScrollTrigger.create({
    trigger: "#card-img-1",
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    onUpdate: self => {
        gsap.to("#card-img-1", {
            y: `${self.progress * 50}px`,
            ease: 'power2.out',
            duration: 3
        });
    },
    end: () => "-=50px"
});

gsap.to("#card-img-1", {
    opacity: 1,
    duration: 0.1,
    delay: 2
});

gsap.set(".item", { opacity: 0, y: '1%' });

gsap.to(".our-yourney-section", {
    scrollTrigger: {
        trigger: ".our-yourney-section",
        start: 'top top',
        end: 'bottom bottom',
        pin: '.fix-element'
    }
});



















