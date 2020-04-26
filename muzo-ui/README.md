# Muzo
An ecommerce app for No one.

## Angular Front End
To get started we use the Angular CLI tool to create the shell application by running the command ```ng new muzo-ui -routing``` 
and enabling routing 
 

## Action Items for UI
1. Get to display Picture thumbnail in navbar
2. make a separate labels file for all fields
3. button to click and display password
3. show 'invalid username error'
4. notifications 


## Dependencies and their installation

### 1. BootStrap
 - To install Bootstrap ```npm install bootstrap jquery```
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

### 2. Toastr
- To install toastr follow https://www.npmjs.com/package/ngx-toastr install appropriate version of toastr (matching with your angular version) or you'll face errors

 