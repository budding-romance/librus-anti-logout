# Librus Anti-Logout
> Wtyczka umożliwiająca szybsze zalogowanie się, oraz pozbycie się irytującego logoutu.

Wyobraźcie sobie świat gdy po 45 minutowej lekcji nie musicie logować się na Librusa ponownie, tylko po to aby przejść na kolejną lekcję, a zaraz po niej zrobić to samo... \
Ten sam irytujący znak STOP, często powodujący spóźnienia na lekcje, wywołujący zirytowanie w oczach uczniów... 

![](stop.png)

Dzięki tej wtyczce już więcej tego nie ujrzycie! :) \
Co dokładnie 10 minut strona sama się odświeży zapobiegając wyczerpaniu się waszego Session Timeout. \
Wtyczka zawiera również redirect umożliwiający szybsze zalogowanie się uczniom gdy wyczyszczą dane przeglądarki. \
(lub gdy używają trybu incognito) \
To niby nic, a jednak oszczędza dużo czasu. 

W przyszłości planuję dodać opcję zmiany czasu odświeżania, jednakże na tą chwilę trzeba ręcznie edytować plik refresh.js \
(CZAS JEST ZAPISANY W MILISEKUNDACH!) 

## Instalacja

Google Chrome:

* chrome://extensions
* Tryb dewelopera
* Załaduj rozpakowane
* Wybierz folder z rozpakowanym rozszerzeniem
* Zaloguj się na Synergię
* Naciśnij na ikonkę wtyczki i naciśnij przycisk "Click!" na pop-upie

Jeżeli wszystko działa, dostaniesz powiadomienie ze strony.

W przypadku gdy nic się nie pokaże:
* chrome://extensions
* Kliknij w Szczegóły wtyczki Librus Anti-Logout
* W kategorii Uprawnienia zaznacz opcję:
  Dostęp do stron\
  Zezwól temu rozszerzeniu na odczytywanie i zmienianie wszystkich Twoich danych na stronach, które otwierasz:\
  We wszystkich witrynach

## Release History

* 1.0
    * ADD: redirect
	* ADD: auto refresh
