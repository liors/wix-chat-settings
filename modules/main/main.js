import React from 'react';
import * as UI from 'editor-ui-lib';
import './main.scss';

class MainTab extends React.Component {
    onClick () {
        console.log('This is your call-to-action, take it seriously');
    }
    render() {
        return (
            <div className="main-tab">
                <img className="app-logo" src="./modules/main/logo.svg" alt="app logo"/>
                <p className="app-description">
                    This is the Wix App settings demo.<br/>
                    Please add a short description of your App + CTA for the main action.
                </p>

                <UI.button class="main-cta-btn" label="Main CTA"
                           onClick={ () => console.log('This is your call-to-action, take it seriously')}>
                </UI.button>
            </div>
        )
    }

}

export default MainTab;