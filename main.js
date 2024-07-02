
let bonusResgatado = false;

function resgatar() {

    bonusResgatado = true;


    window.alert("Você ganhou 25% de desconto!");

   
    const comprarLink = document.getElementById('comprar');
    comprarLink.href = "../public/planos.html";
}


function comprar(event) {
   
    if (bonusResgatado !== true) {
    
        window.alert("Por favor, resgate seu desconto primeiro.");
    } else {
      
        
    }
}
