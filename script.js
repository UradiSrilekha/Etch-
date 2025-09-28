var row = document.getElementById('rowNo');
var col = document.getElementById('colNo');
var display = document.getElementById('display');
const submit = document.getElementById('Ok');
submit.addEventListener(
    "click" ,()=> createGrid(parseInt(row.value),parseInt(col.value))
)
function createGrid(row,col){
    var res = "";
    var div = document.getElementById('display');
    for(var i=0;i<row;i++){
        res += `<div class="row">`;
        for(var j=0;j<col;j++){
            res += `<div class="column" id="column"></div>`;
        }
        res += "</div>";
    }
    display.innerHTML = res;
    addListeners();
}
function addListeners(){
    var columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        column.addEventListener("mouseover", changeColor);
        column.addEventListener("click", eraseColor);
    });
}

function changeColor(){
    this.style.backgroundColor = 'black';
}

function eraseColor(){
    this.style.backgroundColor = 'white';
}

var reset = document.getElementById('reset');
reset.addEventListener(
    "click",()=> createGrid(parseInt(row.value),parseInt(col.value))
)
