import React from 'react';
import {connect} from 'react-redux';

import Card from './card';
import AddForm from './add-form';

import {addCard} from '../actions';

export class List extends React.Component {
    addCard(text) {
        this.props.dispatch(addCard(text, this.props.index));
    }

    render() {
        const cards = this.props.cards.map((card, index) =>
            <li key={index}>
                <Card {...card} />
            </li>
        );
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul className="list">
                    {cards}
                    <li>
                        <AddForm
                            type="card"
                            onAdd={text => this.addCard(text)}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

List.defaultProps = {
    title: ''
};

export default connect()(List);
