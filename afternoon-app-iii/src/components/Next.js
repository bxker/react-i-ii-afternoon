import React, {Component} from 'react'

class Next extends Component {
    
    render() {
        return (
            <div className="scroll-right">
              <button onClick={() => this.props.clickFunc2()}>Next &gt;</button>
            </div>
        )
    }
}

export default Next;