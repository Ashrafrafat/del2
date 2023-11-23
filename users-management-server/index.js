const express = require ('express');
const app = express();
const port = process.env.PORT || 5000;


app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.send ('Users Management Server is Running ')
})


app.listen(port, ()=> {
    console.log('Server is running on PORT: $ {port}')
})