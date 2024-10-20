
function calculate_reuse(speed,client) {
    
    let speed = document.getElementById('speed').value;
    let client = document.getElementById('client').value;
    let result = 0;
    

    result = speed / client;
    document.getElementById('result').value = result;

}