# Muzo
A music app for No one.

## Getting started

for MySQL, after installing run the following commands in the MySQL shell by running ```sudo mysql --password```
1. ```create database muzo_server```
2. ```create user 'root'@'%' identified by 'password'```
3. ```grant all on muzo_server.* to 'root'@'%'```

## Angular Front End
To get started we use the Angular CLI tool to create the shell application by running the command ```ng new muzo-ui -routing``` 
and enabling routing 
 
To install Bootstrap for Angular run ```npm install bootstrap jquery```
and configure them in angular.json 
 ```
"styles": [
      "src/styles.css",
      "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
"scripts": [
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
```
## Action Items
1. Form validations for signup and Login

## Tech Stack 
1. Java
2. Maven
3. Spring Boot 
4. Hibernate 
5. MySQL
6. Angular 
7. Bootstrap
8. HTML/ CSS



