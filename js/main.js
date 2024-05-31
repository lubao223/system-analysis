document.addEventListener("DOMContentLoaded", function() {
    const login = document.querySelector(".btn_login");
    login.addEventListener("click",()=>{
        const acc = document.querySelector(".account .box");
        const pass = document.querySelector(".password .box");
        if(acc.value == "test001" && pass.value == "123" ){
            window.location.href = "choose.html"
        }else if(acc.value == "admin" && pass.value == "admin"){
            window.location.href = "admin.html"
        }
        else{
        alert("帳號或密碼錯誤");
        pass.value = "";}
    })
    const forgot = document.querySelector(".btn_forgot");
    forgot.addEventListener("click",()=>{
        alert("帳號是 test001 \n密碼是 123")
    })

    const passwordInput = document.querySelector(".password .box");
    passwordInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        login.click();
      }}
)});

document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX / window.innerWidth;
    const mouseY = event.clientY / window.innerHeight;
    const angle = mouseX * 360;
    document.querySelector(".table").style.background = `linear-gradient(${angle}deg, #afbedb, #6f9eef)`});



