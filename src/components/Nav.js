import React, { Component } from 'react'

export default class Nav extends Component {

    showPrevious = () => {
        const { page } = this.props;
        if(page === 1) return null;

        return(
            <button type="button" onClick={ this.props.previousPage } className="btn btn-info mr-1">Back &larr;</button>
        )
    }

    showNext = () => {
        const { page, totalPages } = this.props;
        if(page === totalPages) return null;

        return(
            <button type="button" onClick={ this.props.nextPage } className="btn btn-info">Next &rarr;</button>
        )
    }

    render() {
        return (
            <div className="row py-5">
                { this.showPrevious() }
                { this.showNext() }
            </div>
        )
    }
}
