import React from 'react';

class AddPlayer extends React.Component {
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

export default AddPlayer;
