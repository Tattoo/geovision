Tee nämä usersilla omalla käyttäjätunnuksellasi:
  1. Asenna työkalut:
```
tar xzvf Django-1.3.tar.gz
cd Django-1.3
python setup.py install --user
git clone https://github.com/robhudson/django-debug-toolbar.git
cd django-debug-toolbar
python setup.py install --user
wget http://somethingaboutorange.com/mrl/projects/nose/nose-1.0.0.tar.gz
tar xzf nose-1.0.0.tar.gz 
cd nose-1.0.0
python setup.py install --user
wget http://pypi.python.org/packages/source/d/django-nose/django-nose-0.1.3.tar.gz
tar xzf django-nose-0.1.3.tar.gz
cd django-nose-0.1.3/
python setup.py install --user
```
  1. Valitse ~randomisti vapaa porttinumero userssilla
  1. Lisää oman users-tunnuksesi htdocs-kansioon .htaccess-niminen tiedosto, ja korvaa 65432 omalla valitsemallasi porttinumerolla
```
RewriteEngine On
RewriteRule "^(.*)$" http://localhost:65432/$1 [P]
```
  1. Tee uusi käyttäjä tietokantaan
```
createuser käyttäjänimi -h localhost -p 58786 -s
```
  1. chmod a+r ~/htdocs/.htaccess
  1. Pullaa repo johonkin hakemistoon, ja aja siellä python manage.py runserver 65432, mihin laitat oman porttinumerosi 65432:n tilalle.