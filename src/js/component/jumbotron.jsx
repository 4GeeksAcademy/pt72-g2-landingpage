import React from 'react'

export default function Jumbotron(props) {
    return (
        <div className="jumbotron d-flex flex-column align-items-center w-75 container my-5" >
            <h1 className="display-4 d-flex mt-5">{props.headerText}</h1>
            <p>{props.paraText}</p>
            <p className="d-flex">
                <a className="btn btn-primary btn-lg mb-5" href="#" role="button">
                    {props.btnText}
                </a>
            </p>
        </div>
    )
}
