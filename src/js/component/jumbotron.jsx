import React from 'react'

export default function Jumbotron(props) {
    return (
        <div class="jumbotron">
            <div class="container d-flex flex-column">
                <h1 class="display-4 d-flex justify-content-start mt-5">{props.headerText}</h1>
                <p>{props.paraText}</p>
                <p class="d-flex justify-content-start">
                    <a class="btn btn-primary btn-lg mb-5" href="#" role="button">
                        {props.btnText}
                    </a>
                </p>
            </div>
        </div>
    )
}
