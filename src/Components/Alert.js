import React from 'react'

const Alert = (props) => {

    return (
        <div>
            <div className="alert alert-primary" id="goalert" role="alert">
                {props.message} .
            </div>
        </div>
    )
}

export default Alert
