
let closehd = document.querySelector('#closehd');
let banner1 = document.querySelector('.banner1');

closehd.onclick = () => {
    banner1.style.display = 'none';
}


// console.log(move1);

//查找节点


let itemList = document.querySelector('#itemList');

let listsRightmain = document.querySelector('.listsRightmain');

// console.log(listsRightmain);

let ipage = 1;

let num = 8;//每页8条

function init() {
    ajax({
        type: 'get',
        url: '../api/xuan.php',
        data: {
            page: ipage,
            num: num
        },
        success: str => {
            let arr = JSON.parse(str);
            console.log(arr);
            //拿到数据了
            let uidvalue = getCookie('uider');
            // console.log(uidvalue);
            let shopid = arr.data[uidvalue].sid;
            // console.log(shopid);
            setCookie('sid', shopid, 7);
            creat(arr);
        }
    });
}

init();
let pageslink = document.querySelector('#pageslink');
// console.log(listsRightbottom);
console.log(pageslink);
function creat(arr) {

    let str = arr.data.map(item => {
        return `<li data-id='${item.uid}'><img src="${item.item}" alt="">
        <div class="price">¥<span>${item.price}</span></div>
        <div class="name"><a class="bigD_item" track="" href="" target="_blank">${item.name}</a></div>
        <div class="comment">已有<span>1599</span>人评价</div>
        <div class="shop"><span>自营</span><span>${item.shop}</span></div>

    </li>`
    }).join('');
    // console.log(str);
    listsRightmain.innerHTML = str;
    //点击当前li跳转
    let listLI = listsRightmain.querySelectorAll('li');
    // console.log(listLI);
    for (let i = 0; i < listLI.length; i++) {
        let listID = listLI[i].dataset.id
        listLI[i].onclick = function () {
            // console.log(i);

            // console.log(dataset.id);
            // console.log(listID);
            // let uidvalue = getCookie('uider');
            // console.log(uidvalue);
            let shopid = arr.data[i].uid;
            // console.log(shopid);
            setCookie('goodsID', shopid, 7);

            location.href = 'detailPage.html?' + listID;




        }
    }
    console.log(1);
    let total = Math.ceil(arr.total / arr.num);
    let btnstr = '';
    for (let i = 1; i <= total; i++) {
        btnstr += ` <li>${i}</li>
        `;
    }
    pageslink.innerHTML = btnstr;

    let pre = document.querySelector('#pre');
    let next = document.querySelector('#next');
    //点击上下页切换
    pre.onclick = () => {
        if (ipage > 1) {
            ipage--;
            init();

        }
    }
    next.onclick = () => {
        if (ipage < total) {
            ipage++;
            init();

        }
    }
    for (let item of pageslink.children) {
        item.onclick = function () {
            // console.log(this.textContent);
            ipage = this.textContent;
            init();
            this.className = 'active'

        }
    }

    let pricead = document.querySelector('#pricead');

    pricead.onclick = () => {
        ajax({
            type: 'get',
            url: '../api/price.php',
            data: {
                page: ipage,
                num: num
            },
            success: str => {
                // console.log(str);
                arr = JSON.parse(str);
                // console.log(arr);

                let str1 = arr.map(item => {
                    return `<li data-id='${item.uid}'><img src="${item.item}" alt="">
                    <div class="price">¥<span>${item.price}</span></div>
                    <div class="name"><a class="bigD_item" track="" href="" target="_blank">${item.name}</a></div>
                    <div class="comment">已有<span>1599</span>人评价</div>
                    <div class="shop"><span>自营</span><span>${item.shop}</span></div>
            
                </li>`
                }).join('');
                listsRightmain.innerHTML = str1;

            }
        })
    }

}
