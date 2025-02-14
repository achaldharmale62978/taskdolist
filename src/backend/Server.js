const mysql =require('mysql')

const express = require('express')

const app =express()
const cors = require('cors')
const e =require('express')


app.use(cors())
app.use(express.json())

var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'taskdolist'
})

    connection.connect((error)=>{
        if(error){
            console.log('data added on server site')
            
            app.get('/home',(req,res)=>{

                const q = 'SELECT * FROM taskdolist.taskdata'

                connection.query(q,(error,data)=>{
                    if(error){
                        console.log(error)
                        return res.status(500).send(error)
                    }
                    return res.json(data)
                })
            })

            app.post('/home',(req,res)=>{

                const q = 'INSERT INTO home(`fname`,`lname`,`gender`,`language`,`email`) VALUE (?,?,?,?,?)'

                const values= [
                    req.body.fname,
                    req.body.lname,
                    req.body.gender,
                    req.body.language,
                    req.body.email
                ]

                connection.query(q,values,(error,data)=>{
                    if(error){
                        console.log(error)
                        return res.status(500).send(error)
                    }
                    return res.json(data)
                })
            })
        }
    })

app.listen(6001,()=>{
    console.log('port 6001 login by server site.....')
})