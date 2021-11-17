import React from 'react';

import {connect} from 'react-redux';
import {fetchMovieDetails} from "../../actions";
import classes from './details.module.css';
import {Link} from 'react-router-dom';


class Details extends React.Component{
    
    constructor(props) {
        super(props);
        const urlParam = window.location.href;
        const urlSplit = urlParam.split("/");
        const id = urlSplit[urlSplit.length-1];
        console.log(id);

        this.state = {
            movieID:id,
            data: {},
        }
        
    }

    componentDidMount() {
        this.props.onFetchMovieDetails(this.state.movieID);
        
    }
    //get this later from arjun
    componentDidUpdate(prevProps) {
        const { movieDetailsData} = this.props;
        if (prevProps.movieDetailsData.isLoading && !movieDetailsData.isLoading){
            this.setState({data: movieDetailsData.data});
            console.log(movieDetailsData.data);
        }

    }
    render(){
        return(
            
            <div>
                <h1>Details Of Selected Movie</h1>
                {this.props.movieDetailsData.isLoading? <p>Loading.....</p> :
                <div className={classes.movieHolder}>
                <div className={classes.imageHolder}>
                    <img src={this.state.data.Poster} alt="" ></img>
                </div>
                <div>
                <h2>Title: {this.state.data.Title}</h2>
                <h3>Casts: {this.state.data.Actors}</h3> 
                <h3>Directed by: {this.state.data.Director}</h3> 
                <h3>Year: {this.state.data.Year}</h3> 
                <h3>Description: {this.state.data.Plot}</h3>
                <Link to="React_Day8/" ><button>Go back</button> </Link>
                </div>
                </div>
                }
            </div>
             
        )           
    }
}

const mapStateToProps = (state) => ({
    movieDetailsData : state.movieDetails,
});

const mapDispatchToProps = {
    onFetchMovieDetails : fetchMovieDetails,
}


export default connect(mapStateToProps,mapDispatchToProps)(Details);