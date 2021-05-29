function calcular(){
    var vlr1 = parseInt(document.getElementById('primeiraNota').value);

    var vlr2 = parseInt(document.getElementById('segundaNota').value);

    var vlr3 = parseInt(document.getElementById('terceiraNota').value);

    var total = vlr1 + vlr2 + vlr3; 
    
    document.getElementById('resultado').value = total / 3;
    
    }