import express from 'express'
import {handleGenerateShortUrl, handleGetAnalytics} from '../controllers/url.js'
const router = express.Router()

router.post('/', handleGenerateShortUrl)
router.get('/analytics/:shortID', handleGetAnalytics)

export default router