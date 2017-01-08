import React, { PropTypes } from 'react';
require('./style.scss');

class EditPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editMode: false };
    }

    render() {
        if (this.state.editMode) {
            return (
                <form className="edit-player-component"
                    ref={(form) => { this.form = form; }}
                    onSubmit={this.saveName.bind(this)}>

                    <input type="text"
                        ref={(input) => { this.nameInput = input; }}
                        defaultValue={this.props.player.name}>
                    </input>
                    <button className="button" type="submit">Save</button>
                </form>
            );
        }
        return (
            <div className="edit-player-component">
                <span>{this.props.player.name}</span>

                <button className="button danger" type="button"
                    onClick={this.removePlayer.bind(this)}>&times;
                </button>
                <button className="button" type="button"
                    onClick={this.toggleEditionMode.bind(this)}>Edit
                </button>
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
        var playerName = this.nameInput.value;
        if (playerName) {
            this.props.onSavePlayer(this.props.player.id, playerName);
            this.form.reset();

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
    }).isRequired,
    onRemovePlayer: React.PropTypes.func.isRequired,
    onSavePlayer: React.PropTypes.func.isRequired,
}

export default EditPlayer;
