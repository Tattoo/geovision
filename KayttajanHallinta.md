# Asiakkaan toiveet (pdf:stä) #
## 1. Käyttäjähallinta ##
  * Välttämätöntä olisi sallia pääsy järjestelmään vain tunnistautuneille käyttäjille ja tarjota admin-käyttäjille yksinkertainen käyttäjähallinta. Oleellista olisi myös määritellä käyttäjäkohtaisesti pääsy näytekokoelmiin.
## 2. Datan hallinta ##
  * Käyttäjien pitäisi voida syöttää näytedata sekvenssitiedostona ja syöttää sille tarvittava metadata (täsmennän metadatan sisällön vielä). Näytteen poiston pitäisi onnistua myös.
  * Näytekokoelmien hallinta: tärkeintä on näytteiden ryhmittely, kokoelmien nimeäminen ja jako halutuille käyttäjille.
# Toteutus #
(Avoimista kysymyksistä laitettu mailia 25.5, saatu vastaus samana päivänä. [Alkuperäinen suunnitelma](http://code.google.com/p/geovision/source/detail?r=66aaf12f6006e26fd053a36dc428254e6d7f6ae4&repo=wiki))
## Osa 1. ##
  * Käytetään djangon valmista auth-moduulia. Se ratkaisee monet pikkuongelmat, kuten salasanojen suolaukset ja abstraktoi täysin kaikki sessioilla leikkimiset.
  * Käytetään djangon admin-moduulia adminin käyttäjänhallintaan.
  * Käyttäjän lisääminen tapahtuu perinteisellä rekisteröintisivulla. (asiakasmaili)
  * Rekisteröitymissivua ja login-sivua lukuunottamatta kaikki sovelluksen sivut ovat perus-käyttäjätunnus-salasana-suojauksen takana.
## Osa 2. ##
### Näytteen lisäys ###
  * Kirjautunut käyttäjä pystyy lisäämissivulta uploadaamaan sample-tiedoston ja syöttämään näytteeseen liittyvän (toistaiseksi määrittelemättömän) metadatan.
  * Myöskin näytteen ryhmittely tehdään lisäyksen yhteydessä, joskin sitä voidaan muuttaa jälkeenpäin.
### Näytteen ryhmittely ###
  * Näyteryhmälle ei ole toistaiseksi määritelty muuta tietoa kuin nimi.
  * Näyteryhmä kokoaa monta näytettä yhden nimikkeen alle, ja näyteryhmälle määritellään käyttäjät, jotka saavat käyttää sitä
  * Yksi näyte voi kuulua useaan näyteryhmään samaan aikaan, eli many-to-many, näyte ei välttämättä kuulu mihinkään näyteryhmään. (asiakasmaili)
  * Näytteen voi poistaa näyteryhmästä tai siirtää toisiin näyteryhmiin. Myöskin näyteryhmän voi poistaa.
  * Vain näyteryhmän luoja voi hallinoida näyteryhmää, eli lisätä/poistaa näytteitä/käyttäjiä (asiakasmaili).