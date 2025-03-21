const data_easy = [
    {
      question: "Kako se naziva fakultet koji je 1960. godine prerastao iz Prirodno-matematičkog odsjeka?",
      correct_answer: "Prirodno-matematički fakultet",
      incorrect_answers: [
        "Filozofski fakultet",
        "Tehnički fakultet",
        "Medicinski fakultet",
      ]
    },
    {
      question: "Koji je bio naziv Odsjeka koji se u julu 2022. godine promijenio u Odsjek za matematičke i kompjuterske nauke?",
      correct_answer: "Odsjek za matematiku",
      incorrect_answers: [
        "Odsjek za informatiku",
        "Odsjek za matematičke nauke",
        "Odsjek za kompjuterske nauke",
      ]
    },
    {
      question: "Kako je organiziran studij na Odsjeku za matematiku prema Bolonjskim principima studija?",
      correct_answer: "3+2+3",
      incorrect_answers: [
        "2+3+2",
        "4+1+4",
        "2+4+2",
      ]
    },
    {
      question: "Koje zvanje stiče student po uspješnom završetku trogodišnjeg studija, smjera 'Kompjuterske nauke'?",
      correct_answer: "Bakalaureat/Bachelor matematike – softversko inženjerstvo",
      incorrect_answers: [
        "Bakalaureat/Bachelor matematike",
        "Bakalaureat/Bachelor matematike – primijenjena matematika",
        "Bakalaureat/Bachelor matematike – nastavnički smjer",
      ]
    },
    {
      question: "Koji smjer vodi do zvanja 'Bakalaureat/Bachelor matematike – matematika i informatike'?",
      correct_answer: "Nastavnički smjer (Matematika i informatika)",
      incorrect_answers: [
        "Opći smjer",
        "Primijenjene matematike",
        "Kompjuterske nauke",
      ]
    },
    {
      question: "Koji vid nastave obuhvata konkretne primjere i zadatke?",
      correct_answer: "Auditorne vježbe",
      incorrect_answers: [
        "Predavanja",
        "Laboratorijske vježbe",
        "Katedra za geometriju i topologiju",
      ]
    },
    {
      question: "Na kojim predmetima se izlažu teoretski koncepti predmeta na predavanjima?",
      correct_answer: "Predavanja",
      incorrect_answers: [
        "Auditorne vježbe",
        "Laboratorijske vježbe",
        "Katedra za matematiku i informatiku u obrazovanju",
      ]
    },
    {
      question: "Koji vid nastave ima cilj ovladavanja praktičnim znanjima kroz rad u laboratoriji?",
      correct_answer: "Laboratorijske vježbe",
      incorrect_answers: [
        "Predavanja",
        "Auditorne vježbe",
        "Katedra za vjerovatnoću i statistiku",
      ]
    },
    {
      question: "Koji studenti najčešće dobijaju mogućnost zaposlenja kao saradnici u nastavi na Fakultetu?",
      correct_answer: "Najbolji studenti",
      incorrect_answers: [
        "Studenti nastavnog smjera",
        "Studenti nastavnog smjera i bankarstva",
        "Studenti s najdužim radnim iskustvom",
      ]
    },
    {
      question: "Koja zanimanja su posebno tražena za studente nastavnog smjera?",
      correct_answer: "Nastavnici ili profesori matematike i/ili informatike",
      incorrect_answers: [
        "Banke",
        "Softverske kuće",
        "Finansijske ustanove",
      ]
    },
    {
      question: "Koja su moguća radna mjesta za studente s drugih smjerova, izvan prosvjete?",
      correct_answer: "Softverske kuće",
      incorrect_answers: [
        "Nastavnici ili profesori matematike i/ili informatike",
        "Zavodi za statistiku",
        "Nastavnici u osnovnim školama",
      ]
    },
    {
      question: "Zašto su studenti nastavnog smjera posebno traženi za rad u osnovnim i srednjim školama?",
      correct_answer: "Zbog deficita kadra na području cijele Bosne i Hercegovine",
      incorrect_answers: [
        "Zbog prevelike konkurencije u bankarskom sektoru",
        "Zbog velikog broja slobodnih radnih mjesta u softverskim kućama",
        "Zbog potrebe za matematičkim modeliranjem u osnovnim školama",
      ]
    },
    {
      question: "Koliko ECTS kredita je potrebno ostvariti za završetak stručnog studija?",
      correct_answer: "120",
      incorrect_answers: [
        "90",
        "100",
        "150",
      ]
    },
    {
      question: "Koji je minimalni uslov za kandidate koji žele upisati ovaj stručni studijski program?",
      correct_answer: "Završena srednja škola",
      incorrect_answers: [
        "Diplomirani na prethodnom univerzitetskom studiju",
        "Radno iskustvo u IT sektoru",
        "Položen prijemni ispit",
      ]
    },
    {
      question: "Koliko traje jedan semestar na stručnom studiju?",
      correct_answer: "15 sedmica",
      incorrect_answers: [
        "10 sedmica",
        "12 sedmica",
        "18 sedmica",
      ]
    },
    {
      question: "Koliko ECTS studijskih bodova polaznici imaju pravo prenijeti u narednu godinu studija unutar jednog ciklusa?",
      correct_answer: "12",
      incorrect_answers: [
        "8",
        "10",
        "15",
      ]
    },
    {
      question: "Koje znanje i vještine stručni studij pruža polaznicima za rad u IT sektoru?",
      correct_answer: "Razumijevanje širokog dijapazona odgovarajućih problema u kompjuterskim naukama",
      incorrect_answers: [
        "Fokus na teorijskim konceptima informacionih tehnologija",
        "Specifične veštine za upotrebu računarskih aplikacija",
        "Sposobnost razvijanja novih programskih jezika",
      ]
    },
    {
      question: "Kako polaznici mogu primijeniti stečena znanja i vještine nakon završetka studija?",
      correct_answer: "Na različitim informacionim sistemima u softverskim kompanijama i drugim relevantnim ustanovama",
      incorrect_answers: [
        "Samo u akademskim istraživačkim projektima",
        "Isključivo u javnom sektoru",
        "Samo u domaćem IT sektoru",
      ]
    },
    {
      question: "Kako se nositelj diplome može osposobiti za izvođenje nastave iz informatičkih predmeta u osnovnim školama?",
      correct_answer: "Pohađanjem kurseva iz pedagoško-psihološke oblasti",
      incorrect_answers: [
        "Položavanjem kurseva iz didaktičko-metodičke oblasti",
        "Završetkom dodatnog studija za nastavnike",
        "Sticanjem iskustva u radu s računarskim aplikacijama",
      ]
    },
    {
      question: "Ko je predavao predmet Web programiranje tokom akademske godine 2023/2024?",
      correct_answer: "Dr. Sead Delalić",
      incorrect_answers: [
        "Prof. Zenan Šabanac",
        "Prof. Elmedin Selmanović",
        "Doc. dr. Damir Hasić",
      ]
    },
    {
      question: "Ko je bio asistent na predmetu Web programiranje (TKN) tokom akademske godine 2023/2024?",
      correct_answer: "Irhad Fejzić",
      incorrect_answers: [
        "Iman Bekkaye",
        "Franjo Šarčević",
        "Emin Bešo",
      ]
    },
  ];
  
  const data_medium = [
    {
      question: "Koliko smjerova postoje na II ciklusu studija, trajanju dvije godine?",
      correct_answer: "4",
      incorrect_answers: [
        "2",
        "3",
        "5",
      ]
    },
    {
      question: "Koja struktura podataka slijedi načelo Last In, First Out (LIFO)?",
      correct_answer: "Stack",
      incorrect_answers: [
        "Queue",
        "Liste",
        "Stablo",
      ]
    },
    {
      question: "Koja je funkcija DNS-a u umrežavanju?",
      correct_answer: "Domain Name System",
      incorrect_answers: [
        "Dynamic Network Service",
        "Data Naming Server",
        "Digital Network Security",
      ]
    },
    {
      question: "Što znači skraćenica 'API'?",
      correct_answer: "Application Program Interface",
      incorrect_answers: [
        "Advanced Programming Interface",
        "Algorithmic Processing Instruction",
        "Automated Program Integration",
      ]
    },
    {
      question: "Koji algoritam sortiranja ima vremensku složenost O(n log n) u prosječnom i najgorem slučaju?",
      correct_answer: "Quick Sort",
      incorrect_answers: [
        "Bubble Sort",
        "Insertion Sort",
        "Selection Sort",
      ]
    },
    {
      question: "Koja je svrha HTTP statusnog koda '404'?",
      correct_answer: "Stranica nije pronađena",
      incorrect_answers: [
        "Greška poslužitelja",
        "Zabranjeni pristup",
        "Istek zahtjeva",
      ]
    },
    {
      question: "Koja je glavna prednost korištenja hash tablice za pohranu podataka?",
      correct_answer: "Pristup u konstantnom vremenu",
      incorrect_answers: [
        "Učinkovito sortiranje",
        "Zajamčena cjelovitost podataka",
        "Automatsko prikupljanje smeća",
      ]
    },
    {
      question: "Koji se programski jezik često koristi za umjetnu inteligenciju i machine learning?",
      correct_answer: "Python",
      incorrect_answers: [
        "Java",
        "C++",
        "Rubin",
      ]
    },
    {
      question: "Što znači kratica 'URL'?",
      correct_answer: "Universal Resource Locator",
      incorrect_answers: [
        "Uniform Resource Language",
        "Unified Retrieval Link",
        "User Registration Locator",
      ]
    },
    {
      question: "Koji se algoritam obično koristi za pronalaženje putanja u problemima obilaska grafa?",
      correct_answer: "Dijkstra's Algorithm",
      incorrect_answers: [
        "Depth-First Search",
        "Breadth-First Search",
        "A* Algorithm",
      ]
    },
    {
      question: "Koja je uloga 'Kernela' u operativnom sustavu?",
      correct_answer: "Osnovna komponenta koja upravlja hardverskim resursima",
      incorrect_answers: [
        "Upravljanje korisničkim sučeljem",
        "Organizacija datotečnog sustava",
        "Implementacija mrežnog protokola",
      ]
    },
    {
      question: "Kolika je vremenska složenost algoritma 'Merge Sort' u prosječnom i najgorem slučaju?",
      correct_answer: "O(n log n)",
      incorrect_answers: [
        "O(n)",
        "O(n^2)",
        "O(log n)",
      ]
    },
    {
      question: "U sustavima za upravljanje bazama podataka, koja je svrha operacije 'JOIN'?",
      correct_answer: "Kombiniranje redaka iz dvije ili više tablica na temelju povezanog stupca",
      incorrect_answers: [
        "Brisanje zapisa iz tablice",
        "Sortiranje zapisa uzlaznim redoslijedom",
        "Izrada nove tablice od postojećih",
      ]
    },
    {
      question: "Koja je svrha 'Big-O' notacije u analizi algoritama?",
      correct_answer: "Opisivanje gornje granice algoritamske vremenske složenosti",
      incorrect_answers: [
        "Predstavljanje veličine podatkovnih struktura",
        "Označavanje broja operacija u algoritmu",
        "Predstavljanje prostorne složenosti algoritma",
      ]
    },
    {
      question: "U računalnoj grafici, koja je svrha 'GPU-a'?",
      correct_answer: "Graphics Processing Unit",
      incorrect_answers: [
        "General Processing Unit",
        "Geometric Processing Unit",
        "Global Programming Unit",
      ]
    },
    {
      question: "U računalnoj sigurnosti, na što se odnosi izraz 'vatrozid'?",
      correct_answer: "Mrežni sigurnosni hardver ili softver koji prati i kontrolira dolazni i odlazni mrežni promet",
      incorrect_answers: [
        "Softver za otkrivanje zlonamjernog softvera",
        "Alat za šifriranje datoteka",
        "Sustav autentifikacije korisnika",
      ]
    },
    {
      question: "Koja se struktura podataka koristi za implementaciju prioritetnih redova?",
      correct_answer: "Binarno stablo",
      incorrect_answers: [
        "Stack",
        "Povezana lista",
        "Hash tablica",
      ]
    },
    {
      question: "U web razvoju, koja je svrha 'Sesije' u kontekstu komunikacije klijent-poslužitelj?",
      correct_answer: "Upravljanje korisničkim podacima tijekom posjeta",
      incorrect_answers: [
        "Rukovanje učitavanjem datoteka",
        "Uspostavljanje sigurnih veza","Rješavanje DNS upita",
      ]
    },
    {
      question: "Koja je svrha 'Dijkstrinog algoritma' u teoriji grafova?",
      correct_answer: "Pronalaženje najkraćeg puta između dva čvora u ponderiranom grafu",
      incorrect_answers: [
        "Detektiranje ciklusa u grafu",
        "Identificiranje jako povezanih komponenti",
        "Sortiranje čvorova u topološkom redu",
      ]
    },
    {
      question: "Koja je svrha 'Monte Carlo' algoritma u informatici?",
      correct_answer: "Simulacija slučajnih procesa i korištenje statističke analize",
      incorrect_answers: [
        "Optimiziranje algoritama sortiranja",
        "Analiza principa kvantnog računanja",
        "Kodiranje i dekodiranje podataka",
      ]
    },
  ];
  
  const data_hard = [
    {
      question: "Kada je formirana Katedra za matematiku na Sarajevskom Univerzitetu?",
      correct_answer: "1950. godine",
      incorrect_answers: [
        "1940. godine",
        "1960. godine",
        "1970. godine",
      ]
    },
    {
      question: "Koje zvanje se stiče po završetku 'Zajedničkog doktorskog studija prirodnih i matematičkih nauka u obrazovanju, Studijski program – Matematika u obrazovanju'?",
      correct_answer: "Doktor matematičkih nauka u obrazovanju",
      incorrect_answers: [
        "Doktor matematičkih nauka",
        "Doktor kompjuterskih nauka",
        "Doktor kompjuterskih nauka u obrazovanju",
      ]
    },
    {
      question: "Koji su mogući naslovi zvanja nakon završetka 'Doktorskog studija matematičkih nauka u Jugoistočnoj Evropi'?",
      correct_answer: "Oba navedena",
      incorrect_answers: [
        "Doktor matematičkih nauka",
        "Doktor kompjuterskih nauka",
        "Nijedno od navedenog",
      ]
    },
    {
      question: "Kolika je vremenska složenost optimalnog algoritma za problem trgovačkog putnika?",
      correct_answer: "O(n!)",
      incorrect_answers: [
        "O(n log n)",
        "O(n^2)",
        "O(2^n)",
      ]
    },
    {
      question: "Koja je granica (x^2 - 1)/(x - 1) kada se x približava 1?",
      correct_answer: "1",
      incorrect_answers: [
        "0",
        "Nedefinirano",
        "Beskonačnost",
      ]
    },
    {
      question: "Koji je najmanji prosti broj veći od 50?",
      correct_answer: "53",
      incorrect_answers: [
        "51",
        "49",
        "47",
      ]
    },
    {
      question: "Koja je prednost korištenja NoSQL baze podataka u odnosu na tradicionalnu relacijsku bazu podataka?",
      correct_answer: "Fleksibilnost i skalabilnost sheme",
      incorrect_answers: [
        "Bolja podrška za složene transakcije",
        "Stroga dosljednost podataka",
        "Napredne mogućnosti indeksiranja",
      ]
    },
    {
      question: "Koja je granica (sin(x))/x kada se x približava 0?",
      correct_answer: "1",
      incorrect_answers: [
        "0",
        "Nedefinirano",
        "Beskonačnost",
      ]
    },
    {
      question: "Koje je opće rješenje diferencijalne jednadžbe dy/dx = y^2?",
      correct_answer: "y = 1/(c - x)",
      incorrect_answers: [
        "y = -1/x",
        "y = 1/x",
        "y = e^x",
      ]
    },
    {
      question: "Za što se koristi Eulerova tocijentna funkcija, φ(n)?",
      correct_answer: "Brojanje pozitivnih cijelih brojeva manjih od n koji su relativno prosti s n",
      incorrect_answers: [
        "Rastavljanje broja na proste faktore",
        "Izračunavanje zbroja djelitelja broja",
        "Utvrđivanje je li broj potpun kvadrat",
      ]
    },
    {
      question: "Što je 'Rođendanski paradoks' u kontekstu kriptografskih napada?",
      correct_answer: "Vjerojatnost da će u skupu nasumično odabranih elemenata neki par imati istu vrijednost",
      incorrect_answers: [
        "Tehnika za određivanje datuma rođenja korisnika",
        "Iznenađujuća vjerojatnost da dvije osobe u grupi imaju isti rođendan",
        "Metoda za generiranje sigurnih kriptografskih ključeva",
      ]
    },
    {
      question: "Ako je A matrica 3x3, a B matrica identiteta 3x3, koji je rezultat množenja matrica A * B?",
      correct_answer: "A",
      incorrect_answers: [
        "B",
        "B * A",
        "C",
      ]
    },
    {
      question: "Što je ranjivost 'Buffer Overflow' u računalnoj sigurnosti?",
      correct_answer: "Iskorištavanje programske pogreške za pisanje izvan dodijeljenog memorijskog prostora",
      incorrect_answers: [
        "Vrsta napada zlonamjernog softvera",
        "Tehnika upada u mrežu",
        "Šifriranje osjetljivih podataka radi zaštite od neovlaštenog pristupa",
      ]
    },
    {
      question: "Što je derivacija funkcije f(x) = ln(x^2 + 1)?",
      correct_answer: "2x / (x^2 + 1)",
      incorrect_answers: [
        "2x / √(x^2 + 1)",
        "2x / (x^2 + 1)",
        "2 / (x^2 + 1)",
      ]
    },
    {
      question: "Za što se koristi Fermatov mali teorem u teoriji brojeva?",
      correct_answer: "Pružanje testa za primalnost broja",
      incorrect_answers: [
        "Pronalaženje rastavljanja broja na proste faktore",
        "Utvrđivanje je li broj prost",
        "Pružanje potrebnog, ali ne i dovoljnog uvjeta za primalnost broja",
      ]
    },
    {
      question: "U kontekstu baza podataka, koja je svrha svojstava 'ACID'?",
      correct_answer: "Osiguravanje pouzdanosti transakcija baze podataka",
      incorrect_answers: [
        "Definiranje tipova podataka u shemi baze podataka",
        "Predstavljanje dopuštenja pristupa bazi podataka",
        "Provođenje ograničenja baze podataka",
      ]
    },
    {
      question: "Koja je svrha 'Dijkstrinog algoritma' u teoriji grafova?",
      correct_answer: "Pronalaženje najkraćeg puta između dva čvora u ponderiranom grafu",
      incorrect_answers: [
        "Detektiranje ciklusa u grafu",
        "Identificiranje jako povezanih komponenti",
        "Sortiranje čvorova u topološkom redu",
      ]
    },
    {
      question: "Koja je svrha mehanizma 'Semafor' u operativnim sustavima?",
      correct_answer: "Kontrola pristupa dijeljenom resursu u konkurentnom okruženju",
      incorrect_answers: [
        "Upravljanje prioritetima procesa",
        "Dodjeljivanje memorije za novi proces",
        "Praćenje performansi sustava",
      ]
    },
    {
      question: "Ako su dva događaja A i B neovisna, koliko je P(A ∩ B)?",
      correct_answer: "P(A) * P(B)",
      incorrect_answers: [
        "P(A) + P(B)",
        "P(A | B)",
        "P(A ∪ B)",
      ]
    },
    {
      question: "Kolika je vremenska složenost algoritma za brzo sortiranje u prosječnom slučaju?",
      correct_answer: "O(n log n)",
      incorrect_answers: [
        "O(n^2)",
        "O(n)",
        "O(2^n)",
      ]
    },
  ];
