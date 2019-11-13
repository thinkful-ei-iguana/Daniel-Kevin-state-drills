import React from 'react';

export default class Bomb extends React.Component {
  state= {
    count: 0,
    text: ''
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({count: newCount});

      if (this.state.count >= 8) {
        let text = 'BOOM!!!!!';
        this.setState({text: text});
        clearInterval(this.interval);
      } else if (this.state.count % 2 === 0) {
        let text = 'Tick'
        this.setState({text: text})
      } else if (this.state.count % 2 !== 0) {
        let text = 'Tock';
        this.setState({text: text});
      }

    }, 1000)
  }

  render () {
    return (
      <div>
        <p>{this.state.text}</p>
      </div>
    );
  }
}