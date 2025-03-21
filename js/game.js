const novac = [ 0, 100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 120000, 250000, 500000, 1000000];
var trenutni_broj_pitanja;
var dostupna_pitanja_easy;
var dostupna_pitanja_medium;
var dostupna_pitanja_hard;
var odabrano_pitanje;
let count;
const tajmer = document.getElementById("tajmer");
let timer;

const correctAudio = new Audio('./sounds/correct_answer.mp3');
const wrongAudio = new Audio('./sounds/wrong_answer.mp3');
const clappingAudio = new Audio('./sounds/clapping.mp3');

function pustiCorrectZvuk() {
    correctAudio.play();
};
    
function pustiWrongZvuk() {
    wrongAudio.play();
};
    
function pustiClappingZvuk() {
    clappingAudio.play();
};

function pokreniTimer() {
  timer = setInterval(function() {
    count--;
    tajmer.innerHTML = `${count}`;

    if (count === 0) {
      clearInterval(timer);
      tajmer.innerHTML = "0";
      krajIgre(1);
    }
  }, 1000);
};

function set() {
  trenutni_broj_pitanja = 1;
  dostupna_pitanja_easy = [...data_easy];
  dostupna_pitanja_medium = [...data_medium];
  dostupna_pitanja_hard = [...data_hard];
};

function izaberiRandomPitanje(slobodnaPitanja) {
  var randomIndexPitanja = Math.floor(Math.random() * slobodnaPitanja.length);
  var odabranoPitanje = slobodnaPitanja[randomIndexPitanja];

  slobodnaPitanja.splice(randomIndexPitanja, 1);

  return odabranoPitanje;
};

function izaberiPitanje() {
  if (trenutni_broj_pitanja <= 5) {
    return izaberiRandomPitanje(dostupna_pitanja_easy);
  } else if (trenutni_broj_pitanja <= 10) {
    return izaberiRandomPitanje(dostupna_pitanja_medium);
  } else {
    return izaberiRandomPitanje(dostupna_pitanja_hard);
  }
};

// chatgpt ideja za jednostavni shuffleArray 
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function krajIgre(znak) {
  if (znak === 1) {
    if(trenutni_broj_pitanja < 5) {
      alert("Igra je gotova! Ponestalo vam je vremena. Niste ništa osvojili.");
    } else if (trenutni_broj_pitanja < 10) {
      alert("Igra je gotova! Ponestalo vam je vremena. Osvojili ste 1000 KM"); // novac[trenutni_broj_pitanja-1]
    }
    else {
      alert("Igra je gotova! Ponestalo vam je vremena. Osvojili ste 32000 KM");
    }
  } else if (znak === 0) {
    if(trenutni_broj_pitanja < 5) {
      alert("Igra je gotova! Dali ste netačan odgovor. Niste ništa osvojili.");
    } else if (trenutni_broj_pitanja < 10) {
      alert("Igra je gotova! Dali ste netačan odgovor. Osvojili ste 1000 KM"); // novac[trenutni_broj_pitanja-1]
    }
    else {
      alert("Igra je gotova! Dali ste netačan odgovor. Osvojili ste 32000 KM");
    }
  } else if(znak === 2) {
    alert("Čestitamo! Završili ste igru. Osvojili ste 1000000KM!");
  }
  location.reload();
};

document.getElementById('prvi').addEventListener('click', function() {
  var provjera = provjeriPitanje(document.getElementById('odgovor1').textContent);

  if (provjera) {
    pustiCorrectZvuk();
    clearInterval(timer);

    setTimeout(function() {
      trenutni_broj_pitanja++;
      if (trenutni_broj_pitanja <= 15) 
        postaviPitanje();
      else {
        pustiClappingZvuk();
        krajIgre(2); 
      }
    }, 1000);
  } else {
    pustiWrongZvuk();

    setTimeout(function() {
      krajIgre(0);
    }, 1000);
  }
});

document.getElementById('drugi').addEventListener('click', function() {
  var provjera = provjeriPitanje(document.getElementById('odgovor2').textContent);

  if (provjera) {
    pustiCorrectZvuk();
    clearInterval(timer);

    setTimeout(function() {
      trenutni_broj_pitanja++;
      if (trenutni_broj_pitanja <= 15) 
        postaviPitanje();
      else {
        pustiClappingZvuk();
        krajIgre(2); 
      }
    }, 1000);
  } else {
    pustiWrongZvuk();

    setTimeout(function() {
      krajIgre(0);
    }, 1000);
  }
});

document.getElementById('treci').addEventListener('click', function() {
  var provjera = provjeriPitanje(document.getElementById('odgovor3').textContent);

  if (provjera) {
    pustiCorrectZvuk();
    clearInterval(timer);

    setTimeout(function() {
      trenutni_broj_pitanja++;
      if (trenutni_broj_pitanja <= 15) 
        postaviPitanje();
      else {
        pustiClappingZvuk();
        krajIgre(2); 
      }
    }, 1000);
  } else {
    pustiWrongZvuk();

    setTimeout(function() {
      krajIgre(0);
    }, 1000);
  }
});

document.getElementById('cetvrti').addEventListener('click', function() {
  var provjera = provjeriPitanje(document.getElementById('odgovor4').textContent);

  if (provjera) {
    pustiCorrectZvuk();
    clearInterval(timer);

    setTimeout(function() {
      trenutni_broj_pitanja++;
      if (trenutni_broj_pitanja <= 15) 
        postaviPitanje();
      else {
        pustiClappingZvuk();
        krajIgre(2); 
      }
    }, 1000);
  } else {
    pustiWrongZvuk();

    setTimeout(function() {
      krajIgre(0);
    }, 1000);
  }
});


function postaviPitanje() {
  document.getElementById('postavi_novac').innerHTML = `${trenutni_broj_pitanja}/15 ${novac[trenutni_broj_pitanja]}KM`;

  odabrano_pitanje = izaberiPitanje();
  //console.log(odabrano_pitanje);
  console.log(odabrano_pitanje.correct_answer);
  document.getElementById('pitanje_tekst').innerHTML = odabrano_pitanje.question;

  var svi_odgovori = [odabrano_pitanje.correct_answer, ...odabrano_pitanje.incorrect_answers];
  svi_odgovori = shuffleArray(svi_odgovori);

  for (let i = 0; i < 4; i++) {
    document.getElementById(`odgovor${i + 1}`).textContent = svi_odgovori[i];
  }

  count = 16;
  pokreniTimer();
};

function provjeriPitanje(pitanje) {
  return odabrano_pitanje.correct_answer === pitanje;
};

function igraj() {
  set();
  postaviPitanje();
};