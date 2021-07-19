import gsap, {Expo} from 'gsap';


const AboutOut = () => {
  
  
  const tl = gsap.timeline({});

  tl.to('.hero__hidder', {scaleY: 1, ease: Expo.easeIn})
  tl.to('.hero-heading', {y: '100%', ease: Expo.easeIn}, 0)
  tl.to('.about__info', {opacity: 0}, 0)
 

  return tl.duration() * 1000;
}

export default AboutOut;