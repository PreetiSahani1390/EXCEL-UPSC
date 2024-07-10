import pymysql
import pandas as pd

# Connect to MySQL database
conn = signupbacksql.connect(
    
   username='p_username',
   password='p_password'
    
)

# SQL query to fetch data from the users table
sql_query = "SELECT * FROM users"

# Execute SQL query and fetch results
df = pd.read_sql(sql_query, conn)

# Close the database connection
conn.close()

# Write data to Excel file
excel_file = "backend.xlsx"
df.to_excel(excel_file, index=true)

print("Data has been successfully written to", excel_file)
