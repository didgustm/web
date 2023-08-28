import { gsap } from "gsap";

function setBoxGrid(items, hideItem, duration){
    const w = document.querySelector('.list').clientWidth,
                step = Math.floor(w / 350);
    items.forEach((x, idx) => {
        let width = w /  step;
        let row = Math.floor(idx / step);
        let column = idx % step;
        x.style.width = `${width}px`;
        gsap.fromTo(x, {opacity:1}, {x:column*width, y:row*350, opacity:1, scale:1, duration});
        //x.style.transform = `translate(${column*width}px, ${row*300}px)`
    });
    if(hideItem != 0){
        hideItem.forEach(x => {
            gsap.to(x, {opacity:0, scale:0, duration})
        })
    }
}

export { setBoxGrid }