
let index = 0;
const colors = ['salmon', 'green', 'blue', 'purple', 'yellow', 'white', 'blue', 'red'];

function myFunction1() {
  
  /* метод getElementById ()*/
  var el=document.getElementById("element1");
 
  index = index >= colors.length - 1 ? 0 : index + 1;
  el.style.backgroundColor = colors[index];
  el.style.color = colors[index+2];
}

function myFunction2() {

    /* метод querySelector ()*/
  var element = document.querySelector("#element2");

  index = index >= colors.length - 1 ? 0 : index + 1;
  element.style.backgroundColor = colors[index+3];
  element.style.color = colors[index-2];
}
 
/* функція, яка збільшує зображення*/
function increaseImg(){

    let image = document.getElementById("img");
    if(image.height >= 800){
        alert("Fully zoomed in!");
    } else{
    image.height += 30;
    }
}

/* функція, яка зменшує зображення*/
function reduceImg(){

    let image = document.getElementById("img");
    if(image.height <= 50){
        alert("That’s as small as it gets.");
    } else{
    image.height -= 30;
    }
}

function deleteImg(){
  /* налаштували елемент з ідентифікатором id="img" використовуючи none, так щоб не відображався*/
   let image = document.getElementById("img");
   image.style.display = 'none';
    
}

function addImg() {
   
   let image = document.getElementById("img");
   image.style.display = 'block';
    
}