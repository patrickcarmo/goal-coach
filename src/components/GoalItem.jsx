import React, { Component } from 'react';
import { connect } from 'react-redux';

import { completeGoalRef } from '../firebase';

class GoalItem extends Component { 

    completeGoals() {
        const { email } = this.props.user;
        const { title } = this.props.goal;
        console.log('email', email, 'title', title);
        completeGoalRef.push({ email, title });
    }

    render() {
        console.log('this.props.goal', this.props.goal);
        const { email, title } = this.props.goal;
        return (
            <div style={{ margin: '5px' }}>
                <strong>{title}</strong>
                <span> submitted by <em>{email}</em></span>
                <button
                    style={{ marginLeft: '5px' }}
                    className="btn btn-sm btn-primary"
                    onClick={ () => this.completeGoals() }
                >
                    Complete
                </button>
            </div>
        )
    }

}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(GoalItem);