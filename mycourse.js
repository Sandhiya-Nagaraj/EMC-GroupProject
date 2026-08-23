var btn1 = document.getElementById("btn_1")
var btn2 = document.getElementById("btn_2")
var btn3 = document.getElementById("btn_3")
var btn4 = document.getElementById("btn_4")
var containerCourse = document.getElementById("container_courses")
var containerVideoContent = document.getElementById("container_video_content")

btn1.addEventListener("click",()=>{
    containerCourse.style.display = "none"
    containerVideoContent.style.display = "block"
})

btn2.addEventListener("click",()=>{
    containerCourse.style.display = "none"
    containerVideoContent.style.display = "block"
})

btn3.addEventListener("click",()=>{
    containerCourse.style.display = "none"
    containerVideoContent.style.display = "block"
})

btn4.addEventListener("click",()=>{
    containerCourse.style.display = "none"
    containerVideoContent.style.display = "block"
})

var courseContentBtn1 = document.getElementById("course_content_btn1")
var courseContentBtn2 = document.getElementById("course_content_btn2")
var containerContent1 = document.getElementById("content1")
var containerContent2 = document.getElementById("content2")

courseContentBtn1.addEventListener("click", () => {
    if (containerContent1.style.display === "block") {
        containerContent1.style.display = "none";
    } else {
        containerContent1.style.display = "block";
    }
});

courseContentBtn2.addEventListener("click", () => {
    if (containerContent2.style.display === "block") {
        containerContent2.style.display = "none";
    } else {
        containerContent2.style.display = "block";
    }
});