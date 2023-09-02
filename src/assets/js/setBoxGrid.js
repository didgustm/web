import { gsap } from "gsap";

function setBoxGrid(items, hideItem, duration){
    const w = document.querySelector('.list').clientWidth,
            h = w <= 500? w-40: w < 700? 250: 350,
            step = Math.floor(w / h);
    items.forEach((x, idx) => {
        let width = w /  step;
        let row = Math.floor(idx / step);
        let column = idx % step;
        x.style.width = `${width}px`;
        gsap.fromTo(x, {opacity:1}, {x:column*width, y:row*h, opacity:1, scale:1, duration});
        //x.style.transform = `translate(${column*width}px, ${row*300}px)`
    });
    if(hideItem != 0){
        hideItem.forEach(x => {
            gsap.to(x, {opacity:0, scale:0, duration})
        })
    }
}

export { setBoxGrid }