
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
// var username1=""
// function signup(e){
//     event.preventDefault();
//     var username = document.getElementById("username").value
//     var email = document.getElementById("email").value
//     var phone = document.getElementById("phone").value
//     var password = document.getElementById("password").value
//     var user={
//         username : username,
//         email : email,
//         phone : phone,
//         password : password,
//     }

//     // if(user.username!=localStorage.json){
//     json=JSON.stringify(user);
//     localStorage.setItem(username,json) || [];
//     // }
//     // else{
//     //     alert("TÀI KHOẢN ĐÃ TỒN TAI")
//     // }
//     window.location.assign("login.html")
//     console.log(localStorage.json)
// }

// function login(e){
//     event.preventDefault();
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     var user = localStorage.getItem(username);
//     var data =JSON.parse(user);
//     var username1=data.username
//     if (username=="" || password==""){
//         alert("VUI LÒNG NHẬP THÔNG TIN")
//     }
//     else{
//         if(username==data.username && password==data.password){
//             window.location.assign("index.html")
//         }
//         else if(username!==data.username || password!==data.password){
//             alert("NHẬP SAI TÀI KHOẢN HOẶC MẬT KHẨU")
//         }
//     }

// }
// var user = localStorage.getItem(username);
// var data =JSON.parse(user);
// document.querySelector("#ten").innerHTML=username1;
//     document.querySelector("#sdt").innerHTML=phone1;
//     document.querySelector("#email1").innerHTML=email1;

