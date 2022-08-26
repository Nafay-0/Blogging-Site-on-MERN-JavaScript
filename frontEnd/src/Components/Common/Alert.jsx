import React from 'react';

const Alert = ({ message }) => {
    return (
        <div>
            <div className="alert alert-danger self-center" role="alert">
                <h4 className="alert-heading ml-[50%] text-5xl">Alert</h4>
                    <p className="mb-0">{message}</p>
            </div>
        </div>
    );
}

export default Alert;

