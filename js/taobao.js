var myTimer = null;   

$("sousuolan").oninput = function(){
 
    //1、清除上一次启动的定时器
    if(myTimer!=null){
        window.clearTimeout(myTimer);
        myTimer = null;
    }
    // 2、再次启动定时器
    myTimer = setTimeout(()=>{
         // jsonp发送请求
        let scriptDom = document.createElement("script");
        // 以下地址中的 键 q 就是传递给淘宝的关键字
        scriptDom.src = 'https://suggest.taobao.com/sug?code=utf-8&q=' + this.value + '&_ksTS=1515120676355_323&callback=fn&area=c2c&bucketid=15';
        document.body.appendChild(scriptDom);
        scriptDom.remove();

    },300);
}

function fn(data){
    //console.log(data);
    // console.log(data.result);
    // console.log(data.result[0][0]); //
    let htmlStr = "";
    data.result.forEach(item => {
        // item:是result数组的每个元素
        htmlStr+=`<li>${item[0]}</li>`;
    });
    $("sousuotiao").innerHTML = htmlStr;
}


function $(str){
    return document.getElementById(str);
}
