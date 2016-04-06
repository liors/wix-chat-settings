import React from 'react';
import * as UI from 'editor-ui-lib';

class Input extends React.Component {
    render() {
        return (
            <div>
                <UI.fontPicker title="Input"
                               wix-param="design_input">
                </UI.fontPicker>

                <hr className="divider-long"/>

                <UI.fontPicker title="Input placeholder"
                               wix-param="design_input_placeholder">
                </UI.fontPicker>
            </div>
        )
    }
}

export default Input;