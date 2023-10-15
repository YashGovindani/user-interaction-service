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