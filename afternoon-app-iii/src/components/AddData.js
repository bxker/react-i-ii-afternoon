import React, {Component} from 'react'

class AddData extends Component {
    render(){
        return (
            <>
                <div className="white-box-left">
                    <div>
                        <h1 className="name">Jacob Baker</h1>
                    </div>

                    <div>
                        <h2>From:</h2>
                        <h2>Job Title:</h2>
                        <h2>Employer: </h2>
                    </div>

                    <div>
                        <h3>Favorite Movies:</h3>
                        <ol className="movie-list">
                            <li>Test1</li>
                            <li>Test2</li>
                            <li>Test3</li>
                        </ol>
                    </div>
                </div>
                <div className="white-box-right">
                    <number className="page-number">1/25</number>
                </div>
            </>
        )
    }
}

export default AddData