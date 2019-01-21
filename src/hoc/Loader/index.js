import React, { Component } from 'react';
import './loader.css';
import {Icon} from 'react-fa';

const loader = (propName) => (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = { 
                
            }
        }

        isObject = val =>{
            if (val === null) { return false;}
            return ( (typeof val === 'function') || (typeof val === 'object') );
        }
        

        shouldShow = (props, propName) => {
            if(props[propName] && props[propName].length > 0)
                return true
            else    
                return false
        }

        render() { 
            return (
                this.shouldShow(this.props, propName)
                ? <WrappedComponent { ...this.props }/>
                : <div className="loader">
                    <img src='https://media1.tenor.com/images/c59e7bfa31590e3f9eb4925639ddeb88/tenor.gif?itemid=7283217'/>
                 </div>
            )
        }
    }
    
}

export default loader;