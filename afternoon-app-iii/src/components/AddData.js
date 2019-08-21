import React, {Component} from 'react'
//data 
import data from '../data'
//components
import Previous from './Previous'
import Next from './Next'

class AddData extends Component {
    constructor(){
        super()
        this.state = {
            index: 0
        }
        this.onClickNext = this.onClickNext.bind(this)
        this.onClickPrevious = this.onClickPrevious.bind(this)
    }
    onClickNext(){
        this.setState({index: this.state.index + 1})
        if(this.state.index >= 24){
            this.setState({index: 0})
        }
    }

    onClickPrevious(){
        this.setState({index: this.state.index - 1});   
        if(this.state.index <= 0){
            this.setState({index: 24})
        }
    }
    
    render(){
        return (
            <>
            <div className="white-box">
                {/* white box left */}
                <div className="white-box-left">
                    <div>
                        <h1 className="name" >{data[this.state.index].name.first} {data[this.state.index].name.last}</h1>
                    </div>
                    <div>
                        <h2>From: {data[this.state.index].city}, {data[this.state.index].country}</h2>
                        <h2>Job Title: {data[this.state.index].title}</h2>
                        <h2>Employer: {data[this.state.index].employer}</h2>
                    </div>
                    <div>
                        <h3>Favorite Movies:</h3>
                        <ol className="movie-list">
                            <li>{data[this.state.index].favoriteMovies[0]}</li>
                            <li>{data[this.state.index].favoriteMovies[1]}</li>
                            <li>{data[this.state.index].favoriteMovies[2]}</li>
                        </ol>
                    </div>
                </div>
                {/* white box right */}
                <div className="white-box-right">
                    <number className="page-number">{this.state.index + 1}/25</number>
                </div>
            </div>
            {/* buttons */}
            <div className="buttons">
                <Previous clickFunc={this.onClickPrevious}/>
            <div className="buttons-mid">
                <button>Edit</button>
                <button>Delete</button>
                <button>New</button>
            </div>
                <Next clickFunc2={this.onClickNext}/>
            </div>
            </>
        )
    }
}

export default AddData