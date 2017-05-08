import React from 'react';
import {connect} from 'react-redux';

import Card from './card';
import AddForm from './add-form';

import {addCard} from '../actions';

import './list.css';

export class List extends React.Component {
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
                <AddForm type="card" onAdd={text => this.addCard(text)} />
            </div>
        );
    }
}

List.defaultProps = {
    title: ''
};

export default connect()(List);
