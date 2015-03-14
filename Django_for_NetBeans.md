# Introduction #

Tämä on ohje Djangon käyttämiseksi NetBeansissa.


# Ohje #

1. Luo uusi Django projekti komentoriviltä siihen hakemistoon, johon haluat lähdekoodin:

> django-admin startproject geovision

Tämä luo tarvittavat tiedostot kansioon geovision.

2. Luo uusi NetBeans projekti: File -> New Project -> Choose Project -> Python -> Python Project with Existing Sources

3. Projektin nimeksi laita geovision ja project path osoittamaan siihen kansioon, jossa geovision kansio on. Esim. /home/jjlaukka/NetBeansProjects
Varmista että Python versio on oikein(2.6.5). Klikkaa next

4. Lisää source kansioksi geovision ja paina finish

5. Klikkaa oikealla luotua projektia ja mene Properties->Run ja laita Main moduleksi manage.py ja application argumentiksi "runserver --noreload"

## Ongelmia ##
  1. Testien ajaminen ei onnistu koska DJANGO\_SETTINGS\_MODULE ei ole asetettu
    * https://docs.djangoproject.com/en/dev/topics/settings/