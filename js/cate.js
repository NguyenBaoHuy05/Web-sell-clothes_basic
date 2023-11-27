const home1=document.querySelector(".home1")
const house1=document.querySelector(".house1")
const work=document.querySelector(".work")
home1.addEventListener("click" , function(){
    house1.classList.add("open")
    work.classList.add("close")
}) 

const trove1=document.querySelector(".trove1")
trove1.addEventListener("click" , function(){
    house1.classList.remove("open")
    work.classList.remove("close")
})
// 2222222
const home2=document.querySelector(".home2")
const house2=document.querySelector(".house2")
home2.addEventListener("click" , function(){
    house2.classList.add("open")
    work.classList.add("close")
}) 

const trove2=document.querySelector(".trove2")
trove2.addEventListener("click" , function(){
    house2.classList.remove("open")
    work.classList.remove("close")
})
// 33333333333
const home3=document.querySelector(".home3")
const house3=document.querySelector(".house3")
home3.addEventListener("click" , function(){
    house3.classList.add("open")
    work.classList.add("close")
}) 

const trove3=document.querySelector(".trove3")
trove3.addEventListener("click" , function(){
    house3.classList.remove("open")
    work.classList.remove("close")
})
// 444444444444
const home4=document.querySelector(".home4")
const house4=document.querySelector(".house4")
home4.addEventListener("click" , function(){
    house4.classList.add("open")
    work.classList.add("close")
}) 

const trove4=document.querySelector(".trove4")
trove4.addEventListener("click" , function(){
    house4.classList.remove("open")
    work.classList.remove("close")
})
// 555555555555555
const home5=document.querySelector(".home5")
const house5=document.querySelector(".house5")
home5.addEventListener("click" , function(){
    house5.classList.add("open")
    work.classList.add("close")
}) 

const trove5=document.querySelector(".trove5")
trove5.addEventListener("click" , function(){
    house5.classList.remove("open")
    work.classList.remove("close")
})
// 6666666666666
const home6=document.querySelector(".home6")
const house6=document.querySelector(".house6")
home6.addEventListener("click" , function(){
    house6.classList.add("open")
    work.classList.add("close")
}) 

const trove6=document.querySelector(".trove6")
trove6.addEventListener("click" , function(){
    house6.classList.remove("open")
    work.classList.remove("close")
})
// 777777777777777777777
const home7=document.querySelector(".home7")
const house7=document.querySelector(".house7")
home7.addEventListener("click" , function(){
    house7.classList.add("open")
    work.classList.add("close")
}) 

const trove7=document.querySelector(".trove7")
trove7.addEventListener("click" , function(){
    house7.classList.remove("open")
    work.classList.remove("close")
})
// 8888888888888888888888
const home8=document.querySelector(".home8")
const house8=document.querySelector(".house8")
home8.addEventListener("click" , function(){
    house8.classList.add("open")
    work.classList.add("close")
}) 

const trove8=document.querySelector(".trove8")
trove8.addEventListener("click" , function(){
    house8.classList.remove("open")
    work.classList.remove("close")
})
// ///////////////////////////////////////


