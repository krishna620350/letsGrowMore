let objectArry = [];
let closearray = []
let k = 0;
let clickfunction = () => {
    let text = document.getElementById("text");
    if (text.value != '' && objectArry.indexOf(text.value) == -1) {
        objectArry.push(text.value);
    } else {
        alert("Either you not enter any todo or \ntodo is already added please check it");
    }
    let str = "";
    let todos = document.getElementById("todo");
    for (let i = 0; i < objectArry.length; i++){
        if (closearray.indexOf(objectArry[i]) != -1) {
            str += `<div><p id="textbelow${i}"><i class="fa-solid fa-check"></i><strike>${objectArry[i]}</strike></p><button onclick="closefunction(${i})"><i class="fa-solid fa-xmark"></i></button></div>`;
        } else {
            str += `<div><p id="textbelow${i}">${objectArry[i]}</p><button onclick="closefunction(${i})"><i class="fa-solid fa-xmark"></i></button></div>`;
        }
    }
    todos.innerHTML = str;
}
let closefunction = (i) => {
    let str = `textbelow${i}`;
    let close = document.getElementById(str);
    closearray.push(close.textContent);
    close.innerHTML = `<i class="fa-solid fa-check"></i><strike>${close.textContent}</strike>`;
};