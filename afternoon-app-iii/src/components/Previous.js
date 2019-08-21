import React, {Component} from 'react'

class Previous extends Component {
    
    render() {
        return (
            <div className="scroll-left">
              <button onClick={() => this.props.clickFunc()}>&lt; Previous</button>
            </div>
        )
    }
}

export default Previous