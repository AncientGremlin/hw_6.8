//поехали
const label1=document.querySelector("#solve1");
const label2=document.querySelector("#solve2");
const dublicate1=document.querySelector("#duplicateField1");
const dublicate2=document.querySelector("#duplicateField2");
document.querySelector('#task5_button').addEventListener('click', 
  (event) => {
    event.preventDefault();
    console.log("Содержимое первого input: "+label1.value+"\n"+
        "Содержимое второго input: "+label2.value);
    label1.value="";
    label2.value="";
})
label1.addEventListener('keydown', 
(event) => {
    dublicate1.textContent=label1.value;
})
label1.addEventListener('keyup', 
(event) => {
    dublicate1.textContent=label1.value;
})
label2.oninput = function() {
    dublicate2.textContent=label2.value;
};