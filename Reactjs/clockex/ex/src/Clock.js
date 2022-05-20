import React from 'react';

class Clock extends React.Component{

    constructor (props){
        super(props);
        this.state = {time : new Date()};
    }




    /* As soon as the Clock is mounted start the interval "timer"
    Call tick() every second
    */

    componentDidMount(){
        this.timer = setInterval(
            () => this.tick(), 1000
        );
    }

    /*
    Before unmounting the clock, clear the interval
    "timer" this step is a memory efficient step
    */

    componentWillUnmount(){
        clearInterval(this.timer);
    }


    tick(){
        this.setState({
            time : new Date()
        });
    }


    render(){
        return (
            <div>
                <h1>Welcome to the {this.props.title}!</h1>
                <h2>{this.state.time.toLocaleDateString()}</h2>
            </div>
        );
    }
}
export default Clock;