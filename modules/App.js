import React from 'react';
import _ from 'lodash';
import MainTab from './main/main';
import DesignTab from './design/design';
import * as UI from 'editor-ui-lib';

class App extends React.Component {
    render() {
        return (
            <UI.appSettings>
                <UI.appTabs defaultTabIndex={0}>
                    <MainTab tab="Main"/>
                    <DesignTab tab="Design"/>
                </UI.appTabs>
            </UI.appSettings>
        );
    }
}

export default App;