import { gsap } from "gsap";

function boxMouseOver(e, type){
    const box = e.target,
                width = box.offsetWidth,
                height = box.offsetHeight,
                target = box.querySelector('.card'),
                x = e.offsetX - width / 2,
                y = (e.offsetY - height / 2) * (width / height),
                d = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180 ) / 90 ) + 3 )  % 4;

        if(type == 'enter'){
            d == 0? gsap.fromTo(target, {x:0, y:'-110%'}, {y:0, x:0, duration:0.4}):
            d == 1? gsap.fromTo(target, {x:'110%', y:0}, {y:0, x:0, duration:0.4}):
            d == 2? gsap.fromTo(target, {x:0, y:'110%'}, {y:0, x:0, duration:0.4}):
            gsap.fromTo(target, {x:'-110%', y:0}, {y:0, x:0, duration:0.4});
        } else{
            d == 0? gsap.to(target, {y:'-110%', duration:0.4}): 
            d == 1? gsap.to(target, {x:'110%', duration:0.4}):
            d == 2? gsap.to(target, {y:'110%', duration:0.4}):
            gsap.to(target, {x:'-110%', duration:0.4})
        }
}

export { boxMouseOver }