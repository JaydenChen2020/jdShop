function check(){
    var r=httpRequest();
    var u=document.getElementById("username").value;
    var p=document.getElementById("password").value;
    r.open("GET",ip+"login?username="+u+"&password="+p);
    r.send();
    r.onreadystatechange=function(){
        if(r.readyState==4&&r.status==200){
            if(r.responseText){
                window.location.href="./index.html"
            }else{
                alert("账号或者密码错误")
            }
        }
    }
}