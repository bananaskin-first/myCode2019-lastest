//切换功能,选项卡功能


let tabLeft = document.querySelector('#tabLeft');
let tabLefta = tabLeft.children[0];
let tabRight = document.querySelector('#tabRight');
let tabRighta = tabRight.children[0];
let userpsw = document.querySelector('#userpsw');//正常内容
let telLogin = document.querySelector('#telLogin');//二维码
let subBox = document.querySelector('.subBox');
// console.log(subBox);

// console.log(tabLefta);
// console.log(tabRighta);
// console.log(userpsw);
// console.log(telLogin);

//两边都要绑定点击事件，先做右边的

tabRight.onclick = () => {
    tabLefta.style.color = 'black';
    tabRighta.style.color = 'red';

    //然后内容消失
    userpsw.style.display = 'none'
    subBox.style.display = 'none'
    //二维码显示
    telLogin.style.display = 'block'
}



tabLeft.onclick = () => {
    tabLefta.style.color = 'red';
    tabRighta.style.color = 'black';
    //二维码消失，内容显示
    userpsw.style.display = 'block'
    subBox.style.display = 'block'
    //二维码显示
    telLogin.style.display = 'none'
}

//下拉菜单显示

let orderMore = document.querySelector('.orderMore');
let more = document.querySelector('.more');
// console.log(more);

// console.log(orderMore);

let isok = true;

orderMore.onclick = () => {
    if (isok == true) {
        more.style.display = 'block';
    }
    else {
        more.style.display = 'none';
    }
    isok = !isok;
}


//做登录功能

let loginName = document.querySelector('#loginName');
let loginPassword = document.querySelector('#loginPassword');

let sub = document.querySelector('#sub');//登录按钮


//点击的时候获取数值

// console.log(sub);

sub.onclick = () => {
    let username = loginName.value.trim();
    let password = loginPassword.value.trim();

    //数值都存在的时候才发送请求

    if (username && password) {
        ajax({
            type: 'post',
            url: '../api/login.php',
            data: {
                username: username,
                password: password
            },
            success: str => {
                console.log(str)
                arr1 = JSON.parse(str);
                console.log(arr1[0]);
                if (arr1[0] != undefined) {
                    // console.log(1);
                    alert('登录成功');
                    setCookie('uider', arr1[0].uid, 7);

                    location.href = 'index.html?' + username;
                }
                else {
                    // console.log(2);
                    alert('请输入正确的密码和账号');
                    loginName.value = '';
                    loginPassword.value = '';
                }


            }
        })
    }

    else {
        loginName.value = '';
        loginPassword.value = '';
        alert('请输入账号和密码');
    }


}