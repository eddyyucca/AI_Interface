const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/ask', async (req, res) => {
    try {
        console.log('Received request from frontend:', req.body);
        
        const ollamaResponse = await axios.post('http://localhost:11434/api/generate', {
            model: 'deepseek-r1:1.5b',
            prompt: req.body.question,
            stream: false
        });
        
        console.log('Raw Ollama response:', ollamaResponse.data);
        
        // Ekstrak respons dengan lebih hati-hati
        let responseText = '';
        if (ollamaResponse.data && ollamaResponse.data.response) {
            responseText = ollamaResponse.data.response;
        } else if (typeof ollamaResponse.data === 'string') {
            responseText = ollamaResponse.data;
        }
        
        console.log('Processed response:', responseText);
        
        res.json({
            success: true,
            response: responseText
        });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({
            success: false,
            error: error.message,
            details: error.response?.data || 'No additional details'
        });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});