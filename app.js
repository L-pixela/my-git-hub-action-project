const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res)=> {
    res.send('Hello, Github Actions!');
});
app.listen(port,() =>{
    console.log('App listening at http://localhost:${port}');
});
export default function() {
    return 'Hello, Github Actions!';
}
