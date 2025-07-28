import psycopg2

db_host = 'adb.c1kcy8ga0s1v.us-east-2.rds.amazonaws.com'
db_name = 'ADB_Data'
db_user = 'postgres'
db_pass = ''

connection = psycopg2.connect(host = db_host, database = db_name, user = db_user, password = db_pass)
print("Connected to database")

cursor = connection.cursor()
cursor.execute('Select version()')

db_version = cursor.fetchone()
print(db_version)
cursor.close()