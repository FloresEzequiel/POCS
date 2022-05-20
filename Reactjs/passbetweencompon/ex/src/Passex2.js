import React from 'react';

class Passex2 extends React.Component{
    render(){
        return(
            <div>
                <h1>The names of students are: {this.props.names}</h1>
            </div>
        );
    }
}

Passex2.defaultProps = {
    names : ['Mike', 'Miguel', 'John']
}


export default Passex2;