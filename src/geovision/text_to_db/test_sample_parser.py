#coding: UTF-8
# To change this template, choose Tools | Templates
# and open the template in the editor.

import unittest
import sample_parser

class Test_sample_parserTestCase(unittest.TestCase):
	#def setUp(self):
    #    self.foo = Test_sample_parser()
    #

    #def tearDown(self):
    #    self.foo.dispose()
    #    self.foo = None

	def test_sample_parse_first(self):
		parser = sample_parser.SamplefileParser("test.txt")
		read = parser.next_read()
		self.assertEqual(read.readid, 'ensimmainen')
		self.assertEqual(read.description, 'seliseli')
		self.assertEqual(read.data, 'ASDFASEGAASGEASGASG')

	def test_sample_parse_last(self):
		parser = sample_parser.SamplefileParser("test.txt")
		parser.next_read()
		read = parser.next_read()
		self.assertEqual(read.readid, 'toinen')
		self.assertEqual(read.description, 'sulisuli')
		self.assertEqual(read.data, 'ASGEAGSGASEGAG')

	def test_sample_parse_past_the_end(self):
		parser = sample_parser.SamplefileParser("test.txt")
		parser.next_read()
		parser.next_read()
		read = parser.next_read()
		self.assertEqual(read, None)

if __name__ == '__main__':
	unittest.main()
