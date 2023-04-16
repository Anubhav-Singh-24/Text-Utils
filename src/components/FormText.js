import React, { useState } from 'react'

export default function FormText(props) {
    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClrclick = () => {
        let newText = '';
        setText(newText)
    }

    const handleCpyclick = () => {
        navigator.clipboard.writeText(text)
        let newtxt = 'Copied!'
        setTxt(newtxt)
        setTimeout(()=>{
            newtxt = 'Copy to Clipboard'
            setTxt(newtxt)
        },1000)
    }

    const handleOnchange = (event) => {
        setText(event.target.value)
    }


    const [text, setText] = useState('')
    const [txt, setTxt] = useState('Copy To Clipboard')
    let word = text.split(/\s+/).filter((element)=>{return element.length!==0}).length;
    return (
        <>
            <div className='container'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnchange} placeholder="Enter your text here" rows="5"></textarea>
                </div>
                <button disabled={word===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleUpclick}>Upper Case</button>
                <button disabled={word===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleLoclick}>Lower Case</button>
                <button disabled={word===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleClrclick}>Clear Text</button>
                <button disabled={word===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleCpyclick}>{txt}</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{word} words and {text.replace(/ /g,"").length} characters</p>
                <p>Read time:- {0.008 * word} minutes</p>
                <h3>Preview</h3>
                <p>{word>0?text:"Enter some text in textbox for it's preview"}</p>
            </div>
        </>
    )
}
