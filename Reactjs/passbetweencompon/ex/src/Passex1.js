// component
import React from 'react';

class Passex1 extends React.Component{
    render(){
        return(
            <div>
                {//using default prop - title
                }
                <h1>This is {this.props.title} Website!</h1>
            </div>
        );
    }
}

Passex1.default = {
    title: "Hello There"
}

export default Passex1;