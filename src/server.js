// Importamos las librerías necesarias
const express = require('express');
const path = require('path');

// Creamos la aplicación de Express
const app = express();
const PORT = 3000; // Puerto donde se ejecutará la app

// Configuramos el motor de vistas EJS y la carpeta de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para leer datos de formularios (req.body)
app.use(express.urlencoded({ extended: true }));

// Ruta que muestra el formulario (primera vista)
app.get('/', (req, res) => {
  res.render('animal-form'); // renderiza animal-form.ejs
});

// Ruta que recibe el formulario y muestra el resultado (segunda vista)
app.post('/animal', (req, res) => {
  const animal = req.body.animal; // nombre del campo del input
  res.render('animal-resultado', { animal }); // pasamos el dato a la vista
});

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
