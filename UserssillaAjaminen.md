# Palvelimen ajo #
Webbiserveri pitää käynnistää porttiin 5435 (python manage.py runserver 5435), johon käyttäjän tkt\_gviz (http://tkt_gvis.users.cs.helsinki.fi) kotisivupyynnöt ohjataan apachen kautta (~/htdocs/.htaccess) (Porttinumeroksi valittu se portti minkä wanna-tomcat-skripti antoi käyttäjäkohtaista tomcat-prosessia varten, tämä valittu siksi ettei suututeta admineita tai muita ihmisiä; toisaalta nyt tkt\_gvis-käyttäjällä ei voi ajaa tomcattia samaan aikaan kun http-palvelin on päällä!

Ajetetaanhan sitten http-palvelinta screenissä, jotta se pysyy päällä jos ssh-yhteys katkeaa, ja että kaikki voivat sammuttaa ja käynnistää sen uudelleen helposti.

TL;DR: `screen -rd` ja sinne `python manage.py runserver 5435` (löytynee luultavasti komentohistoriasta); CTRL-c sulkee

# Testit #
## Yleistä ##
Automaattisia testejä ajellaan Dezgegin tmtynkky-käyttäjällä käyttäen sen tunnuksen postgres-kantaa koska a) testitietokanta jyrätään aina testien yhteydessä, joten pitää käyttää eri kantaa, eikä postgresin ident-autenkoinnin takia voi yhdistää muiden käyttäjien kantoja (ELLEI kantojen käyttäjäoikeuksia pysty muuttamaan, mikä ei tullut mieleen siinä vaiheessa kun testausta viriteltiin) ja b) oletuksena djangon testaaja haluaa tuhota ja uudelleen luoda testikannan (DROP DATABASE ...; CREATE DATABASE ..), mihin userssilla ei luonnollisestikaan ole oikeuksia, ja kyseinen "feature" on kierretty  hieman kyseenalaisilla, ei-tuotantokäyttöön sopivilla keinoilla.

## Hudson ##
Löytyy osoitteesta http://t-tmtynkky.users.cs.helsinki.fi/hudson/. Edellä mainituista syistä sitä ajetaan tmtynkky-käyttäjän tomcatilla. Ikävänä seurauksena vain Dezgeg voi käynnistää sen, jos se kaatuu. Jos tarve vaatii, Dezgeg voi väsätä jonkun skriptin käynnistämään sen esim. php:lla.

Jotta adminit eivät tappaisi ja kiduttaisi, Hudsonin asetukset on salasanasuojattu, testejä voi ajaa ja niiden tuloksia tarkistella ilman kirjautumista. Hudsonin irkkibotti-plugini on myös asennettu, ja se pyörii #geovision'illa Geobot-nimellä. Sitä komennetaan `!geobot`-prefiksoiduilla komennoilla. Sille on luotu alias testien ajamiselle `(!geobot runtests (== !geobot build geovision now))`

Ajokomentona on seuraava, mikä ajaa testien lisäksi myös code coveragen:
```
PATH=$PATH:$HOME/.local/bin/
EXCLUDE='*manage*,*__init__*'
cd src/geovision
rm -rf $HOME/tomcat/webapps/coverage/*
coverage erase
coverage run --source=geovision manage.py test --verbosity 2
coverage report --omit "$EXCLUDE"
coverage html -d $HOME/tomcat/webapps/coverage --omit "$EXCLUDE"
```

## Code Coverage ##
Löytyy osoitteesta http://t-tmtynkky.users.cs.helsinki.fi/coverage/. Coverage luodaan automaattisesti hudson-testien yhteydessä.