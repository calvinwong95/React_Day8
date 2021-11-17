import React from 'react';
import classes from "./moviecard.module.css";
import {Link} from "react-router-dom";


class MovieCard extends React.Component{
    render(){
        return(
            <Link className={classes.movie_section} to={{pathname: `React_Day8/details/${this.props.id}`}}>
                <img src={this.props.poster} alt="" className={classes.img_holder} />
                <div className={classes.details_holder}>
                   
                </div>
            
            </Link>
        )
    }
}

export default MovieCard;