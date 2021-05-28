import express from 'express';
const app = express();

app.get('/hello', (requete, reponse) => reponse.send('Et c’est parti ! '));

app.listen(8000, () => console.log('Écoute le port 8000'));
