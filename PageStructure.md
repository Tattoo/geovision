# Ideoita tähän asti: #


Malli

- Hyvin ohut navigaatiopalkki joka on aina jokaisen sivun yläreunassa. Siinä olisi esim. logout ja etusivu napit ynnä muut asiat jotka ovat relevantteja kaikille käyttäjille/graafeille.

- Tämän alle tulisi sivusta riippuvainen navigaatio. Siinä voisi olla esim. kynnysarvojen säätäminen, hakutulosten raajaminen yms. Optiomenu menee piiloon kun graafia katsotaan ja tulee näkyville kun hiiri viedään vasempaan laitaan.

- Tämän alle itse graafi/näkymä. Näin saadaan ehkä maksimoitua se, että tilaa jää mahdollisimman paljon itse graafille.

Vanha luonnos: http://serveri.tulilaulu.net/luonnos.php


Templatejen säätäminen saatiin kuntoon niin että:

PROJECT\_PATH = os.path.dirname(os.path.abspath(file))

STATIC\_URL = '/static/'

STATICFILES\_DIRS = (
> os.path.join(PROJECT\_PATH, 'static'),
> )

TEMPLATE\_DIRS = (
> os.path.join(PROJECT\_PATH, 'templates'),
> )

Näitten jälkeen pitää vielä muistaa tunkea kaikki templatet templates-kansioon, kaikki staticit (esim. css ja kuvat) static-kansioon ja käyttää views-tiedostoissa vain render\_to\_response ja context\_instance=RequestContext(request) -tyyppisiä otuksia. Lisäksi kaikkien stattisten tiedostojen osoitteet pitää olla muodossa (esim.) 

&lt;link rel="stylesheet" href="{{ STATIC\_URL }}styles.css" type="text/css"&gt;




Templatesysteemissä kaikki on periytetty base.html:stä jossain on vain html-dokumentin runko ja css linkit.
loginille ja registerille on oma templatensa, ja varsinaisille sivuston sisäisille jutuille on omansa: sitebase.html
(Templateista paras dokumentaatio on katsoa niitä ja vilkaista tämä jos ei ymmärrä: https://docs.djangoproject.com/en/dev/topics/templates/#id1)