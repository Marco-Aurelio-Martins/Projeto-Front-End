let count = 1;
let i = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextimg();
}, 5000)

function nextimg(){
    if(i<4){
        count++;
        i++;
    }
    else{
        count--;
        i++;
        if(i == 8)
        {
            i = 0;
        }
        
        
    }

    document.getElementById("radio"+count).checked = true
}   

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 500)
})

function busca() {
    var input = document.getElementById("input");
    var divgrande = document.getElementById("busca");
    var lupa = document.getElementById("lupa");
    var resultadoPesquisa = document.getElementById('resultadoPesquisa');

    if (input.style.width === "200px") {
        input.style.width = "0px";
        divgrande.style.borderRadius = "25px";
        lupa.style.transform = 'rotate(0deg)';
        resultadoPesquisa.style.height = "0px";
    } else {
        divgrande.style.borderRadius = "25px";
        input.style.width = "200px";
        lupa.style.transform = 'rotate(-360deg)';
        resultadoPesquisa.style.height = "auto";
    }
}


var names= {
    'Minecraft': 'https://marco-aurelio-martins.github.io/Projeto-Front-End/html/minecraft.html',
    'Diablo IV': 'https://marco-aurelio-martins.github.io/Projeto-Front-End/html/diablo.html',
    'Far Cry 6': 'https://marco-aurelio-martins.github.io/Projeto-Final-End/html/farcry6.html',
}

function checkEnter(event) {
    if (event.keyCode === 13) { 
        pesquisa();
    }
}

function pesquisa() {
    var input = document.getElementById('input').value.toUpperCase(); 
    var resultadoPesquisa = document.getElementById('resultadoPesquisa');
    resultadoPesquisa.innerHTML = ''; 

    if (input.trim() === '') {
        return;
    }

    for (var key in names) { 
        if (key.toUpperCase().includes(input)) { 
            var li = document.createElement('li'); 
            var a = document.createElement('a');
            a.href = names[key];
            a.textContent = key;
            li.appendChild(a);
            resultadoPesquisa.appendChild(li); 
        }
    }   
} 


document.getElementById('input').addEventListener('input', pesquisa);