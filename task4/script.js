const link=document.querySelector('#change_me');
document.querySelector('#change_me').addEventListener('click', 
  (event) => {
    event.preventDefault();
    let new_text=prompt('Введите новый текст для этой ссылки');
    if(new_text==null)alert("Вы ничего не ввели! Текст ссылки не меняем!");
    else 
        if (new_text=="")alert("Пусто? Так не пойдет. Текст ссылки не меняем!");
            else link.textContent=new_text;

})