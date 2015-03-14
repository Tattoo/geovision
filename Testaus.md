# Testien kattavuus #
  * Unittestestaus
  * Integrointitestaus
  * Performanssi ja käytettävyystestaus
    * Kevyesti dokumentoidut testit erilaisilla alustoilla
    * Varmistetaan, että ohjelma toimii käytettävällä nopeudella

# Työkalut #
  * Nose: http://somethingaboutorange.com/mrl/projects/nose/1.0.0/
  * nose-django: http://pypi.python.org/pypi/django-nose
  * Hudson: http://hudson-ci.org, automaattiseen testien ajoon
# Työkalujen asennus omalle koneelle #
```
wget http://pypi.python.org/packages/source/d/django-nose/django-nose-0.1.3.tar.gz; 
tar xzf django-nose-0.1.3.tar.gz; 
cd django-nose-0.1.3; 
sudo python setup.py install
```
Asennus käyttäjänä: viimeisen rivin sijaan
```
python setup.py install --user 
```
# Resursseja #
  * http://docs.djangoproject.com/en/dev/topics/testing/
  * http://somethingaboutorange.com/mrl/projects/nose/1.0.0/writing_tests.html
  * http://ericholscher.com/blog/2008/jul/26/testmaker-002-even-easier-automated-testing-django/
# Hudson #
Projektin hudson löytyy nykyään osoitteesta http://t-tmtynkky.users.cs.helsinki.fi/hudson. Hudsonissa testit ajetaan mahdollisimman oikeaa ympäristöä vastaten (userssilla postgresia käyttäen).

Tällä hetkellä projektin koodit haetaan google codesta default-branchista.
Voisi olla hyvä päättää tehdä joku erityinen 'ready'-branchi, josta pelkästään testit ajetaan automaattisesti.

Hudsonin saa ajamaan testit automaattisesti repoon pushauksen yhteydessä lisäämällä projektikansion .hg/hgrc:hen
```
[hooks]
post-push.hudson = curl http://t-tmtynkky.users.cs.helsinki.fi/hudson/job/Geovision/build?token=Ohtu2011-geovision
```