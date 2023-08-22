function setLayout(){
    const list = document.querySelector('.list'),
                leng = list.childElementCount,
                w = list.clientWidth,
                step = Math.floor(w / 350);
                
    list.style.height = `${Math.ceil(leng / step) * 350}px`;
}

export { setLayout }