import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    setEditMode = () => {
        this.setState({editMode:  true}) //setState ассинхронен
    }
    deactivateEditMode = () => {
        this.setState({editMode:  false})
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onClick={this.setEditMode}>{this.props.status}</span>
                </div>}

                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status}/>
                </div>}
            </>
        )
    }
}

export default ProfileStatus