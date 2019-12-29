
function baidu(opt) {
    //默认参数
    let defaultOpt = {

        iw: 800,//宽度
        ih: 400,//高度
    }
    Object.assign(defaultOpt, opt);//默认



    let box = document.querySelector(defaultOpt.ele);
    let iw = box.offsetWidth;
    box.style.width = defaultOpt.iw + 'px';
    box.style.height = defaultOpt.ih + 'px';

    box.onmouseover = () => {
        startMove(box, { right: 0 });
    }
    box.onmouseout = () => {
        startMove(box, { right: -200 });
    }
}

