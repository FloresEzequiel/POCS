import React from 'react';

class Passex3 extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.names.map(
                    function namesIterator(item,i){
                        return (
                            "Student "+(i+1) + ": "+
                            item +
                            ((i!=2)?', ':'\n')
                        )
                    }
                )}</h1>
            </div>
        )
    }
}

Passex3.defaultProps = {
    names: ['Miguel', 'Mike', 'Marco']
}
export default Passex3;