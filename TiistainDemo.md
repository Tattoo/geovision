Demottavat asiat:
  * haut (ainakin entsyymillä)
    * entsyymien autocomplete
  * graafin kaikki tiedot
    * tooltipit
    * lisätiedot klikkaamalla oikeaan sivupalkkiin
    * oikeaklikkivalikko
      * linkit ulkoisiin kantoihin
      * alignment
  * graafissa kulku
    * noodien avaus
    * tägäys ym.
    * lisää noodeja
    * poisto (jos ehditään toteuttamaan)
    * contract (jos säilytetään & fiksataan, luultavasti ei)
    * värien säätö
    * bitscorefiltteröijä (jos saadaan toimimaan)

Esimerkkikäyttötapauksehdotuksia:
  * Etsi DB-entry O05625, näytä sille jokin linjaus, tagaa lähin entsyymi, katso sen tiedot ja tagaa polku siitä eteenpäin ja poista tagaamattomat
  * Etsi 4.1.1.1 -> Q9P7P6 -> 201803651; avaa 1.4.1.13:sta pathway Nitrogen metabolism
  * Hae alcohol dehydrogenase ja säädä kaaret niin että kaikista kaarista tulee vihreitä. Sitten hae lisää yhteyksiä oikeaklikkauksen kautta keskinodelle. Sitten pikafiltteröi kaikki alle 353:n arvoiset pois

Parannusehdotuksia:
  * Sample selection -> vain tietyt näytteet
  * metadataa lisää (esim. syvyys tai sijainti)
  * skaalautuvuus?
  * datan/graafin dumppaaminen/export HALUTUIN ON KAIT TÄMÄ: kuvana ja/tai sekvenssit ulos?
  * tilanteen tallentaminen
  * avaako lisäyhteydet alle bitscoren?
  * bugi: hakee aina samalla e-valuella
  * bugi:subgraphin tagaaminen ei toimi
  * kahden eri entsyymin välistä yhteyttä ei voi hakea? pitäisikö voida?
  * useampi alignment kerralla, linjauksiin id:t (voin tehdä, T: Aurora)
  * Undo
  * useampi kuva yhtäaikaa?
  * pitäiskö myös huonoimpia hittejä päästä katselemaan? Esalta pitää kysyä. Nyt on ongelmana se että jos hittejä on liikaa niin viimeisiä ei millään saa näkymään.