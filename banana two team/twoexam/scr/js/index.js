

//1滑动显示


//找到会员节点

let fvip = document.querySelector('#fvip');
let guidefvip = document.querySelector('.guide-fvip');

var iosk = true;

// fvip.onclick = () => {
//     if (iosk) {
//         guidefvip.style.display = 'block';
//     }
//     else {
//         guidefvip.style.display = 'none';

//     }
//     iosk = !iosk;
// }
//之前结构没写在父元素，，，现在修改比较麻烦。样式要重新写
fvip.onmouseover = () => {
    guidefvip.style.display = 'block';

}
fvip.onmouseout = () => {
    guidefvip.style.display = 'none';
}


//2导航部分功能

let guidesmall = document.querySelector('#guidesmall');

let guidemain = document.querySelector('#guidesmall .guide-small');


guidesmall.onmouseover = () => {
    guidemain.style.visibility = 'visible';
}
guidesmall.onmouseout = () => {
    guidemain.style.visibility = 'hidden';
}




//找节点点击差掉广告


let closehd = document.querySelector('#closehd');
let banner1 = document.querySelector('.banner1');

closehd.onclick = () => {
    banner1.style.display = 'none';
}



//回到顶部
// 
let returntoTop = document.querySelector('#returntoTop');
let floor = document.querySelector('.floor');
// console.log(floor);

//点击回到顶部
returntoTop.onclick = () => {
    window.scrollTo(0, 0);
}


let floors = floor.children;
// console.log(floors);

for (let i = 0; i < floors.length; i++) {

    if (i > 0 && i < 8) {
        floors[i].onclick = () => {
            // console.log(i);
            //排他
            actmove();
            floors[i].className = 'active';

            var k = 700 + (i - 1) * 540;
            window.scrollTo(0, k);
        }
    }

}
window.onscroll = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 300) {
        returntoTop.style.display = 'block'
    }
    else {
        returntoTop.style.display = 'none'
    }
    //1100px

    //楼层跳跃
    if (window.scrollY >= 700) {
        floor.style.display = 'block'
    }
    else {
        floor.style.display = 'none'
    }
    // console.log(listsRighttop);
    if (window.scrollY >= 700) {
        actmove();
        floors[1].className = 'active';
    }
    if (window.scrollY >= 1240) {
        actmove();
        floors[2].className = 'active';
    }
    if (window.scrollY >= 1780) {
        actmove();
        floors[3].className = 'active';
    }
    if (window.scrollY >= 2320) {
        actmove();
        floors[4].className = 'active';
    }
    if (window.scrollY >= 2860) {
        actmove();
        floors[5].className = 'active';
    }
    if (window.scrollY >= 3400) {
        actmove();
        floors[6].className = 'active';
    }
    if (window.scrollY >= 3940) {
        actmove();
        floors[7].className = 'active';
    }

}


function actmove() {
    for (let j = 1; j < floors.length - 2; j++) {
        floors[j].className = '';
    }

}


//导航部分

let guide2Div = document.querySelector('.guide2-div');

let guide2List = document.querySelectorAll('.guide2-main li');

// console.log(guide2List);
for (let i = 0; i < guide2List.length; i++) {
    guide2List[i].onmouseover = () => {
        // console.log(i);
        guide2Div.style.display = 'block'

    }
    guide2List[i].onmouseout = () => {
        // console.log(i);
        guide2Div.style.display = 'none'

    }

}
//小的轮播图


//纯在bug

let move1 = document.querySelector('.move1 ul');

let movelist = move1.querySelectorAll('li img');

// console.log(movelist);
// console.log(move1);

let ih = movelist[0].offsetHeight;

let timer = null;

css(movelist[0], 'top', 0);


timer = setInterval(next, 2000);

let now = 0;
function next() {

    startMove(move1, { top: -ih });

    now += 1;
    // if (now == 3) {
    //     now = 0;
    // };
    ih = now * movelist[0].offsetHeight;
    if (now == 3) {
        ih = 0;
        now = 0;
    }
    // console.log(ih);

}
//banner轮播图

function movepage() {
    let box = document.querySelector('#banner');
    let lists = box.querySelectorAll('.imglist img');//集合;
    let indexlists = box.querySelectorAll('.indexlist li');
    let iw = lists[0].offsetWidth;
    let timer = null;
    css(lists[0], 'left', 0);
    let now = 0;
    timer = setInterval(next, 2000);

    // console.log(lists.length)    
    function next() {
        //旧图移除
        startMove(lists[now], { left: -iw });
        now++;

        //新图进场
        // startMove(lists[now], { left: 0 });
        if (now > lists.length - 1) {
            now = 0;
        }
        // console.log(now);
        css(lists[now], 'left', iw + 'px');
        startMove(lists[now], { left: 0 });
        indexlists.forEach(function (item) {
            item.className = '';
        })
        indexlists[now].className = 'active';
    }
    box.onmouseover = () => {
        clearInterval(timer);
    }
    box.onmouseout = () => {
        clearInterval(timer);
        timer = setInterval(next, 2000);
    }
}
movepage();


//获取username ，如果有值才进行操作
let username2 = document.querySelector('#username2');
let uid = location.search;
var uidID = uid.split('?')[1];
if (uidID != undefined) {
    let username1 = document.querySelector('#username1');
    username1.innerHTML = '亲爱的' + uidID;

    username2.innerHTML = '退出登录';



}
username2.onclick = () => {


    let w223 = getCookie('uider');
    let w224 = getCookie('uider');
    console.log(w224);
    removeCookie('uider');
    removeCookie('sid');
    removeCookie('goodsID');
    // setCookie('sid', arr1[0].sid, 7);


}