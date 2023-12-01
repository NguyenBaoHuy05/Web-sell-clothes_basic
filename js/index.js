// ----------------------------Thay đổi header qua con trỏ cuộn thông qua màn hình window---------------------------
const headers=document.querySelector("header")
const nut=document.querySelector(".dot-container")
window.addEventListener("scroll",function(){
x = window.pageYOffset
if (x>0){
    headers.classList.add("sticky")
    nut.classList.remove("nut")
}
else{
    headers.classList.remove("sticky")
    nut.classList.add("nut")
}
})

// 


// --------------------------nút tròn ỏ home với ảnh--------------------

const imgPosition=document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer=document.querySelector(".aspect-ratio-169")
const dotItem =document.querySelectorAll(".dot")
let index=0;
let imgNumber=imgPosition.length
imgPosition.forEach(function(image,index){
image.style.left =index*100+"%"
dotItem[index].addEventListener("click",function(){
slider(index)
})
})
function imgSlider(){
index++;
if (index>=imgNumber){
    index=0
}
slider(index)

}
function slider (index){
imgContainer.style.left="-"+index*100+"%"
const dotActive=document.querySelector(".active")
dotActive.classList.remove("active")
dotItem[index].classList.add("active")
}
setInterval(imgSlider,5000)
// ----------------------------------------Menu-SLIDEBAR-CATEGORY--------
const itemsliderbar = document.querySelectorAll(".category-left-li")
itemsliderbar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
})
// 
// 
// tìm kiếm
var kqr=-1
var chose=["áo sơ mi ao so mi","thun aothun","top crop","jean xanh","short sort ngắn ngan","ong rong baggy dai","bata vải vai","cao got","da bóng banh soocer sports","tai","nhan","chuyen day daychuyen","kemduong kem","hoa","mat"];
var timkiem1=function(){
    const timkiem=document.getElementById("timkiem").value
    for (let i=0;i<15;i++){
        let a=chose[i].indexOf(timkiem)
        if(a!=-1){     
            kqr=0     
            switch(i){
                case 0:
                    window.location.assign("category.html")
                    break
                case 1:
                    window.location.assign("categoryaothun.html")
                    break
                case 2:
                    window.location.assign("categoryaocroptop.html")
                    break
                case 3:
                    window.location.assign("categoryquanjean.html")
                    break
                case 4:
                    window.location.assign("categoryquanshort.html")
                    break
                case 5:
                    window.location.assign("categoryquanongrong.html")
                    break
                case 6:
                    window.location.assign("categorygiaybata.html")
                    break
                case 7:
                    window.location.assign("categorygiaycaogot.html")
                    break
                case 8:
                    window.location.assign("categorygiayluoi.html")
                    break
                case 9:
                    window.location.assign("categorybongtai.html")
                    break
                case 10:
                    window.location.assign("categorynhan.html")
                    break
                case 11:
                    window.location.assign("categorydaychuyen.html")
                    break
                case 12:
                    window.location.assign("categorykemduong.html")
                    break
                case 13:
                    window.location.assign("categorynuochoa.html")
                    break
                case 14:
                    window.location.assign("categorysuaruamat.html")
                    break
                default:
                    alert("Không tìm thấy")                           
            }
            break
        }
    }
    if (kqr===-1){
        alert("Không tìm thấy")
    }
// let a=timkiem.indexOf('aosomi')
// if(a!=-1){
//     window.location.assign("category.html")
//  }
}
if (localStorage.tkt=="hcmue" && localStorage.mkt=="123"){
    document.querySelector("#adminn").innerHTML='<a href="../admin/admin.html"><img src="../img/ngoi-sao-gif.gif" alt="" width="100px" height="100px" style="position: absolute;right:-10px;top: 0px;"></a>'


}
var color=document.querySelector(".color")
var star=document.querySelector("#star")
var n=0
star.addEventListener("click",function(){
    if (n==0){
        color.classList.add("mo")
        console.log(n)
        n++
    }
    else {
        color.classList.remove("mo")
        n=0
    }
})
var outer=document.querySelector(".work")
let colorBack = document.querySelector(".colorch");
colorBack.value = "#ffffff"
colorBack.addEventListener("change", function(){
  outer.style.background = this.value;
});