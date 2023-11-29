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
var chose=["mi","thun","crop","jean","short","rong","bata","got","da","tai","nhan","chuye","kem","hoa","mat"];
var timkiem1=function(){
    const timkiem=document.getElementById("timkiem").value
    for (let i=0;i<15;i++){
        let a=timkiem.indexOf(chose[i])
        if(a!=-1){     
            kqr=0     
            switch(i){
                case 0:
                    window.location.assign("http://127.0.0.1:5500/doanweb/html/category.html")
                    break
                case 1:
                    window.location.assign("http://127.0.0.1:5500/doanweb/html/categoryaothun.html")
                    break
                case 2:
                    window.location.assign("http://127.0.0.1:5500/doanweb/html/categoryaocroptop.html")
                    break
                case 3:
                    window.location.assign("http://127.0.0.1:5500/doanweb/html/categoryquanjean.html")
                    break
                case 4:
                    window.location.assign("http://127.0.0.1:5500/doanweb/html/categoryquanshort.html")
                    break
                case 5:
                    window.location.assign("http://127.0.0.1:5500/doanweb/html/categoryquanongrong.html")
                    break
                case 6:
                    window.location.assign("http://127.0.0.1:5500/doanweb/html/categorygiaybata.html")
                    break
                case 7:
                    window.location.assign("http://127.0.0.1:5500/doanweb/html/categorygiaycaogot.html")
                    break
                case 8:
                    window.location.assign("http://127.0.0.1:5500/doanweb/html/categorygiayluoi.html")
                    break
                case 9:
                    window.location.assign("http://127.0.0.1:5500/doanweb/html/categorybongtai.html")
                    break
                case 10:
                    window.location.assign("http://127.0.0.1:5500/doanweb/html/categorynhan.html")
                    break
                case 11:
                    window.location.assign("http://127.0.0.1:5500/doanweb/html/categorydaychuyen.html")
                    break
                case 12:
                    window.location.assign("http://127.0.0.1:5500/doanweb/html/categorykemduong.html")
                    break
                case 13:
                    window.location.assign("http://127.0.0.1:5500/doanweb/html/categorynuochoa.html")
                    break
                case 14:
                    window.location.assign("http://127.0.0.1:5500/doanweb/html/categorysuaruamat.html")
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
//     window.location.assign("http://127.0.0.1:5500/doanweb/html/category.html")
//  }
}
if (localStorage.tkt=="hcmue"){
    document.querySelector("#adminn").innerHTML='<a href="../admin/admin.html"><img src="../img/ngoi-sao-gif.gif" alt="" width="100px" height="100px" style="position: absolute;right:-10px;top: 0px;"></a>'


}
var star=document.querySelector("#star")
var n=0
star.addEventListener("click",function(){
    if (n==0){
        document.querySelector(".work").classList.add("change")
        n++
    }
    else {
        document.querySelector(".work").classList.remove("change")
        n=0
    }
})
