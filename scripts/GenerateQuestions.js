require('dotenv').config();
const fs = require('fs');
const axios = require('axios');

console.log('API Key:', process.env.REACT_APP_OPENAI_API_KEY);

const GenerateQuestions = async () => {
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

    // Debugging step to ensure API key is loaded
    if (!apiKey) {
        console.error('API key is not defined. Check your .env file.');
        return;
    }

    const prompt = "Generate 10 quiz questions with four options and indicate the correct answer. Format each question as a JSON object with id, question, and options.";

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/completions',
            {
                model: 'text-davinci-003',
                prompt: prompt,
                max_tokens: 1000,
                n: 1,
                stop: null,
                temperature: 0.7,
            },
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const generatedText = response.data.choices[0].text.trim();
        
        // Ensure the generated text is in the correct format
        const jsonString = `[${generatedText.replace(/}\s*{/g, '},{')}]`;
        
        let questions;
        try {
            questions = JSON.parse(jsonString);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            console.error('Generated Text:', generatedText);
            return;
        }

        // Save questions to a JSON file in the public directory
        const filePath = 'public/questions.json';
        fs.writeFileSync(filePath, JSON.stringify({ questions }, null, 2));
        console.log(`Questions saved to ${filePath}`);

    } catch (error) {
        console.error('Error generating questions:', error);
    }
};

GenerateQuestions();
