import gsap, {Power2, Power4} from 'gsap';

const HeaderPlay = (characters) => {
  
   
  const timeline = new gsap.timeline(); 
  let letterSelection = getRandomInt(0, (characters.length-1));
  let openTypeList = OpenTypeSelection(characters[letterSelection]);
  const colors = ['#3B42D9', '#1E2040', '#F25C05', '#BF4C0A']

  if(openTypeList !== undefined){
     let openTypeSelection = openTypeList[getRandomInt(0, (openTypeList.length-1))];

     timeline.to(characters[letterSelection], { 
        y: '-100%', 
        ease: Power2.easeOut,
        onComplete:() => gsap.set(characters[letterSelection],{ 
           y: '100%', 
           //color: colorScheme[getRandomInt(0, colorScheme.length)]
        })
     })

     timeline.to(characters[letterSelection], {
        y: '0%',
        ease: Power4.easeOut,
        onStart:() => { 
           if(characters[letterSelection].classList.length > 1){
              characters[letterSelection].classList.remove(characters[letterSelection].classList[1])
           }
           else{
              characters[letterSelection].classList.add( 'openTypeStyle' + openTypeSelection)
              //characters[letterSelection].style.color = colors[getRandomInt(0,3)];
           }
        },
        onComplete:() => ( HeaderPlay(characters)),
     })

  }
}


const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const OpenTypeSelection = (letter) =>{

  let letterList;

  if(letter !== undefined){

   switch(letter.innerHTML){
       case "a":
           letterList =  [1, 2, 4, 5];
           break;
       case "p":
           letterList = [1, 7];
           break;
       case "b":
           letterList = [1, 7];
           break;
       case "c":
           letterList = [1, 11];
           break;
       case "d":
           letterList = [7];
           break;
       case "e":
           letterList = [2, 4, 5, 7];
           break;
       case "f":
           letterList = [4, 5, 7, 11];
           break;
       case "g":
           letterList = [1, 4, 11];
           break;
       case "h":
           letterList = [4, 7];
           break;
       case "l" :
           letterList = [11];
           break;
       case "z":
           letterList = [11];
           break;
       case "n":
           letterList = [2];
           break;
       case "o":
           letterList = [1];
           break;
       case "r":
           letterList = [5, 7];
           break;
       case "s":
           letterList = [1];
           break;
       case "t":
           letterList = [ 5, 7];
           break;
       case "u":
           letterList = [1];
           break;
       case "i":
           letterList = [11];
           break;
       case "w":
           letterList = [2, 11];
           break;
       default:
           letterList = [1, 2, 5, 7, 11];
       }
   }

  return letterList
}


export default HeaderPlay;