import React from 'react';
import * as UI from 'editor-ui-lib';
import Input from './input';
import Messages from './messages'

class DesignTab extends React.Component {
    render() {
        return (
            <div>
                <UI.sectionDividerLabeled label="Text & Background"/>

                <Input />

                <hr className="divider-long"/>

                <UI.colorPickerSlider title="Background"
                                      wix-param="design_backgroundColor"
                                      startWithColor="color-6">
                </UI.colorPickerSlider>

                <Messages />
            </div>
        )
    }
}

export default DesignTab;