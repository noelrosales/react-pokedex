import React, { Component } from 'react';
import './sticky.css';

const stickyComponent = WrappedComponent => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {  
                fixed : false
            }
        }

        componentDidMount(){
            document.addEventListener('scroll', this.handleScroll);
        }

        componentWillUnmount(){
            document.removeEventListener('scroll', this.handleScroll);
        }

        handleScroll = (e) => {
            let wy = window.pageYOffset,
                nv = this.nv.offsetTop,
                cs = wy - nv;
                
            this.setState({
                fixed : cs > 0
            })
        }

        render() { 
            return  <div className={this.state.fixed ? 's sticky' : 's'} ref={elem => this.nv = elem}>
                        <WrappedComponent {...this.props}/>
                    </div>
        }
    }
     
}

export default stickyComponent;