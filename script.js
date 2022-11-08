let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

function excuser(who, what, when){
    numwho = Math.floor(Math.random() * who.length);
    numwhat = Math.floor(Math.random() * what.length);
    numwhen = Math.floor(Math.random() * when.length);
    return who[numwho] + " " + what[numwhat] + " " + "my homework" + " " + when[numwhen];
}
function onLoad(){
    var excusa = document.getElementById('excuse');
    excusa.innerHTML = excuser(who, what, when);
}
window.onload = onLoad;
