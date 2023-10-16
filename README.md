# user-interaction-service
User-Interaction Micro Service for Pratilipi Assignment



## for database:
```
create database pratilipi_user_interaction_db;
create user pratilipi with password 'pratilipi';
grant all privileges on database "pratilipi_user_interaction_db" to pratilipi;
```
### to add schema
```
psql -U pratilipi -d pratilipi_user_interaction_db -f ./schema.sql
```

## Postman
```
https://api.postman.com/collections/15620684-03194f0c-b293-4c2a-9c87-28f1c04f3dd4?access_key=PMAT-01HCV31855GY4BJHF5C28ZVKDB
```