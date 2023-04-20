import React from "react";
import { useState } from "react";


export default function InputState(){

    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');


    if(status === 'success'){
        return <h1>That's Right!!!</h1>
    }

    async function handleSubmit(e){
        e.preventDefault();
        setStatus('submitting');
        try{
            await submitForm(answer);
            setStatus('success');
        } catch (err){
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextAreaChange(e){
        setAnswer(e.target.value);
    }

    return (
        // this handleSubmit is a 
        <body style={{background:'yellow', height:'1000px'}}>
        <div style={{paddingTop:'50px'}} 
          className="App">
            <form onSubmit={handleSubmit}>

                <textarea
                value={answer}
                onChange={handleTextAreaChange}
                />

                <br/>
                <br/>
                <br/>

                <button className="btn-lg btn-danger"
                 disabled={answer.length === 0 || 
                    status === 'submitting'}>
                    SUBMIT NOW!
                </button>
                {error !==null &&
                <p className="Error">
                    {error.message}
                </p>}
            
            </form>
        </div>
        </body>
    )
}

    function submitForm(answer){
   // Pretend it's hitting the network.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== 'chris';
                if(shouldError){
                    reject(new Error('Good guess, but  wrong answer! Try again!'));
                }else{
                    resolve();
                }
            }, 1500);
        });
    }
