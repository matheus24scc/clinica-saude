-- Create database for clinica-saude
CREATE DATABASE clinica_saude;

-- Create user and grant privileges
CREATE USER clinica_user WITH PASSWORD 'clinica_pass';
GRANT ALL PRIVILEGES ON DATABASE clinica_saude TO clinica_user;