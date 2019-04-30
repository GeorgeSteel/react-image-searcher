import React from 'react';

const Nav = (props) => {
    return (
        <div className="row py-5">
            <button type="button" onClick={ props.previousPage } className="btn btn-info mr-1">Back &larr;</button>
            <button type="button" onClick={ props.nextPage } className="btn btn-info">Next &rarr;</button>
        </div>
    );
};

export default Nav;