import React from 'react';

import Card from './card';
import AddForm from './add-form';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }

        this.addCard = this.addCard.bind(this);
    }

    addCard(text) {
        this.setState({
            cards: [...this.state.cards, {
                text
            }]
        });
    }

    render() {
        const cards = this.state.cards.map((card, index) =>
            <Card key={index} {...card} />
        );
        return (
            <div className="list">
                <h3>{this.props.title}</h3>
                {cards}
                <AddForm type="card" onAdd={this.addCard} />
            </div>
        );
    }
}

List.defaultProps = {
    title: ''
};
