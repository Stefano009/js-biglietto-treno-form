// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato 0.21cent * km //40% minori //60% over 65
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.
var ticketGenerator = document.getElementById('ticketGenerator');
var ticketAbort = document.getElementById('ticketAbort');
ticketGenerator.addEventListener('click',
    function(){
        document.getElementById('none').style.transition = "all 0.5s ease-in-out" ;
        document.getElementById('none').style.transform = "scaleY(1)";
        var name = document.getElementById('name').value;
        var km = document.getElementById('km').value;
        console.log(km);
        // carrozze che vanno da 1 a 10
        var carNumber = Math.floor(Math.random() * 10 + 1);
        // cp Code che va da 90000 a 100000 escluso
        var min = 90000;
        var max = 100000;
        var cpCode = Math.floor(Math.random() * (max - min) + min);
        // ageRange
        var ageRange = document.getElementById('ageRange').value;
        if (ageRange == 'minor') {
            ageRange = 'Sconto minorenne';
        } else if ( ageRange == 'major') {
            ageRange = 'Biglietto Standard';
        } else if ( ageRange == 'over65') {
            ageRange = 'Sconto Over 65';
        } else {
            alert('premi annulla e inserisci il tuo range d\'età ');
        }
        // price calculation
        var price = km * 0.21;
        console.log(km);
        console.log(price);
        if ( ageRange == 'Sconto minorenne')
            price = price * 0.6;
        else if (ageRange == 'Sconto Over 65')
            price = price * 0.4;
        document.getElementById('passengerName').innerHTML = '<p>' + name + '</p>';
        document.getElementById('offer').innerHTML = '<p>' + ageRange + '</p>';
        document.getElementById('carNumber').innerHTML = '<p>' + carNumber + '</p>';
        document.getElementById('cpCode').innerHTML = '<p>' + cpCode + '</p>';
        document.getElementById('ticketPrice').innerHTML = '<p>' + price.toFixed(2) + '€' + '</p>';
        
        }
)
ticketAbort.addEventListener('click',
    function(){
        document.getElementById('name').value = '';
        document.getElementById('km').value = '';
        document.getElementById('ageRange').value = '';
        document.getElementById('passengerName').innerHTML = ''
        document.getElementById('offer').innerHTML = '';
        document.getElementById('carNumber').innerHTML = '';
        document.getElementById('cpCode').innerHTML = '';
        document.getElementById('ticketPrice').innerHTML = '';
        document.getElementById('none').style.transition ="all 0.5s ease-in-out";
        document.getElementById('none').style.transform = "scaleY(0)";
        }
)

