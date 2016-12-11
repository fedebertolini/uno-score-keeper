import React, { PropTypes } from 'react';

class EditPlayer extends React.Component {
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

EditPlayer.propTypes = {
    player: PropTypes.shape({
        id: React.PropTypes.string,
        name: React.PropTypes.string
    }).isRequired
}

export default EditPlayer;
