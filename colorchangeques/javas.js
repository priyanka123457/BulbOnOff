 var5 = document.getElementById('button')
var5.addEventListener('click',function(){
    var1 = document.getElementById('box1')
    var2 = document.getElementById('box2')
    var3 = document.getElementById('box3')

    var color1 = window.getComputedStyle(box1).backgroundColor;
    var color2 = window.getComputedStyle(box2).backgroundColor;
    var color3 = window.getComputedStyle(box3).backgroundColor;

    let text1 = var1.textContent;
    let text2 = var2.textContent;
    let text3 = var3.textContent;

    var1.style.backgroundColor = color2
    var2.style.backgroundColor = color3
    var3.style.backgroundColor = color1

    var1.textContent = text2
    var2.textContent = text3
    var3.textContent = text1





})