const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{

	res..send('I´m Here!!!')

})
app.listen(port,(){
console.log(`App listening on port ${port}`)

})
app.listen(3000)
