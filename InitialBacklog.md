Lisätkää asioita sitä mukaan kun mieleen tulee.

# Initial Backlog #

Lisensointi GPLv2? - tattoo hoitaa

## Työkalut ##

Netbeans
  * versiot
  * framework ja python yhteensopivuus

Mercurial
  * google code asetukset
  * opettelu

Google code
  * projektin teko - jannel
  * asetukset
  * työkalujen käytön opettelu

Webframework ja muu palvelinympäristö
  * ryhmähakemisto 8 merkkiä - tkt\_gvis, valmis käyttöön
  * pystyttäminen
  * Frameworkin valinta
    1. https://www.djangoproject.com/
  * templatekirjaston vaihto/valinta
    * http://jinja.pocoo.org/
  * Apachen asetukset usersille
  * Frameworkin yhtensopivuus visualisointityökalun kanssa
  * Automaattinen integrointi ja testaus
    * Django
      1. http://hudson-ci.org/
      1. https://github.com/jbalogh/django-nose
      1. http://heisel.org/blog/2009/11/21/django-hudson/
      1. http://www.caktusgroup.com/blog/2010/03/08/django-and-hudson-ci-day-1/
      1. Muita hyviä vaihtoehtoja kuin hudson + nose?
  * tietokannan pystytys
    * PostgreSQL
    * riittääkö usersilla tila ja potku, kysy ylläpidolta

Verkon visualisointi dynaamisesti nettisivulle
  * työkalu?
    1. http://processingjs.org/
    1. http://jquery.com/
    1. http://www.cytoscape.org/
    1. asiakas yrittää laitokselta työkalua testattavaksi
    1. muita?
  * riittääkö javascriptin teho ja venyvyys
  * joudutaanko dataa käsittelemään, riittääkö pythonin teho
  * missä tehdään visualisoinnin vaatima laskenta ja millä kielellä

### Data ###
/group/home/urenzyme/geoviz/
  * ei välttämättä muutu projektin aikana
  * samplet ei muutu
  * osa datasta voi muuttua radikaalisti
  * mikä tietokantamalli ratkaisuksi - SQL?
    * tietokannan suunnittelu
  * käyttäjälle mahdollisuus ajaa analyysiskriptejä
    * eri koneet joilla ajetaan visualisointia ja datan generointia
    * rajapinta jolle voi kertoa mistä samplesta halutaan generoida uutta dataa

## Henkilöt ##
  * poissaolot
    1. Asiakas heinä-elokussa
  * työmäärän jakaminen

## Vaihe 1 - olemassaolevan esitys ##
  * minkälaista dataa?
    * samples - raakadataa josta pitää voida hakea haluttu readi näkyviin, kokoelmia yksittäisistä tiedostoista
    * blast - yhteys read < - > database sequence
      * taulukoita joissa on tietokannasta matchatyt sekvenssit
      * tietokantatunnus muotoa sp|id|id, molemmat id:t uniikkeja
      * tiedostoformaatti readme:ssa
      * matchatty osa yksi-yhteen
      * voi olla matchatty useaan database sequenceen tai yhteen monta kertaa
    * build result
      * sarakkeet ? | ? | luotettavuus (vähemmän tärkeä) | funktionaalinen luokka (tärkeä) | P-arvo (myös blastissa) |
  * onko entsyymi aineistossa ja montako matchia
    * haku entsyymin tunniste
    * haku entsyymin nimi (= funktionaalinen luokka)
    * nimet ei tässä aineistossa
    * parhaat ensin, pieni P arvo parempi

  * filtteröinti
    * esimerkiksi n lyhintä polkua johonkin maaliin


Käyttäjä haluaa käsiksi 1. entsyymiin, 2. matcheihin 3. dna - proteiinisekvenssin vastaavuus, luettavissa blastista


Käyttötapaus: Entsyymihaku EC 1.1.1.22 -> aukeaa verkko -> jokainen siitä lähtevä solmu tietokannan sekvenssi -> näistä jokaisesta aukeaa verkko josta näkyy matchaavat readit ja yhteydet muihin EC-luokkiin

Tässä ei näy proteiini-dna-vastaavuus, sille erillinen näkymä?

DB sekvenssit ja funktionaaliset luokat pitää linkittää ulkopuolisiin tietokantoihin URL-muodossa (ulkopuolisiin sivuihin).

## Vaihe 2 - käyttäjäoikeudet ##
  * onnistuuko helposti djangon sisäänrakennetulla hallinnalla
  * halutaanko yksilöidä käyttäjät
  * tallennus käyttäjäkohtaisesti

## Vaihe 3  - dynaaminen metaboliapolkujen visualisointi ##
  * entsyymi -> reaktio -> entsyymi -> reaktio
  * entsyymidata funktionaalisista luokista
  * entsyymi -> reaktio -> entsyymi - data annetaan (backend tietokanta)
  * tavat
    1. Olemassaolevan systeemin käyttö KEGG - http://www.genome.jp/kegg/
      * laadukkaita käsinpiirrettyjä verkkoja, helppo värittää
      * yhteyksiä puuttuu
      * yhdessä verkossa ennalta rajattu alue
    1. itse toteuttaminen
      * voidaan piirtää verkosta kerralla kiinnostavat osat
      * päästään liikkumaan verkossa tasoittain eteenpäin
  * testidata riittävän isoa






---

Poissaolot:

Aurora: 19.-25.5.2011