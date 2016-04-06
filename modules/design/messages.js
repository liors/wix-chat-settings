import React from 'react';
import * as UI from 'editor-ui-lib';

class Messages extends React.Component {
    render() {
        return (
            <div>
                <UI.sectionDividerLabeled label="Messages"/>

                <UI.fontPicker title="Message text"
                               wix-param="design_messageFont">
                </UI.fontPicker>

                <hr className="divider-long"/>

                <UI.colorPickerSlider title="Message background"
                                      wix-param="design_messageBackground"
                                      startWithColor="color-11">
                </UI.colorPickerSlider>
            </div>
        )
    }
}

export default Messages;