import React from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../actions/playerActions';

class AddPlayerContainer extends React.Component {
    render() {
        return (
            <form ref="form" onSubmit={this.submitForm.bind(this)}>
                <input type="text" ref="name"></input>
                <button type="submit">Add</button>
            </form>
        )
    }

    submitForm(event) {
        event.preventDefault();
        var playerName = this.refs.name.value;
        if (playerName) {
            this.props.onAddPlayer(playerName);
            this.refs.form.reset();
        }
    }
}

const mapStateToProps = (state) => {
    return { };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPlayer: (name) => {
            dispatch(addPlayer(name));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayerContainer);
