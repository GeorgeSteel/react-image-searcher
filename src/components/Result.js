import React, { Component } from 'react';
import Img from './Img';
import Nav from './Nav';

export default class Result extends Component {
    
    showImgs = () => {
        const imgs = this.props.imgs;

        if(imgs.length === 0) return null;

        return(
            <React.Fragment>
                <div id="result" className="col-s12 p-5 row">
                    {imgs.map(img => (
                        <Img
                            key={ img.id }
                            img={ img }
                        />
                    ))}
                </div>
                <Nav
                    nextPage={ this.props.nextPage }
                    previousPage={ this.props.previousPage }
                />
            </React.Fragment>
        )
    }
    
    render() {
        return (
        <React.Fragment>
            { this.showImgs() }
        </React.Fragment>
        )
    }
}
