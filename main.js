var HomeworkArea = document.getElementById("HomeworkArea");
var homeworkToggle = document.getElementById("IsHomework");
var IsHomework = true;
var homeworkInput = document.getElementById('HomeworkInput');

var englishRadio = document.getElementById("englishLang");
var greekRadio = document.getElementById("greekLang");

homeworkToggle.addEventListener("change", function (event) {
    IsHomework = event.target.checked;
});

let homework = [];
let other = [];

const asterisk = `<span style="color: #7360f2;">*</span>`
const lessonsTitleGR = `<center>${asterisk}Μαθήματα:${asterisk}</center>`
const lessonsTitleEN = `<center>${asterisk}Lessons:${asterisk}</center>`

function addHomework() {
    if (IsHomework)
        homework.push(homeworkInput.value);
    else
        other.push(homeworkInput.value);
    RefreshHTML();
}
function clearHomework() {
    homework = [];
    other = [];
    
    RefreshHTML();
}

function RefreshHTML() {
    let val = englishRadio.checked ? lessonsTitleEN : lessonsTitleGR;
    HomeworkArea.innerHTML =
        `
            ${val}
            <ol class="HomeworkList">
            <li>&#8206;</li>
        `;
    if (homework.length == 0 && other.length == 0) return;
    for (var i = 0; i < homework.length; i++) {
        HomeworkArea.innerHTML +=
            `
                <li> ${i + 1}. ${homework[i]}</li>
            `
    }
    for (var i = 0; i < other.length; i++) {
        HomeworkArea.innerHTML +=
            `
                <li>* ${other[i]}</li>
            `
    }
    HomeworkArea.innerHTML +=
        `
            </οl>
        `
}

function CopyText() {

    // Copy the text inside the text field
    navigator.clipboard.writeText(HomeworkArea.innerText);
    console.log(HomeworkArea.innerText);
}
clearHomework();