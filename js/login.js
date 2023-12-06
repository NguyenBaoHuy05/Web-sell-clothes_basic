
var signup=function(){
       var tk=document.querySelector("#username").value
       var mk=document.querySelector("#password").value
       var em=document.querySelector("#email").value
       var sdt=document.querySelector("#phone").value
       localStorage.tkt=tk
        localStorage.mkt=mk
        localStorage.emt=em
        localStorage.sdtt=sdt
        if(localStorage.tkt!="" && localStorage.mkt!="" && localStorage.emt!="" && localStorage.sdtt!=""){
                      
            window.location.assign("login.html")
        
        }
            else {
            alert("THÔNG TIN CHƯA ĐẦY ĐỦ")
        }
}
var login=function(){
    let qua=document.getElementById("username").value
    let qua1=document.getElementById("password").value
    if (qua==localStorage.tkt && qua1==localStorage.mkt || (qua=="hcmue" && qua1=="123")){
        window.location.assign("../admin/admin.html")
    }
   else{
        alert("Sai tên tài khoản hoặc mật khẩu")
    }
}
document.querySelector("#ten").innerText=localStorage.tkt
document.querySelector("#sdt").innerText=localStorage.sdtt
document.querySelector("#email1").innerText=localStorage.emt
