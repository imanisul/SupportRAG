import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        messaage:"Welcome to SupportRag",
        success:true
    })
})


export default app;