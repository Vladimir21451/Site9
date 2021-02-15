const submitbtnEl = document.querySelector('#submitBtn');
//submitbtnEl.addEventListener('click', submitBtn);

function submitBtn(evt){
    //let str= document.querySelector('#p1');
    //alert('here');
    let lb = document.querySelector('#lbl');
    //alert(evt.lb.value);
    let s =document.getElementById('duplicateField');
    s.textContent = lb.value;
    console.log(s.textContent);
    lb.setAttribute('placeholder', '');
    lb.value="";
    evt.preventDefault();
     

}                   
submitbtnEl.addEventListener('click', submitBtn(evt));
