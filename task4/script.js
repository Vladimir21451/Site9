//alert(window.flag.value);
function newStr(evt){
    let str =prompt('Введите текст для замены');
    el.textContent = str;
}
/*alert(window.flag.value);
if(window.flag.value == false){
   window.flag.value = true;
}
else{
    alert('nen');
    evt.preventDefault();
}*/
//evt.preventDefault();
let el= document.getElementById('idstr');
evt.preventDefault();
