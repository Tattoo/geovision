# Testing #
## General Info ##
### Coverage ###
  * There are no absolute code coverage requirement due the nature of the project
  * All public functions and methods should be tested as well as possible
### Speed ###
  * There is no formal speed testing at the moment
  * Speed optimization has been done based on PostgreSQL query cost estimates, since the disk IO performance of current server is extremely poor
  * Graphic speed testing has been done by hand and no problems have been noticed
    * On year 2011 consumer-level hardware at least several hundred nodes can be shown before there is any significant performance hit, and graph usually becomes hard to read long before that
  * For more complex graph operations formal speed test are necessary, but they were not within the scope of this project
### Usability ###
  * One usability test with end users has been done, no formal usability testing procedures have been defined

## Python tests ##
  * Testing uses Nose test framework
  * Unit tests for all self-made public functions and methods
  * Tests can be run by hand by typing "python manage.py test" in [root](project.md)/src/geovision/
  * More information about testing framework
    * [Nose](http://somethingaboutorange.com/mrl/projects/nose/1.0.0/)
    * [Nose-Django](http://pypi.python.org/pypi/django-nose)
  * We recommend [Hudson](http://hudson-ci.org) for automated python unittesting

## Unit tests for JavaScript ##
  * Unit tests are implemented using Qunit
  * Qunit tests are located at http://tkt_gvis.users.cs.helsinki.fi/qunit
  * Code located in files 'qunit.html' and 'js\_tests.js'
  * Testing a bit tricky because of the use of many asynchronous functions (e.g. jQuery's getJSON)
    * So tests must also be implemented asynchronously by using asyncTest and setTimeout
    * HTML needed in testing is put inside the qunit-fixture div element in qunit.html
    * The DOM inside qunit-fixture will be reset after each test, so no need to do it manually
    * More info on asynchronous testing can be found from links below
  * JavaScript code coverage for code written by team is about 75%
    * Graph initialization and traversal is tested
    * All mouse events written by the team are tested
  * Qunit tests are not implemented for the library code
  * Qunit testing information:
    * http://docs.jquery.com/Qunit/
    * http://msdn.microsoft.com/en-us/scriptjunkie/gg749824

## User Interface ##
  * Javascript testing described above
  * All css and html files written by us pass the http://validator.w3.org/ validation.
  * Selenium-tests are included in the the project. See project root/Selenium/README.txt for info