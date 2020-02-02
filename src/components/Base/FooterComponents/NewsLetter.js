import React from 'react';

export default function NewsLetter() {
    return (
        <div className="row pl-4 pr-4">
            <h6 className="font-weight-bold text-white mt-2 mb-2"><ins>Stay Informed</ins></h6>
            <input type="text" className="form-control" placeholder="Your Email" aria-label="Your Email" />
            <button type="button " className="btn btn-dark btn-sm btn-block btn-outline-light mt-2 mb-2">Submit</button>
        </div>
    )
}