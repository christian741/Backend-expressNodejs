var app = require('./app');//Exportamos app.js

app.listen(app.get('port'),function(){
    console.log("Servidor en el 3000");
});