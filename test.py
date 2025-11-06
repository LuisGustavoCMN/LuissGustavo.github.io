import psycopg2

conn = psycopg2.connect(
    host="localhost",
    port=5432,
    dbname="nome_do_banco_de_dados",
    user="usuario",
    password="senha"
)

cur = conn.cursor()
cur.execute("SELECT * FROM tabela")
rows = cur.fetchall()
for row in rows:
    print(row)
