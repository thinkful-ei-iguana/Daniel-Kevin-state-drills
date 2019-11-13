import React from 'react';

export default class Accordion extends React.Component {
  state = {
    currentListIndex: 0
  }

  liArr = () => this.props.sections.map((section, index) => {
    let content = '';    
    if (index === this.state.currentListIndex) {
      content = <p>{section.content}</p> 
    }

    return (
      <li key={index}>
        <button onClick={() => this.handleListClick(index)}>
          {section.title}
        </button>
        {content}
      </li>
    )
  });

  handleListClick = (index) => {
    this.setState({
      currentListIndex: index
    });
  }
  
  render() {
    
    return (
      <ul>
        {this.liArr()}
      </ul>
    )
  }
}