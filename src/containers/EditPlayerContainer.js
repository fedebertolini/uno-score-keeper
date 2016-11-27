import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { removePlayer, editPlayer } from '../actions/playerActions';

class EditPlayerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editMode: false };
    }

    render() {
        if (this.state.editMode) {
            return (
                <form ref="form" onSubmit={this.saveName.bind(this)}>
                    <input type="text" ref="name" defaultValue={this.props.player.name}></input>
                    <button type="submit">Save</button>
                </form>
            );
        }
        return (
            <div>
                <button type="button" onClick={this.toggleEditionMode.bind(this)}>Edit</button>
                <button type="button" onClick={this.removePlayer.bind(this)}>Remove</button>
                <span>{this.props.player.name}</span>
            </div>
        );
    }

    toggleEditionMode() {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    saveName(event) {
        event.preventDefault();
        var playerName = this.refs.name.value;
        if (playerName) {
            this.props.onSavePlayer(this.props.player.id, playerName);
            this.refs.form.reset();

            this.toggleEditionMode();
        }
    }

    removePlayer() {
        this.props.onRemovePlayer(this.props.player.id);
    }
}

EditPlayerContainer.propTypes = {
    player: PropTypes.shape({
        id: React.PropTypes.string,
        name: React.PropTypes.string
    }).isRequired
}

const mapStateToProps = (state) => {
    return { };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRemovePlayer: (playerId) => {
            dispatch(removePlayer(playerId));
        },
        onSavePlayer: (playerId, newPlayerName) => {
            dispatch(editPlayer(playerId, newPlayerName));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPlayerContainer);
