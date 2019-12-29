/*
    库：类库,方便以后的调用；
    * 功能：生成任意范围内随机数
    * 参数说明：min：范围里面的小的数；max：范围里面大的数
    * 例如：
        var num = ranNum(10,50);
        就会得到一个10-50之间的随机整数
*/

function ranNum(min, max) {
    //Math.random() 0-0.99 当随机数等于0的时候，整体最小的时候
    //最大的时候，Math.random() 最大就是1(实际没到1)
    return parseInt(Math.random() * (max - min + 1)) + min;
}

