import React from 'react';

const Welcome = () => (
    <div className="main-welcome">
        <div className="container">
            <div className="row">
                <div className="col s12 m6 l6 offset-m6 offset-l6">
                    <div className="main-welcome--content">
                        <img src="./images/logo.svg" alt="Benjamin Plumbing Logo" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m10 l10 offset-m1 offset-l1">
                    <h1 className="main-welcome--text flow-text">Serving <span className="bold">residential plumbing repair</span> and <span className="bold">large commercial plumbing installations</span> in the greater Madison, Wisconsin Area</h1>
                </div>
            </div>
        </div>
    </div>
);

export default Welcome;