import React from 'react';
import {connect} from 'react-redux';

import Card from './card';
import AddForm from './add-form';

import {addCard} from '../actions';

export class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }

        this.addCard = this.addCard.bind(this);
    }

    addCard(text) {
        this.props.dispatch(addCard(text, this.props.index));
    }

    render() {
        const cards = this.props.cards.map((card, index) =>
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

export default connect()(List);
