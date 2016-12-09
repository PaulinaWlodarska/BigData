## Instrukcja obsługi

a) lepsza - serwując pliki przez http

Żeby odpalić projekt potrzeba dowolny serwer http. W przypadku szablonu admina jest plik główny i ajaxem doładowywana treść do poszczególnych podstron, żeby nie trzeba się było bawić w żadne php, javy i te sprawy.
* ściągamy repo
* przechodzimy do katalogu szablony: cd szablony
* odpalamy serwer (instrukcja poniżej jak to zrobić)
* przechodzimy do strony localhost:NUMERPORTU/pages/admin.html lub login.html
* powinno działać

Odpalenie serwera:

Ja akurat mam na kompie Pythona, więc wystarczy odpalić polecenie "python -m http.server NUMERPORTU" gdzie NUMERPORTU to dowolny numer - czasem na 80 nie działa, więc sugeruję inny

Jak ktoś nie ma pythona to może zainstalować sobie NPM, a potem simplehttpserver a robi się to tak (na Windowsie)

Instalacja NPM http://blog.teamtreehouse.com/install-node-js-npm-windows

Instalacja i uruchomienie simplehttpserver https://www.npmjs.com/package/simplehttpserver

b) gorsza, ale szybsza

Jak komuś się nie chce tego instalować itp., to może bez serwera otworzyć plik admin.html w Firefoxie i też powinno działać, ale nie będzie ikonek. Na chrome nie zadziała, bo na Chrome nie można z lokalnych plików uruchamiać XHR.