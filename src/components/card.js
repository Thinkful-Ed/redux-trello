import React from 'react';

export default function Card(props) {
    return (
        <div className="card">
            {props.text}
        </div>
    );
};

Card.defaultProps = {
    text: ''
};
