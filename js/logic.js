document.getElementById('dugme_igra').addEventListener('click', function () {
    var div1 = document.getElementById('menu');
    var div2 = document.getElementById('igra');

    div1.classList.remove('d-flex');
    div1.classList.add('d-none');

    div2.classList.remove('d-none');
    div2.classList.add('d-flex');

    igraj();
});

document.getElementById('dugme_uputstvo').addEventListener('click', function () {
    var div1 = document.getElementById('menu');
    var div2 = document.getElementById('uputstvo');

    div1.classList.remove('d-flex');
    div1.classList.add('d-none');

    div2.classList.remove('d-none');
    div2.classList.add('d-flex');
});

document.getElementById('dugme_projekat').addEventListener('click', function () {
    var div1 = document.getElementById('menu');
    var div2 = document.getElementById('projekat');

    div1.classList.remove('d-flex');
    div1.classList.add('d-none');

    div2.classList.remove('d-none');
    div2.classList.add('d-flex');
});


document.getElementById('nazad_uputa').addEventListener('click', function () {
    var div1 = document.getElementById('uputstvo');
    var div2 = document.getElementById('menu');

    div1.classList.remove('d-flex');
    div1.classList.add('d-none');

    div2.classList.remove('d-none');
    div2.classList.add('d-flex');
});

document.getElementById('nazad_projekat').addEventListener('click', function () {
    var div1 = document.getElementById('projekat');
    var div2 = document.getElementById('menu');

    div1.classList.remove('d-flex');
    div1.classList.add('d-none');

    div2.classList.remove('d-none');
    div2.classList.add('d-flex');
});

document.getElementById('nazad_igrica').addEventListener('click', function () {
    var div1 = document.getElementById('igra');
    var div2 = document.getElementById('menu');

    div1.classList.remove('d-flex');
    div1.classList.add('d-none');

    div2.classList.remove('d-none');
    div2.classList.add('d-flex');
    clearInterval(timer);
});

function myFunction() {
    if (confirm("Da li stvarno želite prestati igrati?")) {
      if(trenutni_broj_pitanja === 1) {
        alert("Igra je gotova! Niste ništa osvojili.");
      }
      else {
        alert("Igra je gotova! Osvojili ste " + novac[trenutni_broj_pitanja-1] + "KM."); 
      }
      var div1 = document.getElementById('igra');
      var div2 = document.getElementById('menu');
  
      div1.classList.remove('d-flex');
      div1.classList.add('d-none');
  
      div2.classList.remove('d-none');
      div2.classList.add('d-flex');
      clearInterval(timer);
    }
  };