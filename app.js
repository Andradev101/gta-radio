const express = require('express');
const app = express();
const PORT = process.env.PORT || 5500;

//css
app.use(express.static(__dirname+'/public'));

//paths
app.get('/', (req, res) =>{
    res.sendFile(__dirname+'/public/views/index.html')
});

app.listen(PORT,()=>{
console.log(`servidor aberto em: http://localhost:${PORT}`);
})