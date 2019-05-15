
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    
    function catchData() {
        
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();

            request.open("GET", "js/current.json");
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
            
            // ???
            request.addEventListener('readystatechange', function() {
                if (request.readyState === 4 && request.status == 200) {
                    resolve(request.response);
                } else {
                    reject();
                }
            });
        });

    } // END catchData

catchData()
        .then( answer => {
            let data = JSON.parse(answer);
            inputUsd.value = inputRub.value / data.usd;
        })
        .catch( () => inputUsd.value = "Что-то пошло не так!")
});