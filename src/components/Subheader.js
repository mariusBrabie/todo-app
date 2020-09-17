import React from 'react'
import '../styles/subheader.css'

const Subheader = (props) => {
    
    const whenInputChange = (e) => {
        props.firstCallback(e.target.value)
    }

    const whenHideDone = (e) => {
        props.secondCallback(e.target.checked)
    }

    return <div className="subheader">
        <input
            className="find-todo"
            type = "text" 
            placeholder = "find todo"
            onChange = {whenInputChange}
        />
        <div className="hide-completed">
            <label className="checkbox-label">
                <input type="checkbox"
                    className="checkbox"
                    onChange={whenHideDone}
                />
                <span className="checkbox-custom"></span>
                {<span>Hide completed</span>}
            </label>
        </div>    
    </div>
}

export default Subheader