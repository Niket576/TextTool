import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = ()=> {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","Success");
    }
    const handleLowClick = ()=> {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","Success");
    }
    const handleOnChange = (event)=> {
        //console.log("on change");
        setText(event.target.value);
    }
    const handleClearClick = ()=> {
        //console.log("on change");
        setText('')
        props.showAlert("Text cleared","Success");
    }
    const handleCopy = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard","Success");
    }
    const handleExtraSpace = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space has been removed ","Success");
    }
    const [text,setText] = useState("");

  return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Example text area</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#6c757d':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to lowercase </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0?text:"Nothing to preview !"}</p>
        </div>
    </>
  )
}
