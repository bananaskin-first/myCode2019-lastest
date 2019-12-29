

//找节点点击差掉广告


let closehd = document.querySelector('#closehd');
let banner1 = document.querySelector('.banner1');

closehd.onclick = () => {
    banner1.style.display = 'none';
}



//回到顶部
let listsRighttop = document.querySelector(".listsRighttop");
let returntoTop = document.querySelector('#returntoTop');

window.onscroll = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 300) {
        returntoTop.style.display = 'block'
    }
    else {
        returntoTop.style.display = 'none'
    }
    //1100px

    //吸顶菜单


    // console.log(listsRighttop);

    // listsRighttop.style.position = 'fixed'
    if (window.scrollY >= 1100) {
        listsRighttop.style.position = 'fixed'
    }
    else {
        listsRighttop.style.position = 'static'
    }

}
//点击回到顶部
returntoTop.onclick = () => {
    window.scrollTo(0, 0);
}



//选项卡功能

let spans = listsRighttop.querySelectorAll('span');//集合
let listsRightmain = document.querySelector('.listsRightmain');
// console.log(spans);

for (let i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
        // console.log(i);
        let str0 = `<img src="../images/list${i}.png" alt="">`;
        // console.log(str0);
        listsRightmain.innerHTML = str0;
        //添加class
        //排他
        for (var k = 0; k < spans.length; k++) {
            spans[k].className = '';
        }
        spans[i].className = 'active1';
    }
}


//获取数据库信息
let uid = location.search;
// var x = uid.join('?');
var uidID = uid.split('?')[1];

// console.log(uidID);

//发送ajax
if (uidID) {
    ajax({
        type: 'get',
        url: '../api/uid.php',
        data: {
            uid: uidID
        },
        success: str => {
            //查询到数据然后获取再渲染
            arr1 = JSON.parse(str);
            let arr = [];
            arr.push(arr1[0].item, arr1[0].goodsimg1);
            // console.log(arr);
            init(arr);
            //用户id

            let uiderID = getCookie('uider');
            // console.log(w223);
            //店铺ID
            let shopID = getCookie('sid');
            // console.log(shopID);


            //点击按钮跳转到购物车

            gouwu();
            // console.log(arr1);

        }
    })
}


//放大镜

// var arr = ["http://120.24.170.202:1688/img/l1a-tu1.jpg", "http://120.24.170.202:1688/img/l1a-tu2.jpg"];

function init(arr) {
    //先找节点
    let bigpic = document.querySelector('#wrap .biger');
    let main = document.querySelector('#wrap .main');
    let smaller = document.querySelector('#wrap .smaller');

    //渲染原图
    let wrap = document.querySelector('#wrap');

    let str = `<img src="${arr[0]}" alt=""><div class="mask"></div>`;
    main.innerHTML = str;

    //渲染大图
    var str1 = `<img src="${arr[0]}" alt="">`;
    bigpic.innerHTML = str1;

    //渲染小图

    let str3 = arr.map(function (item) {
        return `<li><img src="${item}" alt=""></li>`
    }).join('');

    smaller.innerHTML = str3;


    //渲染完成后就可以操作渲染出来的节点，

    let mask = main.children[1];

    main.onmouseover = function () {
        mask.style.display = 'block';
        bigpic.style.display = 'block';
    }

    let bigmove = bigpic.children[0];//大图片

    //mask显示后鼠标一直在中心；

    main.onmousemove = (ev) => {
        var left = ev.pageX - wrap.offsetLeft - mask.offsetWidth / 2;
        //高度也是这么求
        var top = ev.pageY - wrap.offsetTop - mask.offsetHeight / 2;

        //限制边界距离

        if (left <= 0) {
            left = 0;
        }
        else if (left >= main.offsetWidth - mask.offsetWidth) {
            left = main.offsetWidth - mask.offsetWidth;
        }

        //限定高度
        if (top <= 0) {

            top = 0;
        }
        else if (top >= main.offsetHeight - mask.offsetHeight) {

            top = main.offsetHeight - mask.offsetHeight;
        }

        //打印 Y 和X
        mask.style.top = top + 'px';
        mask.style.left = left + 'px';


        //移动计算比例，并且实现大图片跟小图片一起移动

        var scal = left / (main.offsetWidth - mask.offsetWidth);
        var Bleft = scal * (bigmove.offsetWidth - bigpic.offsetWidth);
        bigmove.style.left = -Bleft + 'px';

        //top也如此
        var scal = top / (main.offsetHeight - mask.offsetHeight);
        var Btop = scal * (bigmove.offsetHeight - bigpic.offsetHeight);
        bigmove.style.top = -Btop + 'px';
    }
    //鼠标移除事件
    main.onmouseout = function () {
        bigpic.style.display = 'none';
        mask.style.display = 'none';
    }

    //完成切图功能
    var bottom = document.querySelector('.bottom');
    var prev = bottom.children[0];//第一个
    var box = bottom.children[1];
    var next = bottom.children[2];
    var ul = box.querySelector('.smaller');
    var lists = ul.children;//集合

    // console.log(lists);

    //绑定点击事件切换大图小图;
    for (var i = 0; i < lists.length; i++) {
        lists[i].index = i;
        // console.log(lists[i].index);
        lists[i].onclick = function () {
            var str = `<img src="${arr[this.index]}" alt=""><div class="mask"></div>`;
            main.innerHTML = str;
            var str1 = `<img src="${arr[this.index]}" alt="">`;
            bigpic.innerHTML = str1;
            var mask = main.children[1];
            // console.log(lists[this.index]);
            main.onmouseover = function () {
                // console.log(1);
                mask.style.display = 'block';
                // mask.style.zindex = '100'
                //显示大图片
                bigpic.style.display = 'block';

            }
            var bigmove = bigpic.children[0];//大图片
            //显示后需要使mask的中心一直在鼠标中心；
            main.onmousemove = function (ev) {
                //右边的值
                var left = ev.pageX - wrap.offsetLeft - mask.offsetWidth / 2;

                //高度也是这么求
                var top = ev.pageY - wrap.offsetTop - mask.offsetHeight / 2;


                //限制边界距离
                if (left <= 0) {
                    left = 0;
                }
                else if (left >= main.offsetWidth - mask.offsetWidth) {

                    left = main.offsetWidth - mask.offsetWidth;
                }
                //限定高度
                if (top <= 0) {

                    top = 0;
                }
                else if (top >= main.offsetHeight - mask.offsetHeight) {

                    top = main.offsetHeight - mask.offsetHeight;
                }
                //打印 Y 和X
                mask.style.top = top + 'px';
                mask.style.left = left + 'px';
                //移动计算比例，并且实现大图片跟小图片一起移动

                var scal = left / (main.offsetWidth - mask.offsetWidth);
                var Bleft = scal * (bigmove.offsetWidth - bigpic.offsetWidth);
                bigmove.style.left = -Bleft + 'px';


                //top也如此
                var scal = top / (main.offsetHeight - mask.offsetHeight);
                var Btop = scal * (bigmove.offsetHeight - bigpic.offsetHeight);
                bigmove.style.top = -Btop + 'px';
            }
            //鼠标移除事件
            main.onmouseout = function () {
                bigpic.style.display = 'none';
                mask.style.display = 'none';
            }
        }
    }
    //给左右绑定点击事件
    next.onclick = function () {
        var prevl = -86;
        ul.style.left = prevl + 'px';



    }
    prev.onclick = function () {
        var nextl = 0;
        ul.style.left = nextl + 'px';
    }
}



