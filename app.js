const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    // Establecer una cookie
    res.cookie('nombre', 'valor', { maxAge: 3600000, httpOnly: true });
    res.send('Cookie establecida');
});

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));
