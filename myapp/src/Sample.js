import React, { Component } from 'react';

class Sample extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Sample;