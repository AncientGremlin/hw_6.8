let all_code=document.querySelectorAll(".code_div");
/*
вставляем "копировать текст" и функцию копирования
а также для всех блоков code автоматически проставим число строк
прямо как из анекдота про программистов: автоматизируем вместо того, чтобы потратить 5 минут на ручное написание
 x'D */
all_code.forEach((e) => {
    //вставляем span
    e.insertAdjacentHTML('afterbegin', '<span class="copy">Скопировать код</span><br><br>');
    //и вешаем на него обработчик
    e.querySelector(".copy").addEventListener("click", function() {
        navigator.clipboard.writeText(e.querySelector("code").innerText);
        console.log("Следующий текст скопирован в буфер обмена: ", e.querySelector("code").innerText )
    });
    //идем дальше.
    e_code=e.querySelector("code");
    let text_from_code=e_code.innerText;
    //считаем количество переносов на новую строку
    let lines=text_from_code.match(/(:?\n)/g);
    let l=0;
    if(lines!=null)l=lines.length;
    let pre_elem=e_code.parentElement;
    //на pre у нас висит flex row, чтобы span и code стояли рядом
    //формируем этот самый span
    let cute_string="<span>";
    for(let i=0;i<=l;i++)cute_string=cute_string+(i+1)+".<br>";
    cute_string=cute_string+"</span>";
    pre_elem.insertAdjacentHTML('afterbegin', cute_string);
  });

//и только теперь мы фигачим ДЗ x'D
document.querySelector("#consoleLog").addEventListener("click", function() {
    alert("Данный метод выводит некоторое (заданное в параметрах при вызове метода) сообщение в веб-консоль.");
});
document.querySelector("#alert").addEventListener("click", function() {
    alert("Вызывает уродливое окошко с сообщением и кнопочкой ОК. Результат его работы Вы в данный момент и наблюдаете :) ");
});
document.querySelector("#prompt").addEventListener("click", function() {
    alert("Вызывает уродливое окошко с сообщением, текстовым полем и кнопочками ОК и Отмена. Сам по себе не обрабатывает результат."+
        "Для детальной информации смотреть примеры использования.");
    
});

//а ещё надо повесить обработчик на панель навигации, чтобы скрывать навигацию по странице
document.querySelector("nav").addEventListener("mouseover", function() {
    document.querySelector("#task2_nav").setAttribute('style', 'display:none;');    
});
document.querySelector("nav").addEventListener("mouseout", function() {
    document.querySelector("#task2_nav").setAttribute('style', 'display:block;');    
});
