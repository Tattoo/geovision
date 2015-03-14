# Environment setup #
Geovision requires several system services and libraries. Check that they are installed and configured properly on your server. If any of these is not installed and you do not have root access to your server, they can be installed locally in your home directory. **However, if you install anything in your home directory, install it under ~/.local or else you have to add the installation directories to PATH yourself.** This can be done by giving the parameters '--prefix $HOME/.local/' to the 'configure' program on automake-based installer, or by giving the '--user' argument to setup.py on python-based packages.
## Python ##
A modern version of Python 2.x is almost always installed on Linux systems by default. Geovision has been tested on version 2.6.5, which is currently installed on all CS department servers.
## PostgreSQL ##
A modern version of the PostgreSQL relational database management system is used for the database. Postgres is usually installed on servers offering web services, including users.cs, but at the time of writing the disk used for databases is too small for most datasets, and a custom configuration is required. For your convience, scripts for creating a PostgreSQL instance in your home directory are provided.

PostgreSQL can be found in your package manager, or at http://www.postgresql.org/download/

The PsycoPG PostgreSQL bindings for Python are also required. They are found in the package python-psycopg at least on Debian, or you can get the source from http://initd.org/psycopg/download/
## Web server ##
Since Geovision is a web application, a web server is needed. The preferred way to run Geovision is to use lighttpd on some generic port, and then, on servers with virtual hosting, configure some other web server, such as Apache, to redirect requests to the lighttpd server.

Lighttpd can be found in your package manager, or at http://lighttpd.net

# Installing #
After unpacking the Geovision source tarball, you are ready to go.

## Install all the required libraries ##
Geovision requires a few python libraries to work. For your convience, they have been included in the package. Execute the install-deps script in the scripts folder and follow the instructions. The libraries are installed in ~/.local, so no root access is required.

## Enter your database configuration ##
If your system administrator has set up a proper PostgreSQL database for you, enter your database configuration in the file src/geovision/dbconfig.py

If you are on users, or otherwise don't have a proper database, run scripts/setup-localpostgres. The script will create a database for you in ~/geovision-postgres/ running on port 4394 and only accepting connections from your Linux user account. The script will tell you what to put in the dbconfig.py file.

> You can use the provided scripts start-localpostgres and stop-localpostgres to start and stop your own database.
## Configure the initial data import ##
Open the file scripts/conf/initial-import.conf in a text editor and set up the paths to your data files (samples, databases, blasts; the uniprot ECS database, the KEGG enzyme database). You should import as much data as possible during the initial importing phase as possible, as it is faster than using the import-(sample|database|blast) scripts later on.

## Perform the initial data import ##
Run scripts/initial-import and follow the on-screen instructions. The script will first ask a few questions and confirm your entered data file paths. The actual importing phase can take several hours. **Remember to run the initial-import script in a screen or a local console so that a dying SSH connection won't interrupt the data importing"**

## Configure your web server ##
Run scripts/setup-lighttpd to generate a lighttpd configuration for you in ~/geovision-lighttpd running on port 25892. You can then use the start-lighttpd and stop-lighttpd scripts to manage your web server.

If your server provides virtual hosting, and you have a whole subdomain for your web pages (e.g. on users), you can set up Apache to redirect your public URL to Geovision's lighttpd: create a file called .htaccess in your htdocs or public\_html directory with the following contents:
```
RewriteEngine On
RewriteRule "^(.*)$" http://localhost:25892/$1 [P]
```
and make the file readable by apache, chmod a+r .htaccess. Note that this requires at least the mod\_rewrite and mod\_proxy apache modules as well as .htaccess files to be enabled in the apache server, so it might not work everywhere.