import React from 'react';

const Img = (props) => {
    const { largeImageURL, likes, previewURL, tags, views } = props.img;

    return (
        <div className="col-6 col-sm-4 col-md-3 mb-5">
            <div className="card">
                <img className="card-img-top" src={ previewURL } alt={ tags }/>
                <div className="card-body">
                    <p className="card-text">{ likes } Likes</p>
                    <p className="card-text">{ views } Views</p>
                    <a href={ largeImageURL } target="__blank" className="btn btn-primary btn-block">View</a>
                </div>
            </div>
        </div>
    );
};

export default Img;