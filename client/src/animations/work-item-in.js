import gsap, {Circ} from 'gsap';
import SplitText from 'gsap/dist/SplitText';

const WorkItemIn = (image, tags, name, date, line) => {

  const nameST = new SplitText(name, {type: 'words, chars', charsClass: 'work-item__name--chars'}); 

  const tl = gsap.timeline();
  tl.from(image, {scaleY: 1, duration: 1, ease: Circ.easeOut},0)
  tl.from(tags, {backgroundColor: 'red', duration: 1, ease: Circ.easeOut},0) //NOT WORKING 
  tl.from([nameST.words, date], {y: '100%', duration: 1, stagger:0.1, ease: Circ.easeOut},0)
  tl.from(line, {scaleX: 0, duration: 1, ease: Circ.easeOut},0)
}

export default WorkItemIn;