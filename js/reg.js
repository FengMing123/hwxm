window.onload = function(){
var userNamer = document.getElementById("userName");
var userPass = document.getElementById("passW");
var userTpass = document.getElementById("tpassw")
var userTi = document.getElementById("user-tishi");
var passTi = document.getElementById("pass-tishi");
var tpassTi = document.getElementById("tpass-tishi");

userNamer.onblur = function(){
  // var reg = /^1\d{10}$/;
  var reg = /^1[3456789]\d{9}$/;

  if(reg.test(this.value)){
      userTi.innerHTML= "符合规范";
  }else{
      userTi.innerHTML= "电话号码不合格";
  }if(this.value == 0){
    userTi.innerHTML= ""
  }
}

userPass.onblur = function(){
    if(this.value.length >16 || this.value.length <6){
        passTi.innerHTML = '密码应该在6~16位'
    }

    var reg = /^\d{6,16}$/;
    var reg1 = /^\w{6,16}$/
    if(reg.test(this.value)){
        passTi.innerHTML= "密码太简单了";
    }else if(reg1.test(this.value)){
        passTi.innerHTML = '密码符合'
    }
    if(this.value == 0){
        passTi.innerHTML= ""
      }
  }
  

userTpass.onblur = function(){
    if(this.value == userPass.value){
        tpassTi.innerHTML = '密码正确'
    }else{
        tpassTi.innerHTML = '密码不正确'
    if(this.value == 0){
        tpassTi.innerHTML= ""
      }
}


}}
// console.log($('#btnZc').get(0))
// console.log($('#userName').val())
  $('#btnZc').click(function(){
    // console.log($('#passW').val())
    //   console.log(444)
      $.ajax({
          type:'POST',
          url:'./php/regSave.php',
          data:{
              'username':$('#userName').val(),
              'userpass':$('#passW').val()
          },
          dataType:'json',
          success:function(data){
            // console.log(data);
            alert(data.msg)
            location.href='./login.html'
          }
      })
  })