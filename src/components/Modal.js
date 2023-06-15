import React, {useState} from "react";

const Modal = ()=> {

    let [showProp, setShowProp] = useState(false)

    function updateState(change){
        setShowProp(change);
    }

    return (
        <div className="model-overlay">
            <button onClick={()=>{updateState(true)}}>Show Modal</button>

            

            {
                showProp && 
                <div className="model-close">
                    <button onClick={()=>{updateState(false)}}>Close</button>
                    <p>This is content of the modal.</p>
                    </div>
            }

        </div>
    )
}

export default Modal