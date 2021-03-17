import React from 'react'
// import s from './Profile.module.css'


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    setEditMode = () => {
        this.setState({editMode:  true}) //setState ассинхронен
    }
    deactivateEditMode = () => {
        this.setState({editMode:  false})
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
                    <input autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.props.status}/>
                </div>}
            </>
        )
    }
}

export default ProfileStatus