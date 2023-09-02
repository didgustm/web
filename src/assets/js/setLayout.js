function setLayout(items){
    const list = document.querySelector('.list'),
                leng = items.length,
                w = list.clientWidth,
                h = w <= 500? w-40: w < 700? 250: 350,
                step = Math.floor(w / h);
                
    list.style.height = `${Math.ceil(leng / step) * h}px`;
}

export { setLayout }