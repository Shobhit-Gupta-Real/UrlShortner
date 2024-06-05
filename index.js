import express from 'express'
import urlRoutes from './routes/url.js'
import url from './models/url.js'
const app = express()
const port = 8001
import {connectToMongoDB} from './connect.js'
connectToMongoDB('mongodb+srv://20uec124:scDJTnOgXTvjkhXZ@urlshortner.xerd6nu.mongodb.net/?retryWrites=true&w=majority&appName=URLshortner')
app.use(express.json())
app.use('/url', urlRoutes)
app.get("/:shortId", async(req, res) => {
    const shortId = req.params.shortId;
    const entry = await url.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );
    const redirect_url = entry.redirectUrl ;
    res.redirect(redirect_url)
  });
  
app.listen(port, ()=>{
    console.log(`Sever Starte at ${port}`)
})

// password : scDJTnOgXTvjkhXZ
// username : 20uec124