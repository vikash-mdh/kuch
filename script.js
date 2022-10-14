function show() {
  gsap.registerPlugin(ScrollTrigger);



  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);


  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },

    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}

show();


// document.querySelector("#btns").addEventListener("mousemove",function(){
//   document.querySelector(".servicesContent").style.opacity = "1";

// })
// document.querySelector(".servicesContent").addEventListener("mouseleave",function(){
//   document.querySelector(".servicesContent").style.opacity = "0";
// })

//   // menu
// var tt = 0;
// document.querySelector(".menutt").addEventListener("click",function(){
//   if(tt === 0){
//     document.querySelector(".menu").style.transform ="translateY(0%)"
//     document.querySelector(".menu").style.position ="fixed";
//     tt = 1;

//   }
//   else{
//     document.querySelector(".menu").style.transform ="translateY(-120%)"
//     // document.querySelector(".menu").style.position ="relative";
//     tt = 0;
//   }
// })




gsap.from(".photo1", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  y: 60

})
gsap.from(".photo2", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  x: 60

})
gsap.from(".photo3", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  y: -60

})
gsap.from(".page1-contant", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  


})



gsap.from(".page2-contant", {
  scrollTrigger:{
    trigger: ".page2",
    scroller: ".main",
    start: "top 60%",
    // scrub:true 

  },
  opacity:0,
  y:200,
  duration:1,
})
// -----------------page3-----------------------
gsap.from(".pic1", {
  scrollTrigger:{
    trigger: ".page3",
    scroller: ".main",
    start: "top 80%",
    end: "top 0%",

    // markers: true
  },
  opacity: 0,
  x: -200,
  duration: 1

})
gsap.from(".pic2", {
  scrollTrigger: {
    trigger: ".page3",
    scroller: ".main",
    start: "top 100%",
    end: "top 0%",
    // markers:true
    // scrub:2,
  },
  opacity: 0,
  y: 200,
  duration: 1

})
gsap.from(".pic3", {
  scrollTrigger: {
    trigger: ".page3",
    scroller: ".main",
    start: "top 60%",
    end: "top 0%",
    // markers:true
    // scrub:2,
  },
  opacity: 0,
  y: 200,
  duration: 1

})

gsap.from(".pic4", {
  scrollTrigger: {
    trigger: ".page3",
    scroller: ".main",
    start: "top 60%",
    end: "top 0%",
    // markers:true
    // scrub:2,
  },
  opacity: 0,
  y: 200,
  duration: 1
})
gsap.from(".page3-right-contant", {
  scrollTrigger: {
    trigger: ".page3",
    scroller: ".main",
    start: "top 60%",
    end: "top 0%",
    // markers:true
    // scrub:2,
  },
  opacity: 0,
  x: 200,
  duration: 1
})



// -------page4--------------------------------

gsap.from(".page4-upper", {
  scrollTrigger: {
    trigger: ".page4",
    scroller: ".main",
    start: "top 70%",
    end: "top 0%",
    // markers:true
    // scrub:2,
  },
  opacity: 0,
  y: -100,
  duration: 1
})

gsap.from(".page4-lower", {
  scrollTrigger: {
    trigger: ".page4",
    scroller: ".main",
    start: "top 70%",
    end: "top 0%",
    // markers:true
    // scrub:2,
  },
  opacity: 0,
  y: 200,
  duration: 1
})
// -----------------page5-------
gsap.from(".left", {
  scrollTrigger: {
    trigger: ".five",
    scroller: ".main",
    start: "top 60%",
    end: "top 0%",
    // markers:true
    // scrub:2,
  },
  opacity: 0,
  x: -200,
  duration: 1
})
gsap.from(".right", {
  scrollTrigger: {
    trigger: ".five",
    scroller: ".main",
    start: "top 60%",
    end: "top 0%",
    // markers:true
    // scrub:2,
  },
  opacity: 0,
  x: 200,
  duration: 1
})
gsap.from(".bottom", {
  scrollTrigger: {
    trigger: ".five",
    scroller: ".main",
    start: "top 60%",
    end: "top 0%",
    // markers:true
    // scrub:2,
  },
  opacity: 0,
  y: 200,
  duration: 1,
})
// ------------page6-------
gsap.from(".swiper", {
  scrollTrigger: {
    trigger: ".six",
    scroller: ".main",
    start: "top 60%",
    end: "top 0%",
    // markers:true
    // scrub:2,
  },
  opacity: 0,
  y: 200,
  duration: 1
})
// ----------page8-----
gsap.from(".contant-upper", {
  scrollTrigger: {
    trigger: ".page7",
    scroller: ".main",
    start: "top 60%",
    end: "top 0%",
    // markers:true
    // scrub:2,
  },
  opacity: 0,
  y: 200,
  duration: 1
})


var page7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page7",
    scroller: ".main",
    start: "top 40%",
    // scrub:true 

  },
})


page7.from(".contant1", {
  y: 100,
  opacity: 0,
  duration: 0.3,
})
page7.from(".contant2", {
  y: 50,
  opacity: 0,
  duration: 0.4,
})
page7.from(".contant3", {
  y: 50,
  opacity: 0,
  duration: 0.5,
})
page7.from(".contant4", {
  y: 50,
  opacity: 0,
  duration: 0.5,
})
page7.from(".contant5", {
  y: 50,
  opacity: 0,
  duration: 0.5,
})
page7.from(".bottom-contant", {

  opacity: 0,
  duration: 0.5,
})


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});