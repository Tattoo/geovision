#coding: UTF-8
# To change this template, choose Tools | Templates
# and open the template in the editor.

__author__="jjlaukka"
__date__ ="$May 30, 2011 2:28:53 PM$"

import os
os.environ['DJANGO_SETTINGS_MODULE'] = 'geovision.settings'
from geovision.viz.models import Blast
from geovision.viz.models import Read, DbEntry
from geovision.text_to_db.bulk_inserter import BulkInserter

def create_blast(db_name, sample_name, filename):
    filehandle = open(filename, 'r')

    inserter = BulkInserter(Result)

    for line in filehandle:
            (read_id, db_seq_id, pident, length, mismatch, gapopen, qstart, qend, sstart, send, error_value, bitscore) = line.split(None)
            read = Read.objects.get(read_id = read_id, sample = sample_name)
            db_entry = DbEntry.objects.get(read_id = db_seq_id, source_file = db_name)
            inserter.save(Result(read = read,  database_name = db_name, db_entry = db_entry, pident = pident,
                length = length, mismatch = mismatch, gapopen = gapopen, qstart = qstart,
                qend = qend, sstart = sstart, send = send, error_value = error_value, bitscore = bitscore))
    inserter.close()
    
if __name__ == '__main__':
    import sys
    filename = sys.argv[1]
    (sample_name, db_name) = os.path.basename(filename).split('.')
    create_blast(db_name, sample_name, filename)
