let input="";
function add(value){
    input+=value;
    document.querySelector('input').value=input;

}
document.querySelector('.jsClear').onclick=function(){

    input="";
    document.querySelector('input').value=input;
}
document.querySelector('.jsDelete').onclick=function(){

    input=input.slice(0,input.length-1);
    document.querySelector('input').value=input;
}
document.querySelector('.jsEquals').onclick=function(){

    input=eval(input);
   
    document.querySelector('input').value=input;

}


