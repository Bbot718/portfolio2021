import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ScrollTriggerHome = () => {
  
 const tl = gsap.timeline();

 tl.to('header__heading', {y: '100%', ScrollTrigger: {
  trigger: '.header',
  start: "top top",
  end: "+=500px",

  toggleActions: "play none none reverse",
  markers: true,
 }})

}

export default ScrollTriggerHome;