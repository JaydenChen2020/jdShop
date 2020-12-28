var ip='http://192.168.0.25:8888/'

// 获得XMLHttpRequest对象
function httpRequest(){
    if(XMLHttpRequest){
        return new XMLHttpRequest();
    }else{
        return new ActiveXObject("Microsoft.XMLHTTP")
    }
}
function logincheck(){
    if(localStorage.getItem("user")){
        document.getElementById("user").innerHTML="欢迎 "+JSON.parse(localStorage.getItem("user")).username;
    }else{
        document.getElementById("user").innerHTML="<a href='./login.html'>你好 请登录</a><a href=''>免费注册</a>"
    }
}