import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import HeaderPlay from './header-play';

const HeaderIn = () =>{
  const splitText = new SplitText('.header__heading', {type: 'chars'}); 
  const timeline = gsap.timeline({onComplete:() =>{HeaderPlay(splitText.chars)}});

  timeline.from('.header__line', {scaleX: 0}, 0);
  timeline.from(['.header__heading', '.navigation__in'], {y: '100%'}, 0);

  
}

export default HeaderIn;