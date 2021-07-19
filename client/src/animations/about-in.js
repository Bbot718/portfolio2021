import gsap, {Expo} from 'gsap';
import SplitText from 'gsap/dist/SplitText';


const AboutIn = () => {

  
  const tl = gsap.timeline();
  tl.from('.hero__hidder', {scaleY: 1, duration: 1, ease: Expo.easeOut})
  tl.from('.hero-heading', {y: '100%'}, 0)
  tl.from('.about__info', {opacity: 0, y: '5%'})
  

}

export default AboutIn;