import React from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    let myStyle = {
        color: props.mode==='dark'?'white':'#054da7',
        backgroundColor: props.mode==='dark'?'#054da7':'white',
        
    }
    // const [btnText, setBtnText] = useState("Enable Light Mode")
    // const toggleStyle = ()=> {
    //     if(myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    //     else {
    //         setMyStyle({
    //                 color: 'black',
    //                 backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }


  return (
    <div className='container' >
        <h2 className='my-3' style={{color: props.mode==='dark'?'white':'#054da7'}}>About Us</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    The main purpose of this application is to perform various types of task with the text such as upper and lower case, copy text, clear text, remove spaces etc.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    This application is free to use and anybody can use it at anytime without any restriction.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser compatibility</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Browser compatiblity basically means whether the brower will run on the given platform or not.
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="container">
            <button type='button' onClick={toggleStyle} className='btn btn-primary'>{btnText}</button>
        </div> */}
    </div>
  )
}
