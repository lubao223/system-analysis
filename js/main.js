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
            const errorMsg = document.querySelector(".error-modal");
            errorMsg.classList.add("show");
            setTimeout(() => {
                errorMsg.classList.remove("show");
            }, 1000);
            
            pass.value = "";
    }})
    const forgot = document.querySelector(".btn_forgot");
    forgot.addEventListener("click", () => {
        const modal = document.getElementById("forgotPasswordModal");
        modal.style.display = "block";
    });

    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", () => {
        const modal = document.getElementById("forgotPasswordModal");
        modal.style.display = "none";
    });

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
    document.querySelector(".table").style.background = `linear-gradient(${angle}deg, #afbedb, #6f9eef)`


    
    setTimeout(function() {
        const raindrops = document.querySelectorAll(".raindrop");
        raindrops.forEach(function(raindrop) {
            raindrop.style.visibility = "visible";
        });
    }, 5000); 

});



document.addEventListener("DOMContentLoaded", function() {
        
        function randomPosition() {
            return Math.random() * 100; 
        }
    
        function randomDelay() {
            return Math.random() * 5; 
        }
    
  
        function createRaindrop() {
            const raindrop = document.createElement("div");
            raindrop.classList.add("raindrop");
            raindrop.style.left = randomPosition() + "%";
            raindrop.style.animationDelay = randomDelay() + "s";
            document.querySelector(".table").appendChild(raindrop);
        }
    
        
        const initialRaindrops = 40; 
        for (let i = 0; i < initialRaindrops; i++) {
        createRaindrop();
    }  
    
    });
    