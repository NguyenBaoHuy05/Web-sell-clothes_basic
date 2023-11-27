const nut1=document.querySelector(".nut1")
const nut2=document.querySelector(".nut2")
const nut3=document.querySelector(".nut3")
if(nut1){
    nut1.addEventListener("click",function(){
        document.querySelector(".s1").style.display = "block"
        document.querySelector(".s2").style.display = "none"
        document.querySelector(".s3").style.display = "none"
    })
}
if(nut2){
    nut2.addEventListener("click",function(){
        document.querySelector(".s1").style.display = "none"
        document.querySelector(".s2").style.display = "block"
        document.querySelector(".s3").style.display = "none"
    })
}
if(nut3){
    nut3.addEventListener("click",function(){
        document.querySelector(".s1").style.display = "none"
        document.querySelector(".s2").style.display = "none"
        document.querySelector(".s3").style.display = "block"
    })
}
const tien=document.querySelector(".chuyen1")
const toan=document.querySelector(".modal")
tien.addEventListener("click" , function(){
    toan.classList.add("open")
})
const thoat=document.querySelector(".chuyen11")
thoat.addEventListener("click" , function(){
    toan.classList.remove("open")
})
