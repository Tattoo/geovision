# Quality requirements #
  * Documentation
    * Docstring for every method and function
    * Documentation for all interfaces
      * HTTP (export urls, alignment, json generation)
      * Javascript
    * Database documentation
    * Comprehensive help
    * Architecture documentation
  * Code
    * No unused code left in program files
    * Potentially useful code moved to different location
    * Self-documenting code, comments in non-obvious places
  * Tests
    * Comprehensive tests for all functions and methods
    * No code coverage requirement
  * Speed
    * Graphics run smoothly with 100 nodes on year 2011 browsers and consumer-range hardware
    * Cannot do proper speed testing on users, so no guarantees about queries
      * Disk-io on users is apparently quite poor, so server-side code spends most of it's time waiting for data. PostgreSQL estimated query costs seem reasonable, but queries doing lot of disk accessing are extremely slow.
  * Usability
    * Comprehensive help
    * Usability test with end-users
      * Basic usability ok
      * Requested features and fixes implemented or described in roadmap
      * Graph operations need to be comprehensively documented as they are not immediately obvious

### The tests ###
  * All css and html files written by us pass the http://validator.w3.org/ validation.
  * Qunit-test results for javascript can be checked at URL+/qunit
  * Selenium-tests are included in the the project. See project root/Selenium/README.txt for info
  * Python test?