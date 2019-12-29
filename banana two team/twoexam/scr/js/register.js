


//找节点
let btn1 = document.querySelectorAll('.agree li')[0];
let btn2 = document.querySelectorAll('.agree li')[1];
let agreement = document.querySelector('.agreement');

btn1.onclick = () => {
    //不同意跳转到主页
    location.href = 'index.html'
}


btn2.onclick = () => {
    //同意协议，让这个东西消失
    agreement.style.display = 'none';
}

//注册验证表单

let nameadd = document.querySelector('#nameadd');
let nameadds = document.querySelector('#nameadds');
let psw1 = document.querySelector('#psw1');
let psw2 = document.querySelector('#psw2');

nameadd.onblur = () => {
    // console.log(1);

    //获取值
    var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
    let username = nameadd.value.trim();
    let ret = uPattern.test(username);
    //非空
    if (username) {
        if (ret == true) {
            //验证数据库是否存在
            ajax({
                type: 'get',
                url: '../api/gooddata.php',
                data: {
                    name: username
                },
                success: str => {
                    if (str == 'yes') {
                        nameadds.style.color = 'green';
                        nameadds.innerHTML = '可以使用该用户名'
                        nameadd.className = 'pass'
                        psw1.focus();

                        //后续操作跳转到密码设置


                    }
                    else {
                        nameadds.style.color = 'red';
                        nameadds.innerHTML = '用户名已存在'
                    }
                }
            })


        }
        else {
            nameadds.style.color = 'red';
            nameadds.innerHTML = '用户名由4到16位（字母，数字，下划线，减号）组成'

        }
    }
    else {
        nameadds.style.color = 'red';
        nameadds.innerHTML = '请输入用户名'
    }

}

//密码不弄正则了
let pswadd = document.querySelector('#pswadd');



psw1.onblur = () => {
    let password1 = psw1.value.trim();
    psw2.focus();

    psw2.onblur = () => {
        let password2 = psw2.value.trim();

        if (password1 && password2) {

            if (password1 == password2) {

                pswadd.innerHTML = '通过';
                pswadd.style.color = '#58bc58';
                pswadd.className = 'pass'





            }
            else {
                pswadd.innerHTML = '两次密码不一致';
                pswadd.style.color = 'red';
            }
        }
        else {
            pswadd.innerHTML = '请输入密码';
            pswadd.style.color = 'red';
        }

    }

}


let ww2 = document.querySelector('#ww2');
console.log(ww2);
//手机验证
let ww3 = document.querySelector('#ww3');
ww2.onblur = () => {
    // console.log(1);
    let reg2 = /^1(3|4|5|7|8)\d{9}$/;
    let numberww = ww2.value.trim();

    let regt = reg2.test(numberww);

    if (numberww) {
        if (regt == true) {
            ww3.innerHTML = '通过';
            ww3.style.color = 'green';
            ww3.className = 'pass'
        }
        else {
            ww3.innerHTML = '请输入正确手机号';
            ww3.style.color = 'red';
        }
    }

    else {
        ww3.innerHTML = '请输入手机号';
        ww3.style.color = 'red';
    }


}


//滑条验证
var box1 = document.querySelector('.reg');
var box = document.querySelector('#box');
var move = document.querySelector('#move');
var hua = document.querySelector('#hua');
var span = document.querySelector('#box .tip')
var span1 = document.querySelector('#box .tip1')
// console.log(box1);
//获取滑块的距离
move.onmousedown = function (ev) {
    var moveX = ev.offsetX;
    //紫色块的offsetX
    // console.log(moveX);
    document.onmousemove = function (ev) {
        // console.log(box1.offsetLeft);
        var left = ev.pageX - moveX - box1.offsetLeft;
        if (left <= 0) {
            left = 0;
            span.style.display = 'block';
            span1.style.display = 'none';
        }
        else if (left >= box.offsetWidth - move.offsetWidth) {
            left = box.offsetWidth - move.offsetWidth;
            span.style.display = 'none';
            span1.style.display = 'block';
            // console.log(233);
            move.className = 'pass'

        }
        hua.style.width = left + 'px';
        move.style.left = left + 'px';
    }
}
move.onmouseup = function (ev) {
    var moveX = ev.offsetX;
    var left = ev.pageX - moveX - box.offsetLeft;
    document.onmousemove = null;
    if (left < box.offsetWidth - move.offsetWidth) {
        left = 0;
        hua.style.width = left + 'px';
        move.style.left = left + 'px';
        span1.style.display = 'none';
        span.style.display = 'block';
    }

    else if (left >= box.offsetWidth - move.offsetWidth) {
        left = box.offsetWidth - move.offsetWidth;
        move.style.left = left + 'px';
        hua.style.width = left + 'px';
    }
}



//随机验证码


let messageuser = document.querySelector('#messageuser');
let btn3 = document.querySelector('#btn1');//获取验证码

let numRandon = document.querySelector('#numRandon');//生成内容


var arr = 'asdfghjklqwertyuiopzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM'
var str = '';
for (var i = 0; i < 4; i++) {
    str += arr[parseInt(Math.random() * arr.length)];
}
btn3.innerHTML = str;

btn3.onclick = () => {
    var str = '';
    for (var i = 0; i < 4; i++) {
        str += arr[parseInt(Math.random() * arr.length)];
    }
    btn3.innerHTML = str;



}

messageuser.onblur = () => {
    str2 = btn3.innerHTML;
    // console.log(str2);
    let val = messageuser.value;
    if (val.toLowerCase() == str.toLowerCase()) {
        numRandon.innerHTML = '验证通过'
        numRandon.className = 'pass'
    }
    else (numRandon.innerHTML = '验证错误')
}

//点击按钮

let btn = document.querySelector('#btn');

btn.onclick = () => {
    if (numRandon.className == 'pass' && move.className == 'pass' && ww3.className == 'pass' && pswadd.className == 'pass' && nameadd.className == 'pass') {
        // console.log(111);

        //成功向后端发送数据
        var phone = ww2.value;//手机
        var name = nameadd.value;
        var password = psw2.value;
        console.log(phone, name, password);

        //成功
        ajax({
            type: 'post',
            url: '../api/reg.php',
            data: {
                phone: phone,
                name: name,
                password: password

            },
            success: str => {
                // console.log(str);
                if (str == 'yes') {
                    alert('注册成功')
                    location.href = 'login.html';
                }
                else (
                    alert('注册失败')
                )
            }

        })

    }
    else {
        alert('请正确填写所有数据')
    }
}












