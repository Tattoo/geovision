Note: some of these scripts warn about invalidating blast-enzyme cache. If you have run one of those commands, be sure to run the rebuild-cache command. Symptoms of a forgotten rebuild-cache include getting no results from enzyme searches at all.
# Geovision utility scripts #
## Data importing ##
### 'Actual' data ###
  * **import-sample** _/path/to/sample.fasta_
> > Import a sample file in fasta format. The name of the sample is simply the filename minus the extension.
  * **import-database** _/path/to/database.fasta_ _databasename_
> > Import a database file in fasta format. The name of the database is the second command line argument.
  * **import-blast** _/path/to/blast/samplename.databasename.align_
> > Import a blast file. The blast file must be named _samplename_._databasename_.align. You must import the database and the sample before all the blasts. If the blast is related to the UniProt database, invalidates the blast-enzyme cache.
### Utility databases ###
  * **import-kegg** _/path/to/kegg/enzyme_
> > (Re)import the KEGG enzyme database.
  * **import-uniprotecs** _/path/to/uniprot\_sprot.ecs_
> > Reimport the UniProt ECS database. Invalidates the blast-enzyme cache.
### Service maintenance ###
  * **start-lighttpd**, **stop-lighttpd**
> > Start/stop the Geovision lighttpd HTTP server. The default lighttpd configuration is in $HOME/geovision-lighttpd/ and listens on port 25892.
  * **start-localpostgres**, **stop-localpostgres**
> > Start/stop the local Geovision PostgreSQL instance. By default the configuration and data files are located in $HOME/geovision-postgres and listens on port 4394.
### Installation ###
  * **install-deps**
> > Install all the library dependencies for Geovision.
  * **setup-lighttpd**
> > Set up a local lighttpd configuration for Geovision. See above for configuration defaults.
  * **setup-localpostgres**
> > Set up a local PostgreSQL configuration for Geovision. See above for configuration defaults.
  * **initial-import**
> > Perform the initial database creation & importation. See the installation manual for defaults.
### Utilities ###
  * **run-psql** _args_
> > Run psql (the PostgreSQL command line client utility) with the same connection parameters as specified in dbconfig.py
  * **create-superuser**
> > Create a superuser account. Superusers can log in to the admin panel (http://server/admin/)
  * **rebuild-cache**
> > Rebuild the blast-enzyme cache and analyze the tables. Run this after all data importing sessions if you have done anything that invalidates the blast-enzyme cache.