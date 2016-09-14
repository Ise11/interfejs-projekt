var main = (function(){
	return {
		dictionary: {
			objects: [
				{name: 'adwokat', type: 1, main: 'adwokat', inflections: ['adwokat', 'adwokaci', 'adwokatowi', 'adwokatom', 'adwokata', 'adwokatem', 'adwokatami', 'adwokatu', 'adwokatach', 'adwokaci'], states: []},
				{name: 'prawnik', type: 1, main: 'adwokat', inflections: ['prawnik', 'prawnicy', 'prawnika', 'prawników', 'prawnikowi', 'prawnikom', 'prawnikiem', 'prawnikami', 'prawniku','prawnikach','prawniczka','prawniczki','prawniczek','prawniczkom','prawniczkę',	'prawniczką','prawniczkami','prawniczce','prawniczkach','prawniczko'], states: []},
				{name: 'astronom', type: 1, main: 'astronom', inflections: ['astronom', 'astronomi', 'astronoma', 'astronomów', 'astronomowi', 'astronomom', 'astronomem', 'astronomami', 'astronomie', 'astronomach'], states: []},
				{name: 'wróżka', type: 1, genitive: "wróżki", main: 'wróżka', inflections: ['wróżka','wróżki', 'wróżek','wróżce', 'wróżkom','wróżkę','wróżką', 'wróżkami','wróżkach','wróżko'], states: []},
				{name: 'farmaceuta', type: 1, main: 'aptekarz', inflections: ['farmaceuta','farmaceuci','farmaceuty','farmaceutów','farmaceucie','farmaceutom','farmaceutę','farmaceutą','farmaceutami','farmaceutach','farmaceuto'], states: []},
				{name: 'aptekarz', type: 1, main: 'aptekarz', inflections: ['aptekarz','aptekarza','aptekarzowi','aptekarzom','aptekarzy','aptekarzem','aptekarzami','aptekarzu','aptekarzach','aptekarze'], states: []},
				{name: 'kot', type: 1, main: 'kot', inflections: ['kot', 'koty', 'kotowi', 'kotom', 'kota', 'kotem', 'kotami', 'kotu', 'kotach', 'koty'], states: []},
				{name: 'tancerz', type: 1, main: 'tancerz', inflections: ['tancerz', 'tancerze', 'tancerza', 'tancerzy', 'tancerzowi', 'tancerzom', 'tancerzem', 'tancerzami', 'tancerzu', 'tancerzach','tancerka','tancerki','tancerek','tancerce','tancerkom','tancerkę',	'tancerką','tancerkami','tancerce','tancerkach','tancerko'], states: []},
				{name: 'kwiaciarka', type: 1, genitive: "kwiaciarki", main: 'kwiaciarka', inflections: ['kwiaciarka','kwiaciarki', 'kwiaciarek','kwiaciarce', 'kwiaciarkom','kwiaciarkę','kwiaciarką', 'kwiaciarkami','kwiaciarkach','kwiaciarko'], states: []},
				{name: 'lekarz', type: 1, main: 'lekarz', inflections: ['lekarz','lekarza','lekarzowi','lekarzom','lekarzy','lekarzem','lekarzami','lekarzu','lekarzach','lekarze', 'lekarka','lekarki','lekarek','lekarkom','lekarkę','lekarką','lekarkami','lekarce','lekarkach','lekarko'], states: []},
				{name: 'weterynarz', type: 1, main: 'weterynarz', inflections: ['weterynarz','weterynarza','weterynarzowi','weterynarzom','weterynarzy','weterynarzem','weterynarzami','weterynarzu','weterynarzach','weterynarze'], states: []},
				{name: 'programista', type: 1, main: 'programista', inflections: ['programista','programiści','programisty','programistów','programiście','programistom','programistę','programistą','programistami','programistach','programisto'], states: []},
				{name: 'informatyk', type: 1, main: 'programista', inflections: ['informatyk', 'informatyka', 'informatykowi', 'informatykiem', 'informatyku', 'informatycy', 'informatyków', 'informatykom', 'informatykami', 'informatykach', 'informatyka'], states: []},

				{name: 'klient', type: 2, genitive: 'klienta', main: 'klient', inflections: ['klient', 'klienta', 'klientowi', 'klientem', 'kliencie', 'klienci', 'klientów', 'klientom', 'klientami', 'klientach', 'klientka', 'klientki', 'klientce', 'klientkę', 'klientką', 'klientko', 'klientki', 'klientek', 'klientkom', 'klientkami', 'klientkach'], states: []},
				{name: 'gwiazda', type: 2, genitive: "gwiazdy", main: 'gwiazda', inflections: ['gwiazda','gwiazdy','gwiazd','gwieździecie','gwiazdom','gwiazdę','gwiazdą','gwiazdami','gwiazdach','gwiazdo'], states: []},
				{name: 'choreografia', type: 2, genitive: "choreografii", main: 'choreografia', inflections: ['choreografia','choreografie','choreografii','choreografiom','choreografię','choreografią','choreografiami','choreografiach','choreografio'], states: []},
				{name: 'konkurs', type: 2, genitive: "konkursu", main: 'konkurs', inflections: ['konkursów','konkursowi','konkursom','konkurs','konkurse','konkursem','konkursami','konkursu','konkursach'], states: []},
				{name: 'mysz', type: 2, genitive: "myszy", main: 'mysz', inflections: ['mysz',	'myszom','mysz',	'myszą', 'myszami','myszy', 'myszach','myszo', 'mysze'], states: []},
				{name: 'gryzoń', type: 2, genitive: "gryzonia", main: 'mysz', inflections: ['gryzoń','gryzonie','gryzonia',	'gryzoniów','gryzoniowi','gryzoniom','gryzonia','gryzoniem','gryzoniami','gryzoniach','gryzoniu'], states: []},

				{name: 'karma', type: 2, genitive: "karmy", main: 'karma', inflections: ['karma','karmy','karm','karmom','karmę','karmą','karmami','karmie','karmach','karmo'], states: []},
				{name: 'lek', type: 2, genitive: "meczu", main: 'mecz', inflections: ['mecz',	'meczu','meczów', 'meczy','meczowi','meczom','meczem','meczami','meczach'], states: []},
				{name: 'pacjent', type: 2, genitive: 'pacjenta', main: 'pacjent', inflections: ['pacjent', 'pacjenta', 'pacjentowi', 'pacjentem', 'pacjencie', 'pacjenci', 'pacjentów', 'pacjentom', 'pacjentami', 'pacjentach', 'pacjentka', 'pacjentki', 'pacjentce', 'pacjentkę', 'pacjentką', 'pacjentko', 'pacjentki', 'pacjentek', 'pacjentkom', 'pacjentkami', 'pacjentkach'], states: []},
				{name: 'drapak', type: 2, main: 'drapak', inflections: ['drapak', 'drapaka', 'drapakowi', 'drapakiem', 'drapaku', 'drapaki', 'drapaków', 'drapakom', 'drapakami', 'drapakach', 'drapaka'], states: []},
				{name: 'przyszłość', type: 2, genitive: "przyszłości", main: 'przyszłość', inflections: ['przyszłość', 'przyszłości', 'przyszłością'], states: []},
				{name: 'tarot', type: 2, genitive: 'tarotów', main: 'tarot', inflections: ['tarot', 'tarota', 'tarotowi', 'tarotem', 'tarocie', 'taroty', 'tarotów', 'tarotom', 'tarotami', 'tarotach', ], states: []},
				{name: 'równanie', type: 2, genitive: "równania", main: 'równanie', inflections: ['równań','równaniom','równaniem',	'równaniami','równaniu','równaniach','równanie','równania'], states: []},
				{name: 'kwiat', type: 2, genitive: "kwiatu", main: 'kwiat', inflections: ['kwiatu',	'kwiatów','kwiatu',	'kwiatom','kwiat','kwiatem','kwiatami','kwiecie','kwiatach','kwiecie','kwiaty'], states: []},
				{name: 'zwierzę', type: 2, genitive: 'zwierzęcia', main: 'zwierzę', inflections: ['zwierzę',	'zwierzęta', 'zwierzęcia', 'zwierząt', 'zwierzęciu', 'zwierzętom', 'zwierzęciem', 'zwierzętami', 'zwierzęciu', 'zwierzętach', 'zwierzę', 'zwierzęta'], states: []},
				{name: 'recepta', type: 2, genitive: "recepty", main: 'recepta', inflections: ['recepta','recepty','recept','recepcie','receptom','receptę','receptą','receptami','receptach','recepto'], states: []},
				{name: 'program', type: 2, genitive: "programu", main: 'program', inflections: ['programu',	'programów','programowi',	'programom','program', 'programem',	'programami','programie',	'programach','programy'], states: []},
				{name: 'aplikacja', type: 2, genitive: "aplikacji", main: 'program', inflections: ['aplikacja','aplikacje','aplikacji','aplikacjom','aplikację','aplikacją','aplikacjami','aplikacjach','aplikacjo'], states: []},
				{name: 'kod', type: 2, genitive: "kodu", main: 'kod', inflections: ['kodu',	'kodów','kodowi',	'kodom','kod','kodem','kodami','kodach','kodzie','kody'], states: []},
				{name: 'algorytm', type: 2, genitive: "algorytmu", main: 'algorytm', inflections: ['algorytmu','algorytmów','algorytmowi',	'algorytmom','algorytm','algorytmem',	'algorytmami','algorytmach','algorytmie',	'algorytmy'], states: []},
				{name: 'badanie', type: 2, genitive: "badania", main: 'badanie', inflections: ['badań','badaniom','badaniem','badaniami','badaniu','badaniach','badanie','badania'], states: []},

				],
			actions: [
				{name: 'bronienie', main: 'bronienie', inflections: ['bronić', 'bronię', 'bronisz', 'broni', 'bronimy', 'bronicie', 'bronią', 'broń', 'brońmy', 'broncie', 'broniąc', 'broniący', 'broniłem', 'broniłeś', 'bronił', 'broniłam', 'broniłaś', 'broniła', 'broniłom', 'broniłoś', 'broniło', 'broniliśmy', 'broniliście', 'bronili', 'broniłyśmy', 'broniłyście', 'broniły', 'briniłbym', 'broniłbyś', 'broniłby', 'broniłabym', 'broniłabyś', 'broniłyby', 'broniłobym', 'broniłobyś', 'broniłoby', 'bronibyśmy', 'bronibyście', 'broniliby', 'broniłybyśmy', 'broniłybyście', 'broniono', 'broniony', 'obronić', 'obronię', 'obronisz', 'obroni', 'obronimy', 'obronicie', 'ubronią', 'obroń', 'obrońmy', 'obrońcie', 'obraniając', 'obraniający', 'obroniłem', 'obroniłeś', 'obronił', 'obroniłam', 'obroniłaś', 'obroniła', 'obroniłom', 'obroniłoś', 'obroniło', 'obroniliśmy', 'obroniliście', 'obronili', 'obroniłyśmy', 'obroniłyście', 'obroniły', 'obroniłbym', 'obroniłbyś', 'obroniłby', 'obroniłabym', 'obroniłabyś', 'obroniłyby', 'obroniłobym', 'obroniłobyś', 'obroniłoby', 'obronilibyśmy', 'obronilibyście', 'obroniliby', 'obroniłybyśmy', 'obroniłybyście', 'obroniono', 'obroniony','bronienie']},
				{name: 'reprezentowanie', main: 'reprezentowanie', inflections: ['reprezentować', 'reprezentuję', 'reprezentujesz', 'reprezentuje', 'reprezentujemy', 'reprezentujecie', 'reprezentują', 'reprezentuj', 'reprezentujmy', 'reprezentujcie', 'reprezentując', 'reprezentujący', 'reprezentowałem', 'reprezentowałeś', 'reprezentował', 'reprezentowałam', 'reprezentowałaś', 'reprezentowała', 'reprezentowałom', 'reprezentowałoś', 'reprezentowało', 'reprezentowaliśmy', 'reprezentowaliście', 'reprezentowali', 'reprezentowałyśmy', 'reprezentowałyście', 'reprezentowały', 'reprezentowałbym', 'reprezentowałbyś', 'reprezentowałby', 'reprezentowałabym', 'reprezentowałbyś', 'reprezentowałyby', 'reprezentowałobym', 'reprezentowałobyś', 'reprezentowałoby', 'reprezentowalibyśmy', 'reprezentowalibyście', 'reprezentowaliby', 'reprezentowałybyśmy', 'reprezentowałybyście', 'reprezentowano', 'reprezentowany', 'reprezentowawszy', 'reprezentować', 'reprezentowałem', 'reprezentowałeś', 'reprezentował', 'reprezentowałam', 'reprezentowałaś', 'reprezentowała', 'reprezentowałom', 'reprezentowałoś', 'reprezentowało', 'reprezentowaliśmy', 'reprezentowaliście', 'reprezentowali', 'reprezentowałyśmy', 'reprezentowałyście', 'reprezentowały', 'reprezentowałbym', 'reprezentowałbyś', 'reprezentowałby', 'reprezentowałabym', 'reprezentowałbyś', 'reprezentowałyby', 'reprezentowałobym', 'reprezentowałobyś', 'reprezentowałoby', 'reprezentowalibyśmy', 'reprezentowalibyście', 'reprezentowaliby', 'reprezentowałybyśmy', 'reprezentowałybyście', 'reprezentowano', 'reprezentowany', 'reprezentowanie']},
				{name: 'obliczanie', main: 'obliczanie', inflections: ['obliczać','obliczam','obliczasz','oblicza','obliczamy','obliczacie','obliczają','obliczałem','obliczałam','obliczałeś','obliczałaś','obliczał','obliczała','obliczało','obliczaliśmy','obliczałyśmy','obliczaliście','obliczałyście','obliczali','obliczały','obliczałbym','obliczałabym','obliczałbyś','obliczałabyś','obliczałby','obliczałaby','obliczałoby','obliczalibyśmy','obliczałybyśmy','obliczalibyście','obliczałybyście','obliczaliby','obliczałyby','obliczaj','niech oblicza','obliczajmy','obliczajcie','niech obliczają','obliczający','obliczając','obliczano','obliczanie']},
				{name: 'obserwowanie', main: 'obserwowanie', inflections: ['obserwować','obserwowanie','obseruję','obserwujesz','obserwuje','obserwujemy','obserwujecie','obserwują','obserwowałbym','obserwowałabym','obserwowałbyś','obserwowałabyś','obserwowałby','obserwowałaby','obserwujełoby','obserwujelibyśmy','obserwowałybyśmy','obserwowalibyście','obserwowałybyście','obserwowaliby','obserwowałyby','obserwowałem','obserwowałam','obserwowałeś','obserwowałaś','obserwował','obserwowała','obserwowało','obserwowaliśmy','obserwowałyśmy','obserwowaliście','obserwowałyście','obserwowali','obserwowały']},
				{name: 'tańczenie', main: 'tańczenie', inflections: ['tańczyć', 'tańczenie', 'tańczę', 'tańczysz', 'tańczy', 'tańczymy', 'tańczycie', 'tańczą', 'tańcz', 'tańczmy', 'tańczcie', 'tańcząc', 'tańczący', 'tańczyłem', 'tańczyłeś', 'tańczył', 'tańczyłam', 'tańczyłaś', 'tańczyła', 'tańczyłom', 'tańczyłoś', 'tańczyło', 'tańczyliśmy', 'tańczyliście', 'tańczyli', 'tańczyłyśmy', 'tańczyłyście', 'tańczyły', 'tańczyłbym', 'tańczyłbyś', 'tańczyłby', 'tańczyłabym', 'tańczyłabyś', 'tańczyłyby', 'tańczyłobym', 'tańczyłobyś', 'tańczyłoby', 'tańczylibyśmy', 'tańczylibyście', 'tańczyliby', 'tańczyłybyśmy', 'tańczyłybyście', 'tańczono', 'tańczony', 'tańczywszy', 'tańczenie']},
				{name: 'układanie', main: 'układanie', inflections: ['układać', 'układanie', 'układam', 'układasz', 'ukłąda', 'układamy', 'układacie', 'tańczą', 'tańcz', 'tańczmy', 'tańczcie', 'tańcząc', 'tańczący', 'układałem', 'układałeś', 'układał', 'układałam', 'układałaś', 'układała', 'układałom', 'układałoś', 'układało', 'układaliśmy', 'układaliście', 'układali', 'układałyśmy', 'układałyście', 'układały', 'układałbym', 'układałbyś', 'układałby', 'układałabym', 'układałabyś', 'układałyby', 'układałobym', 'układałobyś', 'układałoby', 'układalibyśmy', 'układalibyście', 'układaliby', 'układałybyśmy', 'układałybyście', 'układano', 'układany', 'układawszy', 'układanie']},
				{name: 'łapanie', main: 'łapanie', inflections: ['łapać', 'łapanie', 'łapię', 'łapaiesz', 'łapie', 'łapiemy', 'łapiecie', 'łapią', 'łap', 'łapmy', 'łapcie', 'łapiąc', 'łapiący', 'łapałem', 'łapałeś', 'łapał', 'łapałam', 'łapałaś', 'łapała', 'łapałom', 'łapałoś', 'łapało', 'łapaliśmy', 'łapaliście', 'łapali', 'łapałyśmy', 'łapałyście', 'łapały', 'łapałbym', 'łapałbyś', 'łapałby', 'łapałabym', 'łapałabyś', 'łapałyby', 'łapałobym', 'łapałobyś', 'łapałoby', 'łapalibyśmy', 'łapalibyście', 'łapaliby', 'łapałybyśmy', 'łapałybyście', 'łapano', 'łapany', 'łapawszy']},
				{name: 'jedzenie', main: 'jedzenie', inflections: ['jeść', 'jem', 'jesz', 'je', 'jemy', 'jecie', 'jedzą', 'jedz', 'jemy', 'jecie', 'jedząc', 'jedzący', 'jadłem', 'jadłłeś', 'jedzył', 'jedzyłam', 'jedzyłaś', 'jadłła', 'jadłłom', 'jadłoś', 'jadło', 'jadliśmy', 'jadliście', 'jadli', 'jadłyśmy', 'jadłyście', 'jadły', 'jadłbym', 'jadłbyś', 'jadłby', 'jadłabym', 'jadłbyś', 'jadłyby', 'jadłobym', 'jadłobyś', 'jadłoby', 'jadlibyśmy', 'jadlibyście', 'jadliby', 'jadłybyśmy', 'jadłybyście', 'jedzono', 'jedzony', 'jedzenienie']},
				{name: 'sprzedawanie', main: 'sprzedawanie', inflections: ['sprzedawać','sprzedaję','sprzedajesz','sprzedaje','sprzedajemy','sprzedajecie','sprzedają','sprzedawałem','sprzedawałam','sprzedawałeś','sprzedawałaś','sprzedawał','sprzedawała','sprzedawało','sprzedawaliśmy','sprzedawałyśmy','sprzedawaliście','sprzedawałyście','sprzedawali','sprzedawały','sprzedawałbym','sprzedawałabym','sprzedawałbyś','sprzedawałabyś','sprzedawałby','sprzedawałaby','sprzedawałoby','sprzedawalibyśmy','sprzedawałybyśmy','sprzedawalibyście','sprzedawałybyście','sprzedawaliby','sprzedawałyby','sprzedaj','sprzedajmy','sprzedajcie','sprzedający','sprzedawany','sprzedając','sprzedawano','sprzedawanie']},
				{name: 'sporządzanie', main: 'sporządzanie', inflections: ['sporządzać','sporządzam','sporządzasz','sporządza','sporządzamy','sporządzacie','sporządzają','sporządzałem','sporządzałam','sporządzałeś','sporządzałaś','sporządzał','sporządzała','sporządzało','sporządzaliśmy','sporządzałyśmy','sporządzaliście','sporządzałyście','sporządzali','sporządzały','będę sporządzał','będę sporządzała','będziesz sporządzał','będziesz sporządzała','będzie sporządzał','będzie sporządzała','będzie sporządzało','będziemy sporządzali','będziemy sporządzały','będziecie sporządzali','będziecie sporządzały','będą sporządzali','będą sporządzały','sporządzałbym','sporządzałabym','sporządzałbyś','sporządzałabyś','sporządzałby','sporządzałaby','sporządzałoby','sporządzalibyśmy','sporządzałybyśmy','sporządzalibyście','sporządzałybyście','sporządzaliby','sporządzałyby','sporządzaj','niech sporządzają','sporządzajmy','sporządzajcie','niech sporządzają','sporządzający','sporządzany','sporządzając','sporządzano','sporządzanie']},
				{name: 'doradzanie', main: 'doradzanie', inflections: ['doradzać', 'doradzanie', 'doradzam', 'doradzasz', 'doradza', 'doradzamy', 'doradzacie', 'doradzają', 'doradzaj', 'doradzajmy', 'doradzajcie', 'doradzając', 'doradzający', 'doradzałem', 'doradzałeś', 'doradzał', 'doradzałam', 'doradzałaś', 'doradzała', 'doradzałom', 'doradzałoś', 'doradzało', 'doradzaliśmy', 'doradzaliście', 'doradzali', 'doradzałyśmy', 'doradzałyście', 'doradzały', 'doradzałbym', 'doradzałbyś', 'doradzałby', 'doradzałabym', 'doradzałabyś', 'doradzałyby', 'doradzałobym', 'doradzałobyś', 'doradzałoby', 'doradzalibyśmy', 'doradzalibyście', 'doradzaliby', 'doradzałybyśmy', 'doradzałybyście', 'doradzano', 'doradzany', 'doradzawszy']},
				{name: 'drapanie', main: 'drapanie', inflections: ['drapać', 'drapanie', 'drapię', 'drapiesz', 'drapie', 'drapiemy', 'drapiecie', 'drapią', 'drap', 'drapmy', 'drapcie', 'drapiąc', 'drapiący', 'drapałem', 'drapałeś', 'drapał', 'drapałam', 'drapałaś', 'drapała', 'drapałom', 'drapałoś', 'drapało', 'drapaliśmy', 'drapaliście', 'drapali', 'drapałyśmy', 'drapałyście', 'drapały', 'drapałbym', 'drapałbyś', 'drapałby', 'drapałabym', 'drapałabyś', 'drapałyby', 'drapałobym', 'drapałobyś', 'drapałoby', 'drapalibyśmy', 'drapalibyście', 'drapaliby', 'drapałybyśmy', 'drapałybyście', 'drapano', 'drapany', 'drapawszy', 'drapanie']},
				{name: 'przepowiadanie', main: 'przepowiadanie', inflections: ['przepowiadać', 'przepowiadanie', 'przepowiadam', 'przepowiadasz', 'ukłąda', 'przepowiadamy', 'przepowiadacie', 'przepowiadają', 'przepowiadaj', 'przepowiadajmy', 'przepowiadajcie', 'przepowiadając', 'przepowiadający', 'przepowiadałem', 'przepowiadałeś', 'przepowiadał', 'przepowiadałam', 'przepowiadałaś', 'przepowiadała', 'przepowiadałom', 'przepowiadałoś', 'przepowiadało', 'przepowiadaliśmy', 'przepowiadaliście', 'przepowiadali', 'przepowiadałyśmy', 'przepowiadałyście', 'przepowiadały', 'przepowiadałbym', 'przepowiadałbyś', 'przepowiadałby', 'przepowiadałabym', 'przepowiadałabyś', 'przepowiadałyby', 'przepowiadałobym', 'przepowiadałobyś', 'przepowiadałoby', 'przepowiadalibyśmy', 'przepowiadalibyście', 'przepowiadaliby', 'przepowiadałybyśmy', 'przepowiadałybyście', 'przepowiadano', 'przepowiadany', 'przepowiadawszy', 'przepowiadanie']},
				{name: 'sprzedawanie', main: 'sprzedawanie', inflections: ['sprzedawać', 'sprzedawanie', 'sprzedaję', 'sprzedajesz', 'sprzedaje', 'sprzedajemy', 'sprzedajecie', 'sprzedają', 'sprzedawaj', 'sprzedajmy', 'sprzedajcie', 'sprzedając', 'sprzedający', 'sprzedałem', 'sprzedałeś', 'sprzedał', 'sprzedałam', 'sprzedałaś', 'sprzedała', 'sprzedałom', 'sprzedałoś', 'sprzedało', 'sprzedaliśmy', 'sprzedaliście', 'sprzedali', 'sprzedałyśmy', 'sprzedałyście', 'sprzedały', 'sprzedałbym', 'sprzedałbyś', 'sprzedałby', 'sprzedałabym', 'sprzedałbyś', 'sprzedałyby', 'sprzedałobym', 'sprzedałobyś', 'sprzedałoby', 'sprzedalibyśmy', 'sprzedalibyście', 'sprzedaliby', 'sprzedałybyśmy', 'sprzedałybyście', 'sprzedano', 'sprzedany', 'sprzedawszy']},
				{name: 'podlewanie', main: 'podlewanie', inflections: ['podlewać', 'podlewanie', 'podleję', 'podlejesz', 'podleje', 'podlejemy', 'podlejecie', 'podleją', 'podlewaj', 'podlejmy', 'podlejcie', 'podlejąc', 'podlewający', 'podlewałem', 'podlewałeś', 'podlewał', 'podlewałam', 'podlewałaś', 'podlewała', 'podlewałom', 'podlewałoś', 'podlewało', 'podlewaliśmy', 'podlewaliście', 'podlewali', 'podlewałyśmy', 'podlewałyście', 'podlewały', 'podlewałbym', 'podlewałbyś', 'podlewałby', 'podlewałabym', 'podlewałbyś', 'podlewałyby', 'podlewałobym', 'podlewałobyś', 'podlewałoby', 'podlewalibyśmy', 'podlewalibyście', 'podlewaliby', 'podlewałybyśmy', 'podlewałybyście', 'podlewano', 'podlewany', 'podlewawszy']},
				{name: 'leczenie', main: 'leczenie', inflections: ['leczyć', 'leczę', 'leczysz', 'leczy', 'leczymy', 'leczycie', 'leczą', 'twórz', 'twórzmy', 'twórzcie', 'lecząc', 'leczący', 'leczyłem', 'leczyłeś', 'leczył', 'leczyłam', 'leczyłaś', 'leczyła', 'leczyłom', 'leczyłoś', 'leczyło', 'leczyliśmy', 'leczyliście', 'leczyli', 'leczyłyśmy', 'leczyłyście', 'leczyły', 'leczyłbym', 'leczyłbyś', 'leczyłby', 'leczyłabym', 'leczyłbyś', 'leczyłyby', 'leczyłobym', 'leczyłobyś', 'leczyłoby', 'leczylibyśmy', 'leczylibyście', 'leczyliby', 'leczyłybyśmy', 'leczyłybyście', 'leczono', 'leczony', 'leczywszy',  'leczenie']},
				{name: 'szczepienie', main: 'szczepienie', inflections: ['szczepić', 'szczepię', 'szczepisz', 'szczepi', 'szczepimy', 'szczepicie', 'szczepią', 'szczep', 'szczepmy', 'szczepcie', 'szczepiąc', 'szczepiący', 'szczepiłem', 'szczepiłeś', 'szczepił', 'szczepiłam', 'szczepiłaś', 'szczepiła', 'szczepiłom', 'szczepiłoś', 'szczepiło', 'szczepiliśmy', 'szczepiliście', 'szczepili', 'szczepiłyśmy', 'szczepiłyście', 'szczepiły', 'briniłbym', 'szczepiłbyś', 'szczepiłby', 'szczepiłabym', 'szczepiłabyś', 'szczepiłyby', 'szczepiłobym', 'szczepiłobyś', 'szczepiłoby', 'szczepibyśmy', 'szczepibyście', 'szczepiliby', 'szczepiłybyśmy', 'szczepiłybyście', 'szczepiono', 'szczepiony','szczepienie']},
				{name: 'wystawianie', main: 'wystawianie', inflections: ['wystawiać','wystawiam','wystawiasz','wystawia','wystawiamy','wystawiacie','wystawiają','wystawiałem','wystawiałam','wystawiałeś','wystawiałaś','wystawiał','wystawiała','wystawiało','wystawialiśmy','wystawiałyśmy','wystawialiście','wystawiałyście','wystawiali','wystawiały','wystawiałbym','wystawiałabym','wystawiałbyś','wystawiałabyś','wystawiałby','wystawiałaby','wystawiałoby','wystawialibyśmy','wystawiałybyśmy','wystawialibyście','wystawiałybyście','wystawialiby','wystawiałyby','wystawiaj','wystawiajmy','wystawiajcie','wystawiający','wystawiany','wystawiając','wystawiano','wystawianie']},
				{name: 'testowanie', main: 'testowanie', inflections: ['testować','testuję','testujesz','testuje','testujemy','testujecie','testują','testowałem','testowałam','testowałeś','testowałaś','testował','testowała','testowało','testowaliśmy','testowałyśmy','testowaliście','testowałyście','testowali','testowały','testowałbym','testowałabym','testowałbyś','testowałabyś','testowałby','testowałaby','testowałoby','testowalibyśmy','testowałybyśmy','testowalibyście','testowałybyście','testowaliby','testowałyby','testuj','testujmy','testujcie','testujący','testowany','testując','testowano','testowanie']},
				{name: 'tworzenie', main: 'tworzenie', inflections: ['tworzyć', 'tworzę', 'tworzysz', 'tworzy', 'tworzymy', 'tworzycie', 'tworzą', 'twórz', 'twórzmy', 'twórzcie', 'tworząc', 'tworzący', 'tworzyłem', 'tworzyłeś', 'tworzył', 'tworzyłam', 'tworzyłaś', 'tworzyła', 'tworzyłom', 'tworzyłoś', 'tworzyło', 'tworzyliśmy', 'tworzyliście', 'tworzyli', 'tworzyłyśmy', 'tworzyłyście', 'tworzyły', 'tworzyłbym', 'tworzyłbyś', 'tworzyłby', 'tworzyłabym', 'tworzyłbyś', 'tworzyłyby', 'tworzyłobym', 'tworzyłobyś', 'tworzyłoby', 'tworzylibyśmy', 'tworzylibyście', 'tworzyliby', 'tworzyłybyśmy', 'tworzyłybyście', 'tworzono', 'tworzony', 'tworzywszy',  'tworzenie']},
				{name: 'pisanie', main: 'pisanie', inflections: ['pisać', 'pisanie', 'piszę', 'piszesz', 'pisze', 'piszemy', 'piszecie', 'piszą', 'pisz', 'piszmy', 'piszcie', 'pisząc', 'piszący', 'pisałem', 'pisałeś', 'pisał', 'pisałam', 'pisałaś', 'pisała', 'pisałom', 'pisałoś', 'pisało', 'pisaliśmy', 'pisaliście', 'pisali', 'pisałyśmy', 'pisałyście', 'pisały', 'pisałbym', 'pisałbyś', 'pisałby', 'pisałabym', 'pisałbyś', 'pisałyby', 'pisałobym', 'pisałobyś', 'pisałoby', 'pisalibyśmy', 'pisalibyście', 'pisaliby', 'pisałybyśmy', 'pisałybyście', 'pisano', 'pisany', 'pisawszy']},
				{name: 'planowanie', main: 'planowanie', inflections: ['planować', 'planuję', 'planujesz', 'planuje', 'planujemy', 'planujecie', 'planują', 'planuj', 'planujmy', 'planujcie', 'planując', 'planujący', 'planowałem', 'planowałeś', 'planował', 'planowałam', 'planowałaś', 'planowała', 'planowałom', 'planowałoś', 'planowało', 'planowaliśmy', 'planowaliście', 'planowali', 'planowałyśmy', 'planowałyście', 'planowały', 'planowałbym', 'planowałbyś', 'planowałby', 'planowałabym', 'planowałbyś', 'planowałyby', 'planowałobym', 'planowałobyś', 'planowałoby', 'planowalibyśmy', 'planowalibyście', 'planowaliby', 'planowałybyśmy', 'planowałybyście', 'planowano', 'planowany', 'planowawszy', 'planować', 'planowałem', 'planowałeś', 'planował', 'planowałam', 'planowałaś', 'planowała', 'planowałom', 'planowałoś', 'planowało', 'planowaliśmy', 'planowaliście', 'planowali', 'planowałyśmy', 'planowałyście', 'planowały', 'planowałbym', 'planowałbyś', 'planowałby', 'planowałabym', 'planowałbyś', 'planowałyby', 'planowałobym', 'planowałobyś', 'planowałoby', 'planowalibyśmy', 'planowalibyście', 'planowaliby', 'planowałybyśmy', 'planowałybyście', 'planowano', 'planowany', 'planowanie']},

				],
			states:
			{
				klient: [['ważne', 'ważny', 'ważnego'], ['bogaty', 'bogata', 'bogate', 'bogatych', 'bogatej', 'bogatego']],
				gwiazda: [['jasna','jasne','jasnej','jasną','jasny'], ['odległy', 'odległa', 'odległe', 'odległych', 'odległej', 'odległego', 'odległą', 'odległych']],
				choreografia: [['piękna','piękne','pięknej','piękną','piękny'], ['trudna', 'trudny', 'trudne', 'trudnych', 'trudnej', 'trudnego']],
				konkurs: [['międzynarodowa','międzynarodowe','międzynarodowej','międzynarodową','międzynarodowy'], ['prestiżowy', 'prestiżowa', 'prestiżowe', 'prestiżowych', 'prestiżowej', 'prestiżowego']],
				mysz: [['zwinna','zwinne','zwinnej','zwinną','zwinny'], ['sprytna', 'sprytny', 'sprytne', 'sprytnych', 'sprytnej', 'sprytnego']],
				karma: [['smaczna','smaczne','smacznej','smaczną','smaczny'], ['odległy', 'odległa', 'odległe', 'odległych', 'odległej', 'odległego', 'odległą', 'odległych']],
				lek: [['drogie', 'droga', 'drogi', 'drogich', 'drogiej', 'drogiego'], ['skuteczne', 'skuteczny', 'skuteczna', 'skutecznych', 'skutecznej', 'skutecznego']],
				pacjent: [['wymagający', 'wymagająca', 'wymagające', 'wymagających', 'wymagającej', 'wymagającego'], ['natrętny','natrętni','natrętnego','natrętnemu','natrętnych','natrętnym']],
				drapak: [['zniszczony', 'zniszczona', 'zniszczone', 'zniszczonych', 'zniszczonej', 'zniszczonego'], ['duże', 'duży', 'duża', 'dużych', 'dużej', 'dużego']],
				przyszłość: [['niebezpieczny', 'niebezpieczna', 'niebezpieczne', 'niebezpiecznych', 'niebezpiecznej', 'niebezpiecznego'], ['interesujący', 'interesujące', 'interesująca', 'interesujących', 'interesującej', 'interesującego']],
				tarot: [['skomplikowane', 'skomplikowany', 'skomplikowana', 'skomplikowanych', 'skomplikowanej', 'skomplikowanego'], ['trudna', 'trudny', 'trudne', 'trudnych', 'trudnej', 'trudnego']],
				równanie: [['skomplikowane', 'skomplikowany', 'skomplikowana', 'skomplikowanych', 'skomplikowanej', 'skomplikowanego'], ['trudna', 'trudny', 'trudne', 'trudnych', 'trudnej', 'trudnego']],
				kwiat: [['piękna','piękne','pięknej','piękną','piękny'],['biała','białej','białą','białe','białych','białym','białymi']],
				zwierzę: [['duże', 'duży', 'duża', 'dużych', 'dużej', 'dużego'], ['przestraszone', 'przestraszony', 'przestraszona', 'przestraszonych', 'przestraszonej', 'przestraszonego']],
				recepta: [['skomplikowane', 'skomplikowany', 'skomplikowana', 'skomplikowanych', 'skomplikowanej', 'skomplikowanego'], ['drogie', 'droga', 'drogi', 'drogich', 'drogiej', 'drogiego']],
				badanie: [['skomplikowane', 'skomplikowany', 'skomplikowana', 'skomplikowanych', 'skomplikowanej', 'skomplikowanego'], ['drogie', 'droga', 'drogi', 'drogich', 'drogiej', 'drogiego']],
			}
		},
		rules: [
			{
				actor: 'adwokat',
				action: 'bronienie',
				object: 'klient',
				print: 'bronienie klienta',
				print_one: 'bronienie ważnego klienta',
				print_two: 'bronienie bogatego klienta'
			},
			{
				actor: 'adwokat',
				action: 'reprezentowanie',
				object: 'klient',
				print: 'reprezentowanie klienta',
				print_one: 'reprezentowanie ważnego klienta',
				print_two: 'reprezentowanie bogatego klienta'
			},
				{
				actor: 'adwokat',
				action: 'doradzanie',
				object: 'klient',
				print: 'doradzanie klientowi',
				print_one: 'doradzanie ważnemu klientowi',
				print_two: 'doradzanie bogatemu klientowi'
			},
			{
				actor: 'astronom',
				action: 'obserwowanie',
				object: 'gwiazda',
				print: 'obserwowanie gwiazdy',
				print_one: 'obserwowanie gwiazdy',
				print_two: 'obserwowanie gwiazdy'
			},
						{
				actor: 'astronom',
				action: 'obliczanie',
				object: 'równań',
				print: 'obliczanie równań',
				print_one: 'obliczanie skomplikowanych równań',
				print_two: 'obliczanie trudnych równań'
			},
								{
				actor: 'astronom',
				action: 'planowanie',
				object: 'badań',
				print: 'planowanie badań',
				print_one: 'planowanie drogich badań',
				print_two: 'planowanie skomplikowanych badań'
			},
			{
				actor: 'kot',
				action: 'łapanie',
				object: 'mysz',
				print: 'łapanie myszy',
				print_one: 'łapanie sprytnej myszy',
				print_two: 'łapanie zwinnej myszy'
			},
			{
				actor: 'kot',
				action: 'jedzenie',
				object: 'karma',
				print: 'jedzenie karmy',
				print_one: 'jedzenie smacznej karmy',
				print_two: 'jedzenie pysznej karmy'
			},
						{
				actor: 'kot',
				action: 'drapanie',
				object: 'drapak',
				print: 'drapanie drapaka',
				print_one: 'drapanie zniszczonego drapaka',
				print_two: 'drapanie dużego drapaka'
			},
			{
				actor: 'aptekarz',
				action: 'sprzedawanienie',
				object: 'lek',
				print: 'sprzedawanie leków',
				print_one: 'sprzedawanie skutecznych leków',
				print_two: 'sprzedawanie drogich leków'
			},
		{
				actor: 'aptekarz',
				action: 'sporządzanie',
				object: 'lek',
				print: 'sporządzanie leków',
				print_one: 'sporządzanie skutecznych leków',
				print_two: 'sporządzanie drogich leków'
			},
				{
				actor: 'aptekarz',
				action: 'doradzanie',
				object: 'pacjent',
				print: 'doradzanie pacjentom',
				print_one: 'doradzanie wymagającym pacjentom',
				print_two: 'doradzanie natrętnym pacjentom'
			},
			{
				actor: 'wróżka',
				action: 'przepowiadanie',
				object: 'przyszłość',
				print: 'przepowiadanie przyszłości',
				print_one: 'przepowiadanie niebezpiecznej przyszłości',
				print_two: 'przepowiadanie interesującej przyszłości'
			},
			{
				actor: 'wróżka',
				action: 'układanie',
				object: 'tarot',
				print: 'układanie tarota',
				print_one: 'układanie skomplikowanego tarota',
				print_two: 'układanie drogiego tarota'
			},
			{
				actor: 'wróżka',
				action: 'doradzanie',
				object: 'klient',
				print: 'doradzanie klientowi',
				print_one: 'doradzanie ważnemu klientowi',
				print_two: 'doradzanie bogatemu klientowi'
			},
			{
				actor: 'kwiaciarka',
				action: 'układanie',
				object: 'kwiat',
				print: 'układanie kwiatów',
				print_one: 'układanie pięknych kwiatów',
				print_two: 'układanie białych kwiatów'
			},
			{
				actor: 'kwiaciarka',
				action: 'sprzedawanie',
				object: 'kwiat',
				print: 'sprzedawanie kwiatów',
				print_one: 'sprzedawanie pięknych kwiatów',
				print_two: 'sprzedawanie białych kwiatów'
			},
			{
				actor: 'kwiaciarka',
				action: 'podlewanie',
				object: 'kwiat',
				print: 'podlewanie kwiatów',
				print_one: 'podlewanie pięknych kwiatów',
				print_two: 'podlewanie białych kwiatów'
			},
			{
				actor: 'lekarz',
				action: 'leczenie',
				object: 'pacjent',
				print: 'leczenie pacjentów',
				print_one: 'leczenie wymagających pacjentów',
				print_two: 'leczenie natrętnych pacjentów'
			},
			{
				actor: 'lekarz',
				action: 'szczepienie',
				object: 'pacjent',
				print: 'szczepienie pacjentów',
				print_one: 'szczepienie wymagających pacjentów',
				print_two: 'szczepienie natrętnych pacjentów'
			},
				{
				actor: 'lekarz',
				action: 'wystawianie',
				object: 'receptt',
				print: 'wystawianie recept',
				print_one: 'wystawianie drogich recept',
				print_two: 'wystawianie skomplikowanych recept'
			},
			{
				actor: 'weterynarz',
				action: 'leczenie',
				object: 'zwierzę',
				print: 'leczenie zwierzęcia',
				print_one: 'leczenie dużego zwierzęcia',
				print_two: 'leczenie przestraszonego zwierzęcia'
			},
			{
				actor: 'weterynarz',
				action: 'szczepienie',
				object: 'zwierzę',
				print: 'szczepienie zwierzęcia',
				print_one: 'szczepienie dużego zwierzęcia',
				print_two: 'szczepienie przestraszonego zwierzęcia'
			},
			{
				actor: 'weterynarz',
				action: 'wystawianie',
				object: 'receptt',
				print: 'wystawianie recept',
				print_one: 'wystawianie drogich recept',
				print_two: 'wystawianie skomplikowanych recept'
			},
			{
				actor: 'programista',
				action: 'pisanie',
				object: 'program',
				print: 'pisanie programu',
				print_one: 'pisanie skomplikowanego programu',
				print_two: 'pisanie drogiego programu'
			},
			{
				actor: 'programista',
				action: 'testowanie',
				object: 'kod',
				print: 'testowanie kodu',
				print_one: 'testowanie skomplikowanego kodu',
				print_two: 'testowanie krótkiego kodu'
			},
			{
				actor: 'programista',
				action: 'tworzenie',
				object: 'algorytm',
				print: 'tworzenie algorytmu',
				print_one: 'tworzenie skomplikowanego algorytmu',
				print_two: 'tworzenie trudnego algorytmu'
			}

		],
		print_rules: function(){
			$('#rules').removeClass('inactive');

			$('#viewer').html('');
			$('#viewer').append('<h3>Reguły:</h3><br>');
			_.each(main.rules, function(rule){
				$('#viewer').append('<p>JEŻELI '+ '<b>' + rule.actor + '</b>' + ' TO ' + rule.print+'</p>');
				$('#viewer').append('<br>');
			});
		},
		print_symbols: function(){
			$('#symbols').removeClass('inactive');

			$('#viewer').html('');
			$('#viewer').append('<div id="viewer_left" class="viewer-divider"></div>');
			$('#viewer').append('<div id="viewer_center" class="viewer-divider"></div>');
			$('#viewer').append('<div id="viewer_right" class="viewer-divider"></div>');

			$('#viewer_left').append('<h3>Obiekty:</h3><br>');
			_.each(main.dictionary.objects, function(object){
				if(object.name === object.main){
					$('#viewer_left').append('<p>'+object.name+'</p>');
				}
			});

			$('#viewer_center').append('<h3>Akcje:</h3><br>');
			_.each(main.dictionary.actions, function(action){
				if(action.name === action.main){
					$('#viewer_center').append('<p>'+action.name+'</p>');
				}
			});
			$('#viewer').append('<br>');
			$('#viewer_right').append('<h3>Stany:</h3><br>');
			_.each(main.dictionary.states, function(value, key){
				$('#viewer_right').append('<p><strong>' + key + '</strong></span> - ' + '<span>&nbsp;&nbsp;' + value[0][0] + ', ' + value[1][0] + '</p>');
			});
		},
		print_inflections: function(){
			$('#inflections').removeClass('inactive');

			$('#viewer').html('');
			$('#viewer').append('<h3>Odmiana:</h3><br>');
			_.each(main.dictionary.objects.concat(main.dictionary.actions), function(obj){
				$('#viewer').append('<p class="obj-name">'+obj.name+'</p>' + '<p class="obj-infl">' + obj.inflections.join(', ') + '</p>');
			});
		},
		print_synonyms: function(){
			$('#synonyms').removeClass('inactive');

			$('#viewer').html('');
			$('#viewer').append('<h3>Synonimy:</h3><br>');
			_.each(main.dictionary.objects.concat(main.dictionary.actions), function(obj){
				if(obj.name == obj.main){
					var synonyms = _.filter(main.dictionary.objects.concat(main.dictionary.actions), function(e){ return e.main === obj.name && e.name !== obj.name; });
					synonyms = _.map(synonyms, function(e){ return e.name; });
                    if(synonyms != ""){
												$('#viewer').append('<p class="'+obj.name+'"></p>')
                        $('.'+obj.name).append(obj.name + ' = ');
                        $('.'+obj.name).append(synonyms.join(', '));
                    }
				}
			});
		},
		show_main_page: function(){
			$('#main-page').removeClass('inactive');

			$('#viewer').html('');
			$('#viewer').append('<p class="center">Twoje zapytanie musi zawierać podmiot lub akcję i przedmiot.</p>');
		}
	};
})();