function gouwu() {
    let goodscarmain = document.querySelector('.goodscarmain');

    let goodNUM = document.querySelector('#goodNUM');//数值

    let plus = document.querySelector('#plus');//加

    let reduce = document.querySelector('#reduce');//减

    plus.onclick = () => {

        var numplus = goodNUM.value.trim();
        numplus++;
        goodNUM.value = numplus;
    }

    reduce.onclick = () => {
        if (goodNUM.value > 1) {
            var numreduce = goodNUM.value.trim();
            numreduce--;
            goodNUM.value = numreduce;
        }
    }
    goodscarmain.onclick = () => {
        let goodIDval = location.search;
        var goodID = goodIDval.split('?')[1];

        let numsum = goodNUM.value;

        console.log(numsum);

        // console.log(goodID);


        //先判断是否相同商品


        //不是相同直接发送ajax去查询插入新的
        ajax({
            type: 'get',
            url: '../api/searchData.php',
            data: {
                uid: goodID
            },
            success: str => {
                let arr = JSON.parse(str);
                console.log(arr);

                //拿到数据了然后存数据到新的表格里面


                //需要查询表格里是否有相同数据

                console.log(getCookie('goodsID'));
                console.log(getCookie('uider'));
                ajax({
                    type: 'get',
                    url: '../api/searchGOOD.php',
                    data: {
                        goodID: getCookie('goodsID'),
                        userID: getCookie('uider')
                    },
                    success: str => {
                        console.log(str);
                        //没有数据就插入
                        if (str == 'no') {
                            console.log(arr[0].item);

                            // 存数据到新的表格
                            console.log(getCookie('uider'));

                            ajax({
                                type: 'post',
                                url: '../api/ordergood.php',
                                data: {
                                    img: arr[0].item,//存图片
                                    title: arr[0].name,//存标题
                                    price: arr[0].price,
                                    num: numsum,
                                    UID: getCookie('uider'),//用户ID
                                    gid: getCookie('goodsID'),
                                    sid: arr[0].sid,
                                    sname: arr[0].shop
                                },
                                success: str => {
                                    if (str == 'yes') {

                                        location.href = 'car.html'
                                    }
                                }

                            })
                        }

                        if (str == 'yes') {
                            //存在数据
                            //先查询找到对应num
                            //直接找到对应ID 和商品修改num
                            ajax({
                                type: 'get',
                                url: '../api/searchnum.php',
                                data: {
                                    goodID: getCookie('goodsID'),
                                    userID: getCookie('uider')
                                },
                                success: str => {
                                    console.log(str);
                                    arr = JSON.parse(str);
                                    // console.log(arr);
                                    var Numb = arr[0].num;

                                    // console.log(numsum);

                                    Numb = Numb * 1 + numsum * 1;
                                    ajax({
                                        type: 'get',
                                        url: '../api/plus.php',
                                        data: {
                                            goodID: getCookie('goodsID'),
                                            userID: getCookie('uider'),
                                            num: Numb
                                        },
                                        success: str => {
                                            // console.log(str);
                                            location.href = 'car.html'
                                        }
                                    })

                                }
                            })


                        }

                    }
                })


            }
        })
        // location.href = 'car.html'
    }
}