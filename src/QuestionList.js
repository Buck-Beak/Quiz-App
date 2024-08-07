
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState,useEffect } from "react";
//<button onClick={questionGenerate}>Click!</button>
const QuestionList = ({prompt}) => {
    const [questions,setQuestions] = useState('');
    const [answers,setAnswer] = useState('');
    // Access your API key (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI("AIzaSyCSkudhM_c1I9of8ooeQhisGllyUMMHBNY");
    const displayAnswer=(index,answer)=>{
        setAnswer(prevState => ({ ...prevState, [index]: answer }));
    }
    const questionGenerate =async()=>{
         // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash",
            // Set the `responseMimeType` to output JSON
            generationConfig: { responseMimeType: "application/json" }});

        /*const prompt =`Give 5 mcq questions with 4 options and answer in JSON format:
        {
            "questions": [
                {
                    "question": "What is the capital of France?",
                    "options": ["Berlin", "Paris", "Rome", "Madrid"],
                    "answer": "Paris"
                },
                {
                    "question": "Who painted the Mona Lisa?",
                    "options": ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
                    "answer": "Leonardo da Vinci"
                },
                {
                    "question": "What is the largest planet in our solar system?",
                    "options": ["Mars", "Jupiter", "Saturn", "Venus"],
                    "answer": "Jupiter"
                },
                {
                    "question": "What is the chemical symbol for gold?",
                    "options": ["Ag", "Au", "Fe", "Hg"],
                    "answer": "Au"
                },
                {
                    "question": "What is the highest mountain in the world?",
                    "options": ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
                    "answer": "Mount Everest"
                }
            ]
        }`;*/

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        const parsedQuestions = JSON.parse(text);
        setQuestions(parsedQuestions.questions);
        //setQuestions(text);
        console.log(questions);

    }
    useEffect(() => {
        questionGenerate();
    }, []);
    return ( 
        <div className="question-list">
            {Object.keys(questions).map((key,index)=>(
                <div className="ques-option" key={index}>
                    <h2>{questions[key].question}</h2>
                    {questions[key].options.map((option, idx) => (
                        <div key={idx}>
                            <input
                                type="radio"
                                id={`${index}-${idx}`}
                                name={`question-${index}`}
                                value={option}
                            />
                            <label htmlFor={`${index}-${idx}`}>{option}</label>
                        </div>
                    ))}
                    <button onClick={()=>displayAnswer(index,questions[key].answer)}>Submit</button>
                    {answers[index] && (
                        <p>The correct answer is: {answers[index]}</p>
                    )}
                </div>
            ))}
        </div>
     );
}
 
export default QuestionList;
 
