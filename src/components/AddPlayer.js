import React from 'react';

class AddPlayer extends React.Component {
    render() {
        return (
            <form ref={(form) => { this.form = form; }} onSubmit={this.submitForm.bind(this)}>

                <input type="text" ref={(input) => { this.nameInput = input; }}></input>
                <button type="submit">Add</button>
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

export default AddPlayer;
