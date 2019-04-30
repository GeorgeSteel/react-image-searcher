import React, { Component } from 'react'

export default class Searcher extends Component {

    searchRef = React.createRef();

    getData = e => {
        e.preventDefault();

        const term = this.searchRef.current.value;

        this.props.dataSearch(term);
    }

    render() {
        return (
        <form onSubmit={ this.getData }>
            <div className="row">
                <div className="form-group col-md-8">
                    <input className="form-control form-control-lg" type="text" ref={ this.searchRef } placeholder="Search you image, Example: Coffe"/>
                </div>
                <div className="form-group col-md-4">
                    <input type="submit" className="btn btn-lg btn-danger btn-block" value="Search"/>
                </div>
            </div>
        </form>
        )
    }
}