//1111 --------------------------------------product------------
const bigImg1=document.querySelector(".ms1 img")
const smalImg1=document.querySelectorAll(".ms1 img")
smalImg1.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg1.src=imgItem.src
    })
})
// 22222222222
const bigImg2=document.querySelector(".ms2 img")
const smalImg2=document.querySelectorAll(".ms2 img")
smalImg2.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg2.src=imgItem.src
    })
})
// 33333333333333
const bigImg3=document.querySelector(".ms3 img")
const smalImg3=document.querySelectorAll(".ms3 img")
smalImg3.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg3.src=imgItem.src
    })
})
// 44444444444444444
const bigImg4=document.querySelector(".ms4 img")
const smalImg4=document.querySelectorAll(".ms4 img")
smalImg4.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg4.src=imgItem.src
    })
})
// 555555555555555
const bigImg5=document.querySelector(".ms5 img")
const smalImg5=document.querySelectorAll(".ms5 img")
smalImg5.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg5.src=imgItem.src
    })
})
// 6666666666666666
const bigImg6=document.querySelector(".ms6 img")
const smalImg6=document.querySelectorAll(".ms6 img")
smalImg6.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg6.src=imgItem.src
    })
})
// 7777777777777777777
const bigImg7=document.querySelector(".ms7 img")
const smalImg7=document.querySelectorAll(".ms7 img")
smalImg7.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg7.src=imgItem.src
    })
})
// 888888888888
const bigImg8=document.querySelector(".ms8 img")
const smalImg8=document.querySelectorAll(".ms8 img")
smalImg8.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg8.src=imgItem.src
    })
})
// 
// 
// nút bao quan chi tiet
// 11
const baoquan1=document.querySelector(".house1 .baoquan")
const chitiet1=document.querySelector(".house1 .chitiet")
if(baoquan1){
    baoquan1.addEventListener("click",function(){
        document.querySelector(".house1 .product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".house1 .product-content-right-bottom-content-baoquan").style.display = "block"
    })
}
if(chitiet1){
    chitiet1.addEventListener("click",function(){
        document.querySelector(".house1 .product-content-right-bottom-content-baoquan").style.display = "none"
        document.querySelector(".house1 .product-content-right-bottom-content-chitiet").style.display = "block"
    })
}
const butTon1=document.querySelector(".house1 .product-content-right-bottom-top")
if(butTon1){
    butTon1.addEventListener("click", function(){
        document.querySelector(".house1 .product-content-right-bottom-content-big").classList.toggle("activeB")
    })
    
}
// 22
const baoquan2=document.querySelector(".house2 .baoquan")
const chitiet2=document.querySelector(".house2 .chitiet")
if(baoquan2){
    baoquan2.addEventListener("click",function(){
        document.querySelector(".house2 .product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".house2 .product-content-right-bottom-content-baoquan").style.display = "block"
    })
}
if(chitiet2){
    chitiet2.addEventListener("click",function(){
        document.querySelector(".house2 .product-content-right-bottom-content-baoquan").style.display = "none"
        document.querySelector(".house2 .product-content-right-bottom-content-chitiet").style.display = "block"
    })
}
const butTon2=document.querySelector(".house2 .product-content-right-bottom-top")
if(butTon2){
    butTon2.addEventListener("click", function(){
        document.querySelector(".house2 .product-content-right-bottom-content-big").classList.toggle("activeB")
    })
    
}
//33 
const baoquan3=document.querySelector(".house3 .baoquan")
const chitiet3=document.querySelector(".house3 .chitiet")
if(baoquan3){
    baoquan3.addEventListener("click",function(){
        document.querySelector(".house3 .product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".house3 .product-content-right-bottom-content-baoquan").style.display = "block"
    })
}
if(chitiet3){
    chitiet3.addEventListener("click",function(){
        document.querySelector(".house3 .product-content-right-bottom-content-baoquan").style.display = "none"
        document.querySelector(".house3 .product-content-right-bottom-content-chitiet").style.display = "block"
    })
}
const butTon3=document.querySelector(".house3 .product-content-right-bottom-top")
if(butTon3){
    butTon3.addEventListener("click", function(){
        document.querySelector(".house3 .product-content-right-bottom-content-big").classList.toggle("activeB")
    })
    
}
// 44
const baoquan4=document.querySelector(".house4 .baoquan")
const chitiet4=document.querySelector(".house4 .chitiet")
if(baoquan4){
    baoquan4.addEventListener("click",function(){
        document.querySelector(".house4 .product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".house4 .product-content-right-bottom-content-baoquan").style.display = "block"
    })
}
if(chitiet4){
    chitiet4.addEventListener("click",function(){
        document.querySelector(".house4 .product-content-right-bottom-content-baoquan").style.display = "none"
        document.querySelector(".house4 .product-content-right-bottom-content-chitiet").style.display = "block"
    })
}
const butTon4=document.querySelector(".house4 .product-content-right-bottom-top")
if(butTon4){
    butTon4.addEventListener("click", function(){
        document.querySelector(".house4 .product-content-right-bottom-content-big").classList.toggle("activeB")
    })
    
}
// 55
const baoquan5=document.querySelector(".house5 .baoquan")
const chitiet5=document.querySelector(".house5 .chitiet")
if(baoquan5){
    baoquan5.addEventListener("click",function(){
        document.querySelector(".house5 .product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".house5 .product-content-right-bottom-content-baoquan").style.display = "block"
    })
}
if(chitiet5){
    chitiet5.addEventListener("click",function(){
        document.querySelector(".house5 .product-content-right-bottom-content-baoquan").style.display = "none"
        document.querySelector(".house5 .product-content-right-bottom-content-chitiet").style.display = "block"
    })
}
const butTon5=document.querySelector(".house5 .product-content-right-bottom-top")
if(butTon5){
    butTon.addEventListener("click", function(){
        document.querySelector(".house5 .product-content-right-bottom-content-big").classList.toggle("activeB")
    })
    
}
// 66
const baoquan6=document.querySelector(".house6 .baoquan")
const chitiet6=document.querySelector(".house6 .chitiet")
if(baoquan6){
    baoquan6.addEventListener("click",function(){
        document.querySelector(".house6 .product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".house6 .product-content-right-bottom-content-baoquan").style.display = "block"
    })
}
if(chitiet6){
    chitiet6.addEventListener("click",function(){
        document.querySelector(".house6 .product-content-right-bottom-content-baoquan").style.display = "none"
        document.querySelector(".house6 .product-content-right-bottom-content-chitiet").style.display = "block"
    })
}
const butTon6=document.querySelector(".house6 .product-content-right-bottom-top")
if(butTon6){
    butTon6.addEventListener("click", function(){
        document.querySelector(".house6 .product-content-right-bottom-content-big").classList.toggle("activeB")
    })
    
}
// 77
const baoquan7=document.querySelector(".house7 .baoquan")
const chitiet7=document.querySelector(".house7 .chitiet")
if(baoquan7){
    baoquan7.addEventListener("click",function(){
        document.querySelector(".house7 .product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".house7 .product-content-right-bottom-content-baoquan").style.display = "block"
    })
}
if(chitiet7){
    chitiet7.addEventListener("click",function(){
        document.querySelector(".house7 .product-content-right-bottom-content-baoquan").style.display = "none"
        document.querySelector(".house7 .product-content-right-bottom-content-chitiet").style.display = "block"
    })
}
const butTon7=document.querySelector(".house7 .product-content-right-bottom-top")
if(butTon7){
    butTon7.addEventListener("click", function(){
        document.querySelector(".house7 .product-content-right-bottom-content-big").classList.toggle("activeB")
    })
    
}
// 88
const baoquan8=document.querySelector(".house8 .baoquan")
const chitiet8=document.querySelector(".house8 .chitiet")
if(baoquan8){
    baoquan8.addEventListener("click",function(){
        document.querySelector(".house8 .product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".house8 .product-content-right-bottom-content-baoquan").style.display = "block"
    })
}
if(chitiet8){
    chitiet8.addEventListener("click",function(){
        document.querySelector(".house8 .product-content-right-bottom-content-baoquan").style.display = "none"
        document.querySelector(".house8 .product-content-right-bottom-content-chitiet").style.display = "block"
    })
}
const butTon8=document.querySelector(".house8 .product-content-right-bottom-top")
if(butTon8){
    butTon8.addEventListener("click", function(){
        document.querySelector(".house8 .product-content-right-bottom-content-big").classList.toggle("activeB")
    })
    
}
// 