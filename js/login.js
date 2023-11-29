
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
            window.location.assign("http://127.0.0.1:5500/doanweb/html/login.html")
        }
            else {
            alert("THÔNG TIN CHƯA ĐẦY ĐỦ")
        }
}
var login=function(){
    let qua=document.getElementById("username").value
    let qua1=document.getElementById("password").value
    if (qua==localStorage.tkt && qua1==localStorage.mkt){
        window.location.assign("http://127.0.0.1:5500/doanweb/html/index.html")

    }
   else{
        alert("Sai tên tài khoản hoặc mật khẩu")
    }
}
document.querySelector("#ten").innerHTML=localStorage.tkt
document.querySelector("#sdt").innerHTML=localStorage.sdtt
document.querySelector("#email1").innerHTML=localStorage.emt
