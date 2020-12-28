function initPage(){
    logincheck();
    getPlayImages();
    getAdBook();
    getBooks();
}

function getPlayImages(){
    var r=httpRequest();
    r.open("GET",ip+"showImages");
    r.send();
    r.onreadystatechange=function(){
        if(r.readyState==4&&r.status==200){
            var arr=JSON.parse(r.responseText);
            createPlayBtn(arr);
            var m="";
            // 
            var flag=setInterval(function a(t){
                if(!m){
                    m=t;
                }
                test(m);
            },5000,arr);
        }
    }
}

var count=0;
function createPlayBtn(arr){
    var ul=document.getElementById("u");
    for(var i=0;i<arr.length;i++){
        var li=document.createElement("li");
        li.setAttribute("name","play");
        ul.appendChild(li)
    }
}

function changeColor(n){
    var lis=document.getElementsByName("play")
    for(var i=0;i<lis.length;i++){
        // console.log(i,"--",n);
        if(i==n){
            lis[i].style.backgroundColor="#ffffff";
        }else{
            lis[i].style.backgroundColor="blue";
        }
    }
}

function test(arr){
    var img=document.getElementById("img");
    img.src=ip+arr[count].img;
    // 
    changeColor(count);
    count++;
    if(count==arr.length){
        count=0;
    }
}

function getAdBook(){
    var r=httpRequest();
    r.open("GET",ip+"showADBooks");
    r.send();
    r.onreadystatechange=function(){
        if(r.readyState==4&&r.status==200){
            var adBooks=JSON.parse(r.responseText);
            addAd(adBooks);
        }
    }
}

function addAd(arr){
    var ad=document.getElementById("ad");
    for(var i=0;i<arr.length;i++){
        var dl=document.createElement("dl");
        var img=document.createElement("img");
        img.src=ip+arr[i].img;
        var price=document.createElement("span");
        price.innerHTML="￥"+arr[i].price;
        var name=document.createElement("span");
        name.innerHTML=arr[i].name;
        dl.appendChild(img);
        dl.appendChild(price);
        dl.appendChild(name);
        ad.appendChild(dl);
    }
}

function getBooks(){
    var r=httpRequest();
    r.open("GET",ip+"getBooks");
    r.send();
    r.onreadystatechange=function(){
        if (r.readyState==4&&r.status==200){
            var books=JSON.parse(r.responseText);
            addBooks(books);
        }
    }
}
function addBooks(arr){
    var books=document.getElementById("books");
    for(var i=0;i<arr.length;i++){
        var dl=document.createElement("dl");
        var img=document.createElement("img");
        img.src=ip+arr[i].img;
        var price=document.createElement("span");
        price.innerHTML="￥"+arr[i].price;
        var name=document.createElement("span");
        name.innerHTML=arr[i].name;
        var btns=document.createElement("span");
        btns.innerHTML="<em>自营</em><em>放心购</em><em>秒杀</em>"
        var addCarBtn=document.createElement("span");
        addCarBtn.innerHTML="加入购物车";
        function addB(index){
            addCarBtn.onclick=function(){
                var car=[];
                if(localStorage.getItem("car")){
                    car=JSON.parse(localStorage.getItem("car"));
                }else{
                    localStorage.setItem("car",JSON.stringify(car));
                }
                var temp=0;
                for(var i=0;i<car.length;i++){
                    if(car[i].name==arr[index].name){
                        temp++;
                        break;
                    }
                }
                if(temp==0){
                    car.push(arr[index]);
                    localStorage.setItem("car",JSON.stringify(car))
                }
            }
        }
        addB(i);
        dl.appendChild(img);
        dl.appendChild(price);
        dl.appendChild(name);
        dl.appendChild(btns);
        dl.appendChild(addCarBtn);
        books.appendChild(dl);
    }
}