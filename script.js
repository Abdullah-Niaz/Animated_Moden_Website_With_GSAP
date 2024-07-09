gsap.to(".imagecontainer", {
    width: "100%",
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 2,
    repeat:Infinity,
    dealy:2
    
});

gsap.to(".text h1", {
    top: 0,
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 2,
    dealy:2,
    repeat:Infinity
    
    
});

gsap.to(".text h1", {
    top: "-100%",
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 2,
    delay: 2, // Ensures this animation starts after the first one completes
    repeat:Infinity

});
