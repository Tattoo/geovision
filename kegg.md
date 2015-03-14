# KEGG #

  * Kegg tietokanta sijaitsee osoitteessa: http://www.genome.jp/kegg/ Siitä on myös lokaali, tektitiedostomuodossa oleva kopio userssilla.

  * Kegg muuttuu paljon, mutta useimmat muutokset ovat pieniä eivätkä tälle projetille relevantteja, mutta tämän takia keggiä ei voi kopioida ilman että sille tekee myös mahdollisuuden päivittyä (esim. ajaa tietokantaparseri uusiksi).

  * Tälle projektille tärkeitä osia kegg:stä ovat ainakin seuraavat
    1. entsyymien (tiedosto userssille: enzyme)  EC-koodien mappaaminen nimiksi ja sama toiseen suuntaan
    1. reaktioiden (tiedosto userssille: reaction) tiedot: equation ja sitä vastaava definition (molemmat lukutavat asialle näytetään käyttäjälle) ja niihin liittyvä enzyme

  * Harkinnassa joko linkkaaminen etänä kegg:iin tai sitten keggin relevanttien osien parsiminen omaan tietokantaan. Tutkitaan vielä.
  * update: vaikuttaa siltä että sujuva linkkaaminen suoraan keggiin onnistuu sittenkin (ainakin niin pitkään kun ne itse moista tukee). Keggiä voi kutsua SOAP ja WSDL yhdistelmällä. Ne saa pythonkirjastona, minkä liittämistä projektiin kokeillaan kohta. http://pywebsvcs.sourceforge.net/ http://www.genome.jp/kegg/soap/doc/keggapi_manual.html

  * Linkkejä kegg:iin pitäisi myös näyttää monessa kohdassa. Yleisimmät linkkityypit meidän piirtämissä kaavioissa:
    1. entsyymin tiedot EC-koodin perusteella: http://www.genome.jp/dbget-bin/www_bget?ec:kooditähän
    1. reaktion tiedot R-koodin perusteella: http://www.genome.jp/dbget-bin/www_bget?rn:kooditähän
    1. metaboliitin tiedot C-koodin perusteella: http://www.genome.jp/dbget-bin/www_bget?cpd:kooditähän
    1. lisäksi sisäiset linkit uniprot-tietokantaan sekvenssien kohdalta

# Nimihaut KEGG:istä #
Ongelmat:
  1. KEGGin APIsta ei löydy tapaa hakea nimen perusteella EC-numeroa
  1. Nettikäyttöliittymästä hakiessa yhdellä nimellä tulee yleensä useita eri EC-nmeroita

Johonkin tulevaan sprinttiin voi ottaa tehtäväksi kirjoittaa tulkki joka parsii jotekin mystisesti nimistä EC-koodeja. Moninaisuuden voi ehkä ratkaista antamalla käyttäjän valita jotenkin...