function Application(){
	var actor = '',
		action = '',
		object = '',
		genitive = '',
		previous = '',
		answer = [];

	this.text = [];

	this.actor = function(){ return actor; };

	this.action = function(){ return action; };

	this.object = function(){ return object; };

	this.answer = function(){ return answer; };

	this.get_words_from = function(text){
		return _.map(text.match(/\S+/g), function(word){ return word.replace(/[^a-zA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ]/g, '').toLowerCase(); });
	};

	this.find_actor = function(){
		var result = '';
		var len = main.dictionary.objects.length;
		for(var i = 0; i < this.text.length; i++){
			if(actor.length > 0) { break; }
			var word = this.text[i];
			for(var j = 0; j < len; j++){
				if(main.dictionary.objects[j].type === 2){ continue; }
				var result = _.find(main.dictionary.objects[j].inflections, function(w){ return word === w; });
				if(result){
					actor = main.dictionary.objects[j].main;
					this.text.splice(i, 1);
					break;
				}
			}
		}
	};

	this.find_action = function(){
		var result = '';
		var len = main.dictionary.actions.length;
		for(var i = 0; i < this.text.length; i++){
			if(action.length > 0) { break; }
			var word = this.text[i];
			for(var j = 0; j < len; j++){
				var result = _.find(main.dictionary.actions[j].inflections, function(w){ return word === w; });
				if(result){
					action = main.dictionary.actions[j].main;
					this.text.splice(i, 1);
					break;
				}
			}
		}
	};

	this.find_object = function(){
		var result = '';
		var len = main.dictionary.objects.length;
		for(var i = 0; i < this.text.length; i++){
			if(object.length > 0) { break; }
			var word = this.text[i];
			for(var j = 0; j < len; j++){
				if(main.dictionary.objects[j].type === 1){ continue; }
				var result = _.find(main.dictionary.objects[j].inflections, function(w){ return word === w; });
				if(result){
					object = main.dictionary.objects[j].main;
					genitive = main.dictionary.objects[j].genitive;
					if(i > 0){
						previous = this.text[i-1]
					}
					this.text.splice(i, 1);
					break;
				}
			}
		}
	};

	this.find_state = function(){
		var result = 0;
		if(previous.length > 0){
			for(var i = 0; i < main.dictionary.states[object].length; i++){
				var check = _.find(main.dictionary.states[object][i], function(w){ return previous === w; });
				if(check){
					result = i + 1;
					break;
				}
			}
		}
		console.log(result);
		return result;
	};

	this.check_rules = function(){
		if(actor === ''){
			if(action != '' && object != ''){
				var arr = [];
				var res = _.filter(main.rules, function(r){ return r.action === action && r.object === object; });
				// answer = ['=== NIE']
				_.each(res, function(r){answer.push(r.print + ' możliwe: ' + r.actor)});
                if(answer == ''){
                    answer = ["Niepoprawne połączenie akcji z przedmiotem."];
                }
				return;
			}else{
				answer = ["Twoje zapytanie musi zawierać podmiot lub akcję i przedmiot."];
				return;
			}
		}else if(action === ''){
			answer = ['']
			var results = _.where(main.rules, {actor: actor});
			_.each(results, function(r){answer.push(r.actor + ' możliwe: ' + r.print)});
			return;
		}
		var result = _.find(main.rules, function(r){ return r.actor === actor && r.action === action && r.object === object; });
		if(result){
			var has_state = this.find_state();
			var print = result.print;
			if(has_state === 1){
				print = result.print_one;
			}else if(has_state === 2){
				print = result.print_two
			}
			answer = ['<p class="green small-margin">TAK</p>', actor + ' możliwe: ' + print];
		}else{
			answer = ['<p class="red small-margin">NIE</p>', actor + ' niemożliwe: ' + action + ' ' + genitive];
		}

        if(answer == ''){
            answer = ["Twoje zapytanie musi zawierać podmiot lub akcję i przedmiot."];
        }
	};

	this.print_answer = function(){
		$('#answer').html('');
		_.each(answer, function(el){
			$('#answer').append(el);
			$('#answer').append('<br>');
		});
	};
};

$('#rules').click(main.print_rules);
$('#symbols').click(main.print_symbols);
$('#inflections').click(main.print_inflections);
$('#synonyms').click(main.print_synonyms);
$('#main-page').click(main.show_main_page);

var app;

$("#search-form").keyup(function(event){
    if(event.keyCode == 13){
			app = new Application();
			var text = $(this).val();
			app.text = app.get_words_from(text);
			app.find_actor();
			app.find_action();
			app.find_object();
			app.check_rules();
			app.print_answer();
    }
});

$('#searcher').on('click', function(){
	app = new Application();
	var text = $("#search-form").val();
	app.text = app.get_words_from(text);
	app.find_actor();
	app.find_action();
	app.find_object();
	app.check_rules();
	app.print_answer();
});

main.show_main_page();

