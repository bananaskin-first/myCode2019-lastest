/**
 * Created by Administrator on 2017/5/24.
 */
// console.log(1);
// $.cookie('uider');
if (getCookie('uider') != undefined) {
    $.ajax({
        type: 'post',
        url: '../api/search.php',
        data: {
            uid: getCookie('uider')
        },
        success: str => {
            //拿到数据了
            arr = JSON.parse(str);

            inti(arr);
            creat();

        }
    })
}

//

function inti(arr) {
    // console.log(arr);
    // console.log(arr.length);
    // console.log(arr[0].sid)
    var arr1 = [];
    var arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].sid == 1) {
            arr1.push(arr[i]);

        }
        else if (arr[i].sid == 2) {
            arr2.push(arr[i]);

        }

    }
    // let obj = { arr1, arr2 };
    // console.log(obj);
    console.log(arr1);
    console.log(arr2);
    //拿到了数据

    let shopInfo = document.querySelector('.shop_info');
    let orderContent = document.querySelector('.order_content')


    if (arr1[0] != undefined) {
        shopInfo.innerHTML = `<div class="all_check">
<input type="checkbox" id="shop_a" class="shopChoice">
<label for="shop_a" class="shop"></label>
</div>
<div class="shop_name">
店铺：<a href="javascript:;">${arr1[0].sname}</a>
</div>`;
        let str2 = '';
        for (item in arr1) {
            // console.log(item);
            str2 += `<ul class="order_lists" data-id="${arr1[item].gid}" >
<li class="list_chk">
    <input type="checkbox" id="checkbox_${arr1[item].did}" class="son_check">
    <label for="checkbox_${arr1[item].did}"></label>
</li>
<li class="list_con">
    <div class="list_img"><a href="javascript:;"><img src="${arr1[item].img}" alt=""></a></div>
    <div class="list_text"><a href="javascript:;">${arr1[item].title}</a></div>
</li>
<li class="list_info">
    <p>规格：默认</p>
    <p>尺寸：16*16*3(cm)</p>
</li>
<li class="list_price">
    <p class="price">￥${arr1[item].price}</p>
</li>
<li class="list_amount">
    <div class="amount_box">
        <a href="javascript:;" class="reduce reSty" data-id="${arr1[item].gid}" >-</a>
        <input type="text" value="${arr1[item].num}" class="sum" data-nun="${arr1[item].gid}">
        <a href="javascript:;" class="plus" data-id="${arr1[item].gid}" >+</a>
    </div>
</li>
<li class="list_sum">
    <p class="sum_price">￥${arr1[item].price * arr1[item].num}</p>
</li>
<li class="list_op">
    <p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>
</li>
</ul>`


        }
        orderContent.innerHTML = str2;

    }
    //生成节点插入的方法
    if (arr2[0] != undefined) {
        // $(".order_content").after(`<div class=" shop_info"> </div>`);
        let nBOX = document.getElementsByClassName('cartMain')[0];
        let nBOX1 = document.createElement('div');

        nBOX1.className = 'cartBox'
        nBOX.appendChild(nBOX1);




        let node2 = document.createElement('div');

        node2.className = 'shop_info'
        nBOX1.appendChild(node2)
        let shopInfo1 = document.getElementsByClassName('shop_info')[1];


        let node1 = document.createElement('div');

        node1.className = 'order_content'
        nBOX1.appendChild(node1)


        // node.appendChild(orderContent);

        // console.log(shopInfo1);
        let orderContent1 = document.getElementsByClassName('order_content')[1];
        console.log(orderContent1);

        shopInfo1.innerHTML = `<div class="all_check">
        <input type="checkbox" id="shop_b" class="shopChoice">
        <label for="shop_b" class="shop"></label>
        </div>
        <div class="shop_name">
        店铺：<a href="javascript:;">${arr2[0].sname}</a>
        </div>`;
        let str1 = '';
        for (item1 in arr2) {
            // console.log(item);

            str1 += `<ul class="order_lists" data-id="${arr2[item1].gid}">
                    <li class="list_chk">
                        <input type="checkbox" id="checkbox_${arr2[item1].did}" class="son_check">
                        <label for="checkbox_${arr2[item1].did}"></label>
                    </li>
                    <li class="list_con">
                        <div class="list_img"><a href="javascript:;"><img src="${arr2[item1].img}" alt=""></a></div>
                        <div class="list_text"><a href="javascript:;">${arr2[item1].title}</a></div>
                    </li>
                    <li class="list_info">
                        <p>规格：默认</p>
                        <p>尺寸：16*16*3(cm)</p>
                    </li>
                    <li class="list_price">
                        <p class="price">￥${arr2[item1].price}</p>
                    </li>
                    <li class="list_amount">
                        <div class="amount_box">
                            <a href="javascript:;" class="reduce reSty" data-id="${arr2[item1].gid}" >-</a>
                            <input type="text" value="${arr2[item1].num}" class="sum" data-nun="${arr2[item1].gid}">
                            <a href="javascript:;" class="plus" data-id="${arr2[item1].gid}" >+</a>
                        </div>
                    </li>
                    <li class="list_sum">
                        <p class="sum_price">￥${arr2[item1].price * arr2[item1].num}</p>
                    </li>
                    <li class="list_op">
                        <p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>
                    </li>
                </ul>`

        }
        orderContent1.innerHTML = str1;



        // 
    }
}



