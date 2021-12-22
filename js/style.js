let i = 0;

document.getElementById("cartCount").style.display = "none"
document.getElementById("cartSample").style.display = "none"
document.getElementById("cartSampleitem").style.display = "none"


function clickOne(){
    let img = document.getElementById("sample").src = "images/image-product-1.jpg";   
}
function clickTwo(){
    let img = document.getElementById("sample").src = "images/image-product-2.jpg";   
}
function clickThree(){
    let img = document.getElementById("sample").src = "images/image-product-3.jpg";
}
function clickFour(){
    let img = document.getElementById("sample").src = "images/image-product-4.jpg";  
}


function plusFun(){
    i++;
    document.getElementById("cartCount").style.display = "block"
    document.getElementById("cartSample").style.display = "none"

    document.getElementById("cartCount").innerHTML = i;
    document.getElementById("zeroCount").innerHTML = i;
    console.log(i);
    if(i<0){
        document.getElementById("zeroCount").style.display = "none";
    }
    }


function minusFun(){
    i--;
    document.getElementById("cartCount").style.display = "block"
    document.getElementById("cartCount").innerHTML = i;
    document.getElementById("zeroCount").innerHTML = i;

    console.log(i);
    if(i<0){
        alert("Choose the count for the item number")
        document.getElementById("zeroCount").innerHTML = 0;
        document.getElementById("cartCount").innerHTML = 0;
    }
    }
function cartFun(){
    document.getElementById("cartSample").style.display = "block"

        // console.log("this is addto cart")

    
    if(i>0){
        document.getElementById("cartSample").style.display = "none"
        document.getElementById("cartSampleitem").style.display = "block"
        console.log("Shi tal")
    }
    else{
        console.log("empty cart")
    }
    
    }


    function deleteBtn(){
        document.getElementById("cartSampleitem").style.display = "none"
        document.getElementById("cartSample").style.display = "none"

    }
    function checkOut(){
        alert("ကျေးဇူးပါ.....")
    }
    
