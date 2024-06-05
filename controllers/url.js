import { nanoid } from 'nanoid';
import url from '../models/url.js'
export const handleGenerateShortUrl = async(req,res) =>{
    const shortId = nanoid(8);
    if(!req.body.url) return res.status(400).json({error: 'URL is required!'})
    await url.create({
        shortId: shortId,
        redirectUrl: req.body.url,
        visitHistory: [],
    })

    return res.json({id: shortId})
}

export const handleGetAnalytics = async(req,res) =>{
    const shortId = req.params.shortID
    const result = await url.findOne({shortId})
    return res.json({totalClicks: result.visitHistory.length, analytics: result.visitHistory})
}