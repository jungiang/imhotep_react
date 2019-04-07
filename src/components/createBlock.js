import React from 'react';

export default props => {
    const style = {
        'background-color': props.color
    };
    return(
        <div className="block" style={style}></div>
    )
}