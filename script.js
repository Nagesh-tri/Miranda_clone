var tl= gsap.timeline()

tl.to('body',{
    y: '100vh',
    scale: 0.3,
    duration: 0
})
tl.to("body",{
    y: "20vh"
})
tl.to("body",{
    y: "0vh",
    rotation:-360,
    delay:0.5,
    duration:0.6,
    
    scale:1  
})