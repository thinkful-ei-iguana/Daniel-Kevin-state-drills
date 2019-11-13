import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: ''
    };
    handleButtonClick = (event) => {
        const newWho = event.target.value;
        this.setState({
            who: newWho
        })
    }
    render() {
        return (
            <div>
                <p>Hello {this.state.who}</p>
                <button onClick={this.handleButtonClick} value="world">World</button>
                <button onClick={this.handleButtonClick} value="friend">Friend</button>
                <button onClick={this.handleButtonClick} value="react">React</button>
            </div>
        )
    }
}

export default HelloWorld;