import express, { Request, Response } from 'express'
import http from 'node:http'


const app = express()



app.get("/:name", (req: Request, res: Response) => {

    const name = req.params.name

    const options = {
        port: 8080,
        host: '127.0.0.1',
        method: 'POST',
        path: "/",
    };
    const request = http.request(options, (res: http.IncomingMessage) => {
        res.on("data", (data) => {
            console.log(data.toString())
        })
    })


    request.on("error", (err) => {
        console.log(err);
    })

    request.write(name)
    request.end()
})




app.listen(9090, () => {
    console.log("node is on")
})