function creat() {
    $(function () {

        //全局的checkbox选中和未选中的样式
        var $allCheckbox = $('input[type="checkbox"]'),     //全局的全部checkbox
            $wholeChexbox = $('.whole_check'),
            $cartBox = $('.cartBox'),                       //每个商铺盒子
            $shopCheckbox = $('.shopChoice'),               //每个商铺的checkbox
            $sonCheckBox = $('.son_check');                 //每个商铺下的商品的checkbox
        $allCheckbox.click(function () {
            if ($(this).is(':checked')) {
                $(this).next('label').addClass('mark');
            } else {
                $(this).next('label').removeClass('mark')
            }
        });

        //===============================================全局全选与单个商品的关系================================
        $wholeChexbox.click(function () {
            var $checkboxs = $cartBox.find('input[type="checkbox"]');
            if ($(this).is(':checked')) {
                $checkboxs.prop("checked", true);
                $checkboxs.next('label').addClass('mark');
            } else {
                $checkboxs.prop("checked", false);
                $checkboxs.next('label').removeClass('mark');
            }
            totalMoney();
        });


        $sonCheckBox.each(function () {
            $(this).click(function () {
                if ($(this).is(':checked')) {
                    //判断：所有单个商品是否勾选
                    var len = $sonCheckBox.length;
                    var num = 0;
                    $sonCheckBox.each(function () {
                        if ($(this).is(':checked')) {
                            num++;
                        }
                    });
                    if (num == len) {
                        $wholeChexbox.prop("checked", true);
                        $wholeChexbox.next('label').addClass('mark');
                    }
                } else {
                    //单个商品取消勾选，全局全选取消勾选
                    $wholeChexbox.prop("checked", false);
                    $wholeChexbox.next('label').removeClass('mark');
                }
            })
        })

        //=======================================每个店铺checkbox与全选checkbox的关系/每个店铺与其下商品样式的变化===================================================

        //店铺有一个未选中，全局全选按钮取消对勾，若店铺全选中，则全局全选按钮打对勾。
        $shopCheckbox.each(function () {
            $(this).click(function () {
                if ($(this).is(':checked')) {
                    //判断：店铺全选中，则全局全选按钮打对勾。
                    var len = $shopCheckbox.length;
                    var num = 0;
                    $shopCheckbox.each(function () {
                        if ($(this).is(':checked')) {
                            num++;
                        }
                    });
                    if (num == len) {
                        $wholeChexbox.prop("checked", true);
                        $wholeChexbox.next('label').addClass('mark');
                    }

                    //店铺下的checkbox选中状态
                    $(this).parents('.cartBox').find('.son_check').prop("checked", true);
                    $(this).parents('.cartBox').find('.son_check').next('label').addClass('mark');
                } else {
                    //否则，全局全选按钮取消对勾
                    $wholeChexbox.prop("checked", false);
                    $wholeChexbox.next('label').removeClass('mark');

                    //店铺下的checkbox选中状态
                    $(this).parents('.cartBox').find('.son_check').prop("checked", false);
                    $(this).parents('.cartBox').find('.son_check').next('label').removeClass('mark');
                }
                totalMoney();
            });
        });


        //========================================每个店铺checkbox与其下商品的checkbox的关系======================================================

        //店铺$sonChecks有一个未选中，店铺全选按钮取消选中，若全都选中，则全选打对勾
        $cartBox.each(function () {
            var $this = $(this);
            var $sonChecks = $this.find('.son_check');
            $sonChecks.each(function () {
                $(this).click(function () {
                    if ($(this).is(':checked')) {
                        //判断：如果所有的$sonChecks都选中则店铺全选打对勾！
                        var len = $sonChecks.length;
                        var num = 0;
                        $sonChecks.each(function () {
                            if ($(this).is(':checked')) {
                                num++;
                            }
                        });
                        if (num == len) {
                            $(this).parents('.cartBox').find('.shopChoice').prop("checked", true);
                            $(this).parents('.cartBox').find('.shopChoice').next('label').addClass('mark');
                        }

                    } else {
                        //否则，店铺全选取消
                        $(this).parents('.cartBox').find('.shopChoice').prop("checked", false);
                        $(this).parents('.cartBox').find('.shopChoice').next('label').removeClass('mark');
                    }
                    totalMoney();
                });
            });
        });


        //=================================================商品数量==============================================
        let userID = getCookie('uider');
        // console.log(userID);


        var $plus = $('.plus'),//加号
            $reduce = $('.reduce'),//减号
            $all_sum = $('.sum');//框架里面的数值
        //加数量
        $plus.click(function () {
            var $inputVal = $(this).prev('input'),
                $count = parseInt($inputVal.val()) + 1,
                $obj = $(this).parents('.amount_box').find('.reduce'),
                $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
                $price = $(this).parents('.order_lists').find('.price').html(),  //单价
                $priceTotal = $count * parseInt($price.substring(1));
            $inputVal.val($count);
            $priceTotalObj.html('￥' + $priceTotal);
            if ($inputVal.val() > 1 && $obj.hasClass('reSty')) {
                $obj.removeClass('reSty');
            }
            totalMoney();

            //找到对应商品的ID更新数据

            var goodID = $(this).data('id');
            // console.log(this);
            var num1 = this.previousElementSibling;
            //sum price里面也要渲染。。。找到节点先

            // console.log(num1);

            // console.log(goodID);

            $.ajax({
                //获取数据
                type: 'get',
                url: '../api/searchnum.php',
                data: {
                    goodID: goodID,
                    userID: userID
                },
                success: str => {
                    // console.log(str);
                    //找到数据了
                    arr = JSON.parse(str);
                    // console.log(arr);
                    var num = arr[0].num;
                    // console.log(num);
                    //获取到num了，然后在外面+1跟新到数据库
                    num = num * 1 + 1;

                    ($.ajax({
                        // 数据更新
                        type: 'get',
                        url: '../api/plus.php',
                        data: {
                            goodID: goodID,
                            userID: userID,
                            num: num
                        },
                        success: str => {
                            //反正就是更新成功了，那么要渲染到val里面
                            num1.innerHTML = num;
                        }
                    }))

                }

            })
        });
        //减
        $reduce.click(function () {
            var $inputVal = $(this).next('input'),
                $count = parseInt($inputVal.val()) - 1,
                $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
                $price = $(this).parents('.order_lists').find('.price').html(),  //单价
                $priceTotal = $count * parseInt($price.substring(1));
            if ($inputVal.val() > 1) {
                $inputVal.val($count);
                $priceTotalObj.html('￥' + $priceTotal);
            }
            if ($inputVal.val() == 1 && !$(this).hasClass('reSty')) {
                $(this).addClass('reSty');
            }
            totalMoney();


            var goodID = $(this).data('id');
            // console.log(this);
            var num1 = this.nextElementSibling;
            // console.log(num1.value)
            if (num1.value >= 1) {
                //大于1才能减
                $.ajax({
                    //获取数据
                    type: 'get',
                    url: '../api/searchnum.php',
                    data: {
                        goodID: goodID,
                        userID: userID
                    },
                    success: str => {
                        // console.log(str);
                        //找到数据了
                        arr = JSON.parse(str);
                        // console.log(arr);
                        var num = arr[0].num;
                        // console.log(num);
                        //获取到num了，然后在外面+1跟新到数据库
                        num = num * 1 - 1;

                        ($.ajax({
                            // 数据更新
                            type: 'get',
                            url: '../api/plus.php',
                            data: {
                                goodID: goodID,
                                userID: userID,
                                num: num
                            },
                            success: str => {
                                //反正就是更新成功了，那么要渲染到val里面
                                num1.innerHTML = num;
                            }
                        }))

                    }

                })

            }

        });

        $all_sum.keyup(function () {
            var $count = 0,
                $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
                $price = $(this).parents('.order_lists').find('.price').html(),  //单价
                $priceTotal = 0;
            if ($(this).val() == '') {
                $(this).val('1');
            }
            $(this).val($(this).val().replace(/\D|^0/g, ''));
            $count = $(this).val();
            $priceTotal = $count * parseInt($price.substring(1));
            $(this).attr('value', $count);
            $priceTotalObj.html('￥' + $priceTotal);
            totalMoney();

            var goodID = $(this).data('nun');
            // console.log(this);
            var num1 = this.value;



            // console.log(arr);

            // console.log(num);
            //获取到num了，然后在外面+1跟新到数据库
            var num = num1

            $.ajax({
                // 数据更新
                type: 'get',
                url: '../api/plus.php',
                data: {
                    goodID: goodID,
                    userID: userID,
                    num: num
                },
                success: str => {
                    //反正就是更新成功了，那么要渲染到val里面

                }
            })





        })

        //======================================移除商品========================================
        //4 删除功能
        var $order_lists = null;
        var $order_content = '';
        $('.delBtn').click(function () {
            $order_lists = $(this).parents('.order_lists');
            $order_content = $order_lists.parents('.order_content');
            $('.model_bg').fadeIn(300);
            $('.my_model').fadeIn(300);
            $goodID = $(this).parents('.order_lists').data('id');
            console.log($goodID);


        });

        //关闭模态框
        $('.closeModel').click(function () {
            closeM();
        });
        $('.dialog-close').click(function () {
            closeM();
        });
        function closeM() {
            $('.model_bg').fadeOut(300);
            $('.my_model').fadeOut(300);
        }
        //确定按钮，移除商品
        $('.dialog-sure').click(function () {
            $order_lists.remove();
            if ($order_content.html().trim() == null || $order_content.html().trim().length == 0) {
                $order_content.parents('.cartBox').remove();
            }
            closeM();
            $sonCheckBox = $('.son_check');
            totalMoney();

            //这里确定删除就删除数据库内容



            $.ajax({
                // 数据更新
                type: 'get',
                url: '../api/del.php',
                data: {
                    goodID: $goodID,
                    userID: userID,

                },
                success: str => {
                    //反正就是更新成功了，那么要渲染到val里面
                    console.log(str)
                }
            })
        });

        //======================================总计==========================================

        function totalMoney() {
            var total_money = 0;
            var total_count = 0;
            var calBtn = $('.calBtn a');
            $sonCheckBox.each(function () {
                if ($(this).is(':checked')) {
                    var goods = parseInt($(this).parents('.order_lists').find('.sum_price').html().substring(1));
                    var num = parseInt($(this).parents('.order_lists').find('.sum').val());
                    total_money += goods;
                    total_count += num;
                }
            });
            $('.total_text').html('￥' + total_money);
            $('.piece_num').html(total_count);

            // console.log(total_money,total_count);

            if (total_money != 0 && total_count != 0) {
                if (!calBtn.hasClass('btn_sty')) {
                    calBtn.addClass('btn_sty');
                }
            } else {
                if (calBtn.hasClass('btn_sty')) {
                    calBtn.removeClass('btn_sty');
                }
            }
        }


    });
}
