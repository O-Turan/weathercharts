import express from 'express';
import fs from 'node:fs';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/assignment1', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('json/assignment1.json', function(err, data){
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
       