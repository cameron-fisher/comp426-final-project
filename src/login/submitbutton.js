import React from 'react';

class SubmitButton extends React.Component {

    render() {
        return (
            <div className="submitButton">

                <button
                    className='button is-primary'
                    style={{textAlign: 'center', width: 500}}
                    disabled={this.props.disabled}
                    onClick={ () => this.props.onClick()}
                >
                    {this.props.text}

                </button>
            </div>
        );
    }
}

export default SubmitButton;