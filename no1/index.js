const rect = document.querySelector("#center");

rect.addEventListener("mousemove", (event) => {
    var rectangeLocation = rect.getBoundingClientRect();
    var insideRectVal = event.clientX - rectangeLocation.left;

    if (insideRectVal < rectangeLocation.width / 2) {
        var redColor = gsap.utils.mapRange(0, rectangeLocation.width / 2, 255, 0, insideRectVal);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4,
        })

    }
    else {
        var blueColor = gsap.utils.mapRange(rectangeLocation.width / 2,rectangeLocation.width, 0,255, insideRectVal);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4,
        })
    }
})

rect.addEventListener("mouseleave", ()=>{
    gsap.to(rect,{
        backgroundColor:"white"
    })
})