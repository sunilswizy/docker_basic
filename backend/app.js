const express = require('express')
const cors = require('cors')
const db = require('./api/sequalize')
const User =  require('./api/models/user')

const app = express()
app.use(cors())

const port = process.env.port || 5000


db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(error => {
    console.error('Unable to connect to the database:', error);
})

app.get('/', async (_req, res) => {

    try {
        const response = await User.findOne({
            where: {
                email: 'sunil@iamneo'
            } 
        })
        const data = JSON.parse(JSON.stringify(response))
        console.log({data})
        res.send(data)
    }
    catch(e) {
      console.log("errro ", e)
      res.send({err: true})
    }

})


app.listen(port, () => console.log("App is running on port", port))