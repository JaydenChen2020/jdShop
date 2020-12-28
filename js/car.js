function carBook(){
    var arr=JSON.parse(localStorage.getItem("car"))
    var book=document.getElementById("car_book")
    for(var i=0;i<arr.length;i++){
        var dl=document.createElement("dl");
        var check=document.createElement("input");
        var img=document.createElement("img");
        img.src=arr[i].img;
        var name=document.createElement("span");
        name.innerHTML=arr[i].name;
        var price=document.createElement("span");
        price.innerHTML="￥"+arr[i].price;
        var button=document.createElement("input");
        var price2=document.createElement("span");
        price2.innerHTML="￥"+arr[i].price;
        var button2=document.createElement("input");
        dl.appendChild(check);
        dl.appendChild(img);
        dl.appendChild(name);
        dl.appendChild(price);
        dl.appendChild(button);
        dl.appendChild(price2);
        dl.appendChild(button2);
        book.appendChild(dl);
        button.type="text";
        check.type="radio";
        button.value=1;
        button.style.height="20px";
        button.style.height="20px";
        button.style.width="80px";
        button2.type="button";
        button2.value="删除";
        // button2.addEventListener("click",deleteBook(this))
        button2.style.height="20px";
        button2.style.width="50px";
    }
    // function deleteBook(obj){
    //     var i=obj.parentNode.parentNode.rowIndex;
    // var arr2=JSON.parse(localStorage.getItem("car"));
    // arr2.splice(i-1,1);
    // document.getElementById("tab").deleteRow(i);
    // localStorage.setItem("car",JSON.stringify(arr2));
    // }
}
