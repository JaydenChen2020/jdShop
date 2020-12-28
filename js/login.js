function checkTel(obj) {
    var f = /^(1[3,5,7,8]\d{9})|(\w{2,8}@[a-z A-Z 0-9]{3,6}\.com)$/.test(obj.value);
    if (f) {
        obj.value.style.color = green;
        var a = true;
        return a;
    } else {
        obj.value.style.color = red;
    }
}
function checkKey(obj) {
    var key;
    var f = /^[a-z A-Z 0-9]{8,10}$/;
    if (f) {
        obj.value.color = green;
        key = obj.value;
        var b = true;
        return b;
    }
}
function checkKeyAgain(obj) {
    if (obj.value == key) {
        obj.value.color = green;
        var c = true;
        return c;
    }
}
function sub() {
    if (a && b && c) {
        var httpRequest;
        var t = document.getElementById("use_Tel").value;
        var k = document.getElementById("use_key").value;
        if (XMLHttpRequest) {
            httpRequest = new XMLHttpRequest;
        } else {
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }
        httpRequest.open("GET", id + "register?username=" + t + "&password=" + k);
        httpRequest.send();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                var answer = httpRequest.responseText;
                if (answer == 1) {
                    window.location.href = "./register.html"
                } else {
                    alert("注册失败")
                }
            }
        }
    } else {
        alert("信息填写错误")
    }
}