# Backlog #


## sprint 1 30.5.-10.6. (Tatu) ##
  1. Tietokannan kasaaminen
    1. Tekstitiedostojen parsiminen - testit - koodaus - ajo
      1. `/samples/data/*.fasta` - 2 - Lasse
      1. `/databases/*/*.fasta` - 2 - Aurora
      1. `/blast/results/*.fasta` - 2 - Janne
      1. `/build/results/*.fasta` - 2 - Tuomas
    1. Ulkoisen nimitietokannan selvitys, suunnittelu - Lasse
  1. [Sivuston pohjan suunnittelu](http://code.google.com/p/geovision/wiki/PageStructure) ja suunnitellun pohjan toteutus - 3 - Aurora
    1. Menut
    1. Asettelu
  1. Käyttäjähallinta - Tuomas
    1. Etusivu (rekisteröityminen/login) - 1
    1. Testaus - 2
  1. Muun sivuston toteutuksen aloitus ja testaus - Janne
    1. Proto mockup-datalla
      1. Piirrettävän jsonin teko - 1
      1. Piirtotyökalun toimimaan saaminen - 3

---

18 työnteko, 5 kokoukset

## sprint 2 13.—22.6. (Janne) ##

  1. Tietokanta valmiiksi - 2 - Lasse
  1. Tietokantaan muutama uusi kenttä ja data ajo uusiksi - 4 - Lasse
  1. Graaffin integrointi tietokantaan - 6
    1. sopiva sampledata JSON-tiedostoksi - 1
    1. Graaffin uudelleen piirtely ja kontrollit menuihin - 5
      1. opettelu - 2
      1. kontrollit: bitscore, e-arvo, graaffin syvyys, osumien määrä - 3
  1. Demon valmistelu - 4 - Kaikki
  1. Käyttäjähallinnan testaus - 2
  1. Ulkoisen nimitietokannan selvitys, suunnittelu (entsyymin nimi, funktionaalinen luokka) - 2
  1. docstringit kaikkiin olemassaoleviin moduuleihin - 4 - Kaikki

---

16 työnteko, 8 kokoukset

## sprint 3 22.—8.7. (Aurora) ##

  1. Kyselyjen nopeutus/json parseri uusiksi - 9
    1. Erilaiset solmut eri väreillä
    1. Kaarten väritys bitscoren mukaan
  1. Jonkinlaisen "odotusscreenin" teko siksi aikaa kun graafi lataa - 3
  1. Verkon dynaaminen läpikäynti (uusi verkko reunalta) - 4
  1. Readien ja tietokantadatan linjaus - 4
  1. Ehkä linjausdatan ajo tietokantaan - 3
  1. Ulkoisen nimitietokannan käyttö/parsiminen omaan tietokantaan (nimi <> EC) - 3
(  # Perseilyvaraa - 8)
26 työteko, 6 kokoukset

---

## sprint 4 (Sundo) 11.7-15.7 ##
  1. eteenpäin kulkeminen/vanhojen poisto 6 - lasse
  1. entsyymihaku 2 - janne
  1. ulkoiseen tietokantaan linkit 2 - aurora
  1. entsyymisolmuihin entsyyminimet - 1 - aurora
  1. pienet korjaukset - 2
    1. linjauksen värityksen kääntö - done - aurora
    1. tutki väritykset - done - tuomas
    1. solmujen värikoodaus
    1. bugi: ei voi tehdä uutta hakua jos EC-linkkejä
    1. valikko katoaa kun hiiren vie täydennyskenttiin - aurora
  1. keggin enzyme, reaction, compound - tuomas
    1. taulujen teko - 1
    1. import - 2


plan: 1vk sprintti: viimeistellään nyk. visualisaatio
alustavasti: ensi pe klo 12:15, keskustelua metaboliapuolesta.

tarkista Q0422(bitscore: 1000)-gi|289...!

VTT:n tutkijat

16 työnteko, 4 kokoukset

---


## sprint 5 (Sundo) 18.7-29.7 ##

  1. Graafissa kulkeminen valmiiksi - 14
    1. Debuggaus - 4 - Tuomas ja Janne
    1. Käytettävyys - 10 - Lasse ja Tuomas
  1. Tiedot piilotetuista nodeista - 2 - Janne
  1. Käyttäjälle tieto lataamisesta - 2 - Aurora
  1. Bitscoren mukaan filtteröinti olemassaolevasta graafista - 3 - Aurora
  1. Käyttäjähallintaan tunnuksen aktivointi - 1 - Aurora
  1. Oma palvelin ylläpidolta - 2 - Lasse
  1. Metaboliapolkujen visualisointi - proto 5 - Tuomas ja Janne
  1. Supported browsers-info - 1 - Aurora

Asiakasdemo 28.7. klo 12

> 34 : Kokoukset 4, työnteko 30 - allokoitu 29


---


## sprint 6 (Tuomas) 1.-12.8. - banaaneja 39 kokoukset 2 yht 37 ##
  1. Testaus
    1. Nykyisten testien korjaus - 1 - Lähes tehty
    1. Javascript
      1. tutkitaan yksikkkotestausmahdollisuutta **laatukriteerit!** - 2 - kaikki
      1. harkitaan tyokaluja, esim JsHint, Qunit, Selenium - sis. edellisen
    1. **laatukriteerit** - 2 - kaikki, maanantaina
    1. Koodin lapikaynti - 1 - Tuomas
    1. HTML- ja CSS-validointi - 2 - Aurora
  1. Tunnettujen bugien korjaukset - 3 - melkein tehty
    1. entsyymi 5.1.1.10
    1. Context-ongelma aboutissa
    1. animaatioasetukset kuntoon
    1. Asetukset nakymaan asetuskentissa
  1. email kun kayttaja rekisteroityy - 2 - Tuomas
  1. Kayttoliittymamuutokset
    1. Navigointi **tehty**
      1. Contract pois
      1. Poistonappi tilalle - 2
      1. Tapa saada lisaa kaaria nakyviin - 2
    1. Filtteroinnin korjaus
      1. Muutetaan, etta ei hajota verkkoa 1 **tehty**
      1. Filtteriehto patemaan solmujen hakemiseen 0.5
      1. (Slideri filtterointiin?)
    1. Bitscorevaritys - 0.5
      1. Ohjeteksti **tehty**
      1. Varitysasetusten tallennus
    1. Tietokannan ja samplen nimen naytto - triv **tehty**
    1. Kirjotetaan helppia (ei-intuitiiviset asiat kayttajalle, esim. oikeaklikki) - 1
    1. Varaudutaan kaytettavyystestauksessa ilmeneviin muutostarpeisiin - 8
  1. Dokumentaatio - 9
    1. Asennus
    1. Datan importtaus
    1. DocumentationPrinciples

---

## sprint 7 (Janne) 15.-19.8. - banaaneja 20 kokoukset 1 yht. 16 ##

  1. Dokumentaatio - 5
    1. tietokannan dokumentointi - 1
    1. arkkitehtuurin dokumentointi - 2
    1. roadmapin teko - 1
    1. helpin viimeistely - 1 - **tehty**

  1. Testaus - 7
    1. qunit
      1. testidatan luonti - 1 **roadmappiin**
      1. testit bitscore, navigation ja events tiedostoille - 3 **tehty**
    1. python koodin testaus valmiiksi - 2 - **tehty**
    1. selenium - 1 **tehty**
  1. Projektin palautus - 1
    1. projektin polttaminen cd:lle - 0.5
    1. viimeistely - 0.5
  1. Asennusskriptien ja ohjeiden viimeistely - 2
    1. viimeistely - 1
    1. testiasennus - 1
  1. Webbiserverin pystytys ja testaus - 1