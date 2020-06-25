// attendo il caricamnto del documento
$(document).ready(
  function (){
    // al click sul quadrato....
    $('.col').click(function(){
      // ...definisco this nella variabile clickedDiv....
      var clickedDiv = this;
      // ....faccio partire la chiamata ajax...alla url dei numeri casuali da 1 a ....
      $.ajax({
        // ...alla url dei numeri casuali da 1 a 9 e prendo i dati.
        url:'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        // In caso di successo, parte la funzione che prende i dati e...
        success: function (data){
          var numero = data.response;
          var risultato = '';
          // ...se il numero casuale è minore o uguale a 5 il background sarà giallo...
          if (numero <= 5) {
            risultato = numero;
            $(clickedDiv).text(numero);
            $(clickedDiv).addClass('yellow')
          } //...altrimenti se è maggiore di 5 sarà verde.
            else if (numero > 5) {
              risultato = numero;
              $(clickedDiv).text(numero);
              $(clickedDiv).addClass('green')
            }
        },
        // In caso di errore darà un messaggio alert di errore.
        error: function(){
          alert("errore!");
        }
      })
    })
  }
);
