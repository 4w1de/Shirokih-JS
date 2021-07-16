import React from 'react';
import CheckViewOnly from './CheckViewOnly';

import './Settings.css';
import '../Body.css';

class Settings extends React.Component {
    render() {
        return (
            <div className="divBody">
                <div className="div-settings">
                    <h1>Settings</h1>
                    <CheckViewOnly />
                </div>
            </div>
        );
    }
}

export default Settings;
