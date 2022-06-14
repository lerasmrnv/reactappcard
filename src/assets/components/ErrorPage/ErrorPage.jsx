import React from 'react';
import errorImage from "../../images/errorPage.png";

export default function ErrorPage() {
    return (
        <div>
            <img src={errorImage} className="errorImage" />
        </div>
    )
}
