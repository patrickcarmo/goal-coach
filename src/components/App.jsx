import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

class App extends Component{
    
    signOut() {
        firebaseApp.auth().signOut();
    }

    render(){
        return (
            <div>
                <h1>Goal Coach</h1>
                <button
                    className="btn btn-danger"
                    onClick={() => this.signOut()}
                >
                    Sign Out
                </button>
            </div>
        )
    }
}

export default App;