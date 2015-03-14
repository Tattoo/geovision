# Structure #

Database is split into two parts, with viz tables containing the actual graph data and other tables containing other data, mostly related to django user authentication, administration and user-specific information.

## Viz ##
[Database diagram, Viz-tables](http://geovision.googlecode.com/files/db_viz.png)

  * viz\_reads contains the sample data, one read per row.
  * viz\_dbentry contains data from outside databases to which sample data is compared
  * viz\_blast contains the blast data, essentially connections between read and dbentry data along with information about it
  * viz\_blastextra contains additional information for blast data
  * viz\_blastecs and viz\_uniprotecs contain enzyme-related data

## Django ##
[Database diagram, other tables](http://geovision.googlecode.com/files/db_django.png)

  * userdb\_savedview contains graphs views saved by user
  * userdb\_userprofile contains user specific settings for visualization
  * userdb\_sample is for limiting the samples (and related blast entries) that certain user can view

For more information about other tables, see https://docs.djangoproject.com/en/1.3/