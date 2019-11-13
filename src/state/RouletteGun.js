import React from 'react';

export default class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false 
        }
    }
    handleButtonClick = () => {
        console.log('click')
        this.setState({spinningTheChamber: true})
        setTimeout(() => {
            let chamber = Math.ceil(Math.random() * 8)
            console.log(chamber)
            let timeOut = 'Time out'
            console.log(timeOut)
            this.setState({chamber: chamber,spinningTheChamber: false})
        } ,2000)
    }
    render() {
        let text;
        if (this.state.spinningTheChamber === true) {
            text='spinning the chamber and pulling the trigger!'
        } else if (this.state.chamber === this.props.bulletInChamber) {
            text ='BANG!!!'
        } else {
            text='You\'re safe!'
        }
        return(
            <div>
                <p>{text}</p>
                <button onClick={this.handleButtonClick}>Pull the trigger!</button>
            </div>
        )
    }
}