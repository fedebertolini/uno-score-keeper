import React from 'react';
require('./style.scss');

class AddPlayer extends React.Component {
    render() {
        return (
            <form className="add-player-component"
                ref={(form) => { this.form = form; }}
                onSubmit={this.submitForm.bind(this)}>

                <input type="text" ref={(input) => { this.nameInput = input; }}></input>
                <button className="button" type="submit"><strong>+</strong></button>
            </form>
        )
    }

    submitForm(event) {
        event.preventDefault();
        var playerName = this.nameInput.value;
        if (playerName) {
            this.props.onAddPlayer(playerName);
            this.form.reset();
        }
    }
}

AddPlayer.propTypes = {
    onAddPlayer: React.PropTypes.func.isRequired,
};

export default AddPlayer;
