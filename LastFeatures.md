Backlogista:
  * Filtteriehto patemaan solmujen hakemiseen 0.5
  * Varitysasetusten tallennus
Havaitut bugit:
  * hakee aina samalla e-valuella **korjattu**
  * subgraphin tagaukseen ja muihin tagauksiin paremmat helpit (kuvilla)
  * poistaminen on rikki, näkymättömiä juttuja jää (seka bitscorefiltteri etta poista kaikki tagaamattomat) - **korjattu**
  * bitscorefiltteri on kokonaan rikki - **korjattu**
  * entsyymihaku ei toimi oikein jos syvyys > 1

Asiakkaiden vaatimukset:
  * Sample selection -> vain tietyt näytteet **done** - janne
    * Samplejen nimet tietokantaan
    * Blast-EC-yhteydet pitäisi laskea joka samplelle erikseen
    * Hakukenttä hakupalkkiin, kyselyissä filter(samplein= ...)
    * Mitenhän käy kyselynopeudelle
  * datan/graafin dumppaaminen/export
    * Datana: tehdään valmiiksi export JSONiin **done**, lisätään roadmappiin 'kuinka teet exportin'
    * Kuvana: tutkitaan http://www.nihilogic.dk/labs/canvas2image/ :a. Labelit kuitenkin ongelmallisia, koska ovat HTML:nä
  * tilanteen tallentaminen - tuomas - **done**
    * UserProfileen one-to-many-kenttä tallennetuille tilanteille
    * tallennus XHR:llä serverille rgraph.toJSON('graph')
    * Esim. vasempaan palkkiin lista tallennetuista tilanteista
  * Undo **done** ja redo - tuomas, voi tehdä myös redo:n loppuun
    * tallennetaan esim. vikat 5 tilannetta toJSON:illa javascript-taulukkon
    * undottaessa morphataan nykyinen graafi vanhaan
Tehdään roadmap:
  * samplen metadataa lisää (esim. syvyys tai sijainti)
  * vikojen hittien katselu
  * useampi kuva yhtä aikaa
  * kahden eri entsyymin välistä yhteyttä ei voi hakea
    * Toteuttakaa dijkstra tietokannassa, kun käyttäjä tekee haun. O(E + V\*log V). Onnea yritykselle
    * Esilaskekaa kaikki yhteydet Floyd-Warshallilla. O(V^3). Hyvin onnistuu