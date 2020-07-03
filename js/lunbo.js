(function(){
// 当前播放的图片的序号
var ord = 0;
// 定义定时器
var myTimer= null;
var $img = $(".banner-img ul>li");
var $span = $(".doudou>span");
var oLeft = $('.left-button');
var oRight = $('.right-button');

function autoPlay(){    
    myTimer = setInterval(function(){
        // 跳转到下一张图片上
        goImg(ord+1);
    },2000);
}

// 跳转到指定的图片上（transOrd就是要跳转的图片的序号）
function goImg(transOrd){
    // 一、数据的合法性处理
    // 1、健壮性
    if(transOrd==ord){  
        return; //结束函数执行
    }

    // 二、逻辑
    // 1、数据处理
    // outOrd是淡出的图片序号，transOrd是要淡入的图片序号（即：跳转的图片序号）
    let outOrd = ord;
    ord = transOrd;

    // 2、边界处理
    if(ord>$img.length-1){
        ord=0;
    }else if(ord<0){
        ord =$img.length-1;
    }

    //3、外观：
    // 3.1）、让一张图片淡出，一张图片淡入
    $img.eq(outOrd).animate({"opacity":0},1000);
    $img.eq(ord).animate({"opacity":1},1000);    
   // 3.2）、变豆豆
    $span.eq(outOrd).css({"background-color":"transparent"});
    $span.eq(ord).css({"background-color":"#fff"});    

}

function stopPlay(){
    window.clearInterval(myTimer);
    myTimer = null;
}

$(function(){
    if(getCookie('username')){
        $('.none').css('display','none');
        $('block').css('display','block');
    }else{
        $('.none').css('display','block');
        $('block').css('display','none');
    }
    $('.block').click(function(){
        removeCookie('username');
        $('.none').css('display','block');
        $('.block').css('display','none');
    })
    //1、自动播放
    autoPlay();

    //2、点击豆豆跳转到对应的图片上
    $span.click(function(){
        stopPlay();
        goImg($(this).index());
        autoPlay();
        
        
    });

    //3、左右箭头
    // 左箭头
    oLeft.click(function(){
        stopPlay();
        goImg(ord-1);
        autoPlay();
    });
    // 右箭头
    oRight.click(function(){
        stopPlay();
        goImg(ord+1);
        autoPlay();
    });

});
})()
