import React from 'react';

export default props => {
    const style = {
        'backgroundColor': props.color
    };
    return(
        <div className="block" style={style}></div>
    )
}