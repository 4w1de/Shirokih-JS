import React from 'react';

import './withLoadingDelay.css';

function withLoadingDelay(WrappedComponent) {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                showSpinner: true,
            };
        }

        componentDidMount() {
            setTimeout(() => {
                this.setState({ showSpinner: false });
            }, 2000);
        }

        render() {
            return this.state.showSpinner ? (
                <div className="divSpinner">
                    <div className="loader">Loading...</div>
                </div>
            ) : (
                <WrappedComponent {...this.props} />
            );
        }
    };
}

export default withLoadingDelay;
