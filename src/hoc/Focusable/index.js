import React, { Component } from 'react';
import './focusable.css';

class Focusable extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected : false
        }
    }

    componentDidMount(){
        this.nv.addEventListener('mouseenter', this.handleFocus)
        this.nv.addEventListener('mouseleave', this.leaveFocus)
        this.nv.addEventListener('click', this.handleClick)
    }

    componentWillUnmount() {
        this.nv.removeEventListener('mouseenter', this.handleFocus)
        this.nv.removeEventListener('click', this.handleClick)
    }

    handleFocus = (e) => {
        // this.props.onHover(this.props.data)
        // console.log(this.props)
    }

    leaveFocus = (e) => {
        // this.props.onHover(null)
        // console.log(this)
    }

    handleClick = (e) => {
        if(!this.state.selected){
            this.nv.classList.add('marked')
            this.setState({
                selected : true
            })
        }else {
            this.nv.classList.remove('marked')
            this.setState({
                selected : false
            })
        }
    }

    render() { 
        return (
            <div ref={elem => this.nv = elem} className="focusable" draggable={true}>
                {this.props.children}
            </div>
        );
    }
}
 
export default Focusable;