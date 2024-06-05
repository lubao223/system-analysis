document.addEventListener("DOMContentLoaded", () => {
    const course = [
        "日治期的臺日經典文學", "攝影藝術", "空間美學", "運動的藝術與實踐", "音樂與人生", "法律素養", "性別與教育", "環境與經濟", "水資源概論", 
        "樂活人生", "氣象與生活", "生物科技的應用", "數學與生活", "太陽能初探", "全球化與城鄉發展", "實用情境日文", "休閒地理", "14~17世紀歐洲文明史", 
        "英語口語表達技巧", "實用情境韓文", "臺灣主權地位的國際觀", "多媒體數位學習", "大眾傳播與國際關係", "流行音樂創作", "東亞文化導論", "中西文化比較", 
        "臺灣歷史與文化", "現代政治思潮", "性別與傳播", "大眾傳播與文化", "媒介與社會", "流行文化研究", "社會學", "歷史人物研究", "心理學", "家庭與婚姻", 
        "青少年心理學", "社會心理學", "行為科學", "教育心理學", "人格心理學", "社會科學研究方法", "犯罪學", "心理學研究方法", "婚姻與家庭輔導", 
        "教育心理學應用", "兒童發展心理學", "家庭生活教育", "人際關係與社交能力", "人文地理學", "政治地理學", "經濟地理學", "社會地理學", "自然地理學", 
        "地理學概論", "地圖學", "生物學", "化學", "地球科學", "地質學", "氣象學", "天文學", "水文學", "地理資訊系統", "海洋學", "自然地理學概論", 
        "地理資訊系統應用", "地理教學實務", "地理學教學法", "社會學概論", "社會學理論", "社會學研究方法", "社會學應用", "社會問題與社會政策", 
        "家庭與社會", "犯罪學概論", "人口學", "社會學與經濟", "社會學與教育", "英文寫作", "英文演講", "英文寫作與修辭學", "英文文學史", "英文修辭學", 
        "英文散文", "英文詩歌", "英文戲劇", "英文小說", "英文文學理論", "英文寫作實務", "英文文學專題研究", "英文文學批評方法", "中文寫作", "中文詞彙學", 
        "中文修辭學", "中文語音學", "中文語法學", "中文古典文學", "中文古典詩詞", "中文古典小說", "中文古典戲劇", "中文古典文學專題研究", "現代中文文學", 
        "現代中文詩歌", "現代中文小說", "現代中文戲劇", "現代中文散文", "現代中文文學專題研究"
    ];

    const courseContainer = document.querySelector(".course");
    let point = document.querySelector(".ncost").textContent;
    let choosed = [];

    function renderCourses() {
        courseContainer.innerHTML = "";
        course.forEach((courses) => {
            courseContainer.insertAdjacentHTML("beforeend", `
                <div class="a">
                    <div class="aname">${courses}</div>
                    <input type="number" class="anumber" width="40px">
                    <button class="abtn">競標</button>
                </div>
            `);
        });
    }

    function bidOnClick(event) {
        const target = event.target;
        if (target.classList.contains("abtn")) {
            const parentDiv = target.parentNode;
            if (parentDiv) {
                const inputNumber = parentDiv.querySelector('.anumber').value;
                const inputcourse = parentDiv.querySelector('.aname').textContent;
                if (inputNumber <= 0) {
                    alert("請選擇正值");
                } else {
                    if (inputNumber <= Number(point)) {
                        const result = confirm(`確定花費${inputNumber} 選擇 ${inputcourse}?`);
                        if(result){
                        let decrease = Number(inputNumber);
                        alert(`競標成功 你花了${inputNumber}點 競標了${inputcourse} 還剩下${point - decrease}點`);
                        parentDiv.querySelector('.anumber').value = "";
                        point -= decrease; 
                        document.querySelector(".ncost").textContent = point; 
                        choosed.push([inputNumber, inputcourse]);
                        const index = course.indexOf(inputcourse);
                        if (index !== -1) {
                            course.splice(index, 1);
                        }
                        renderCourses();
                        update(choosed.length)
                    }}
                    else {
                        alert("餘額不足");
                        parentDiv.querySelector('.anumber').value = "";
                    }
                }
            }
        }
    }


    renderCourses();


    const buttonsContainer = document.querySelector(".course");
    buttonsContainer.addEventListener("click", bidOnClick);

   
    const profileBtn = document.querySelector(".profile");
    profileBtn.addEventListener("click", () => {
        courseContainer.innerHTML = "";
        choosed.forEach((i)=>{
                courseContainer.insertAdjacentHTML("beforeend", `
                    <div class="a">
                        <div class="aname">${i[1]}</div>
                        <div>${i[0]}</div>
                    </div>
                `);

        })
        
    });

    
    const head_tBtn = document.querySelector(".head_t");
    head_tBtn.addEventListener("click", () => {
        renderCourses();
    });

    const number_not = document.querySelector(".number-notifications");

    function update(x) {
        if (x > 0) {
            number_not.style.visibility = "visible";
            number_not.innerHTML = x;
        } else {
            number_not.style.visibility = "hidden";
        }
    }

    const searchInput = document.getElementById("searchInput");
    const sbtn = document.getElementById("searchBtn");
    let newCourseList = [];

    searchInput.addEventListener("keypress",(value)=>{
        if(value.key == 'Enter'){
            sbtn.click()
        }
    })

    sbtn.addEventListener("click", function() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    

    if (searchTerm !== "") {
        searchInput.value = ''
        newCourseList = [];
        course.forEach((courseName) => {
            if (courseName.toLowerCase().includes(searchTerm)) {
                newCourseList.push(courseName);
            }
        });

        renderCourses2();
    }else{
        renderCourses()
    }
    });

    function renderCourses2() {
    courseContainer.innerHTML = "";
    newCourseList.forEach((newCourseList) => {
        courseContainer.insertAdjacentHTML("beforeend", `
        <div class="a">
        <div class="aname">${newCourseList}</div>
        <input type="number" class="anumber" width="40px">
        <button class="abtn">競標</button>
    </div>
        `);
    });
}
});

