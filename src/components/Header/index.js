import React, { Component } from 'react';
import './header.css';
import {Icon} from 'react-fa';


class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key : ''
        }
    }

    onHandleChange = (e) => {
        this.setState({
            key:e.target.value
        })

        this.props.onSearch(e.target.value);
    }

    render() { 
        return(
            <div className="header">
                <div className="search">
                    <input type="text" onChange={this.onHandleChange}/>
                    <Icon className="icon" name="search" />
                </div>
            </div>
        )
    }
}
 
export default header;