import gsap, {Circ, Power3} from 'gsap';
import SplitText from 'gsap/dist/SplitText';


const WorkIn = (title, line) => {

  const titleST = new SplitText(title, {type: 'chars'}); 
  
  const tl = gsap.timeline();
  tl.from(titleST.chars, {y: '100%', stagger: 0.1, ease: Power3.easeOut}, 0);
  tl.from(line, {scaleX: '0', stagger: 0.1}, 0);

}

export default WorkIn;