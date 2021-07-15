import gsap, {Circ, Power3} from 'gsap';
import SplitText from 'gsap/dist/SplitText';

const HomeOut = () => {
  
  const titleST = new SplitText('.work__title', {type: 'chars'}); 
  const nameST = new SplitText('.work-item__name', {type: 'words'}); 
  
  const tl = gsap.timeline({});

  tl.to('.header', {opacity: 0}, 0)
  tl.to('.contact', {opacity: 0}, 0)


  tl.to('.work-item__image--hidder', {scaleY: 1, duration: 1, ease: Circ.easeOut, onStart:()=>{
    gsap.set('.work-item__image--hidder', {transformOrigin: 'top'})
  }}, 0)
  tl.to(tl.to(titleST.chars, {y: '100%', stagger: 0.1}, 0), {y: '100%', ease: Circ.easeOut}, 0)
  tl.to(titleST.chars, {y: '100%', stagger: 0.1}, 0)
  tl.to([nameST.words, '.work-item__date'] , {y: '100%', }, 0)
  tl.to('.work__line', {scaleX: 0, onStart:() => {
    gsap.set('.work__line', {transformOrigin: 'right'});
  }}, 0)

  return tl.duration() * 1000;
}

export default HomeOut;