class ShoppingCar{
    // 构造函数（方法）
    constructor(boxDom){
        // 属性        
        this.boxDom = boxDom;
    }

    // 方法
    // 添加事件
    addEvent(){       
        // 取出所有的tr标签
        let trs = this.boxDom.firstElementChild.children;
        // 循环的是tr
        for(let i=1;i<trs.length-1;i++){
            // 有加减号的那个单元格
            let td = trs[i].lastElementChild.previousElementSibling;
            let reduceBtn = td.firstElementChild;
            //1)、给减号按钮绑定事件
            reduceBtn.onclick = (event)=>{
                let e = event || window.event;
                let btn = e.target;
                // 传入参数（被点击减法按钮）
                this.reduce(btn);//reduce函数是类的，前面的this肯定不能事件源。如果不用箭头函数，这个this就是事件源。
            }
             //2)、加号按钮绑定事件
            let addBtn = td.lastElementChild;
            addBtn.onclick = (event)=>{
                let e = event || window.event;
                let btn = e.target;
                this.add(btn);
            }
        }
    }

    // 减法 
    reduce(btn){
        //1、数量减一:把文本框（跟点击的减法按钮相邻的文本框）的值减一
        let input = btn.nextElementSibling;
        let count = parseFloat(input.value);
        count--;
        if(count<0){
            count = 0;
        }
        input.value = count;

        //2、金额：等于单价乘以数量
        let price = parseFloat(btn.parentNode.previousElementSibling.innerHTML);
        let money = price*count;
        btn.parentNode.nextElementSibling.innerHTML = money;

        //3、合计：
        let trs = this.boxDom.firstElementChild.children;
        let totalMoney = 0;
        for(let i=1;i<trs.length-1;i++){
            totalMoney += parseFloat(trs[i].lastElementChild.innerHTML);
        }
        // 最后一行的单元格
        let tdTotalMoney = this.boxDom.firstElementChild.lastElementChild.firstElementChild;
        tdTotalMoney.innerHTML ="合计："+ totalMoney;
    }

       // 加法
    add(btn){
        // 1、数量加一：把加法按钮相邻（前面的文本框）的数字加一
        let input = btn.previousElementSibling;
        let count = parseFloat(input.value);
        count++;
        input.value = count;

        // 2、金额：(单价*数量)
        let price = parseFloat(btn.parentNode.previousElementSibling.innerHTML);
        let money = price*count;
        btn.parentNode.nextElementSibling.innerHTML = money;

        // 3、合计
        let trs = this.boxDom.firstElementChild.children;
        let totalMoney = 0;
        for(let i=1;i<trs.length-1;i++){
            totalMoney += parseFloat(trs[i].lastElementChild.innerHTML);
        }
        // 最后一行的单元格
        let tdTotalMoney = this.boxDom.firstElementChild.lastElementChild.firstElementChild;
        tdTotalMoney.innerHTML ="合计："+ totalMoney;
    }
}

// 2、流程
window.onload = function(){
    let oTable = document.getElementsByClassName("shop-area");
    let s1 = new ShoppingCar(oTable);

    s1.addEvent();

}