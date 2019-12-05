const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database')

// npm install express
//Settings
app.set('port', process.env.PORT || 3000)
// instalar npm install nodemon -D sive para reiniciar el server no olvidar poner el dev en el scripts en package.json
// npm run dev
//Middlewares
// npm install morgan
app.use(morgan('dev'));//mostar la peticiones get / 404 8.7 ms - 139
app.use(express.json());
// Routes
app.use('/api/employees',require('./routes/employee.routes'));
// Starting the Server
app.listen(app.get('port'), () => { //app.listen(3000, () => {
    console.log('Serve on port ', app.get('port')); //  console.log('Serve on port 3000'); se cambio para que saliera el numero de puerto automaticamente 
});//stap web esta mean 
//MongoDB instalación en Windows 10