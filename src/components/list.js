import React from 'react';

import Card from './card';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [{
                text: 'Example card 1'
            }, {
                text: 'Example card 2'
            }, {
                text: 'Example card 3'
            }]
        }
    }

    render() {
        const cards = this.state.cards.map((card, index) =>
            <Card key={index} {...card} />
        );
        return (
            <div className="list">
                <h3>{this.props.title}</h3>
                {cards}
            </div>
        );
    }
}

List.defaultProps = {
    title: ''
};
