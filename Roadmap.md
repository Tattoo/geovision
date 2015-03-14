### Known bugs ###
  * Using refresh function (or function that calls refresh()) after centering graph causes the graph to flip around a bit
    * Modify the library centering function onClick or create new better function for it
  * Making a query with multiple parameters(e.g. read and dbentry), the side menu is not shown right
  * If graph right-click menu is closed by clicking elsewhere, next click does not register correctly
  * The graph menu opens when clicking on the dropdownmenus in settings

### Other notes ###
  * If needeed, data can be retrieved straight from  KEGG with this tool: http://pywebsvcs.sourceforge.net/ This has been tested to work, but is not installed in the project at the moment.
  * dokumentation on the subject can be found here http://www.genome.jp/kegg/soap/doc/keggapi_manual.html