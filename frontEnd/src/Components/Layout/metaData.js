import React from 'react'
import {Helmet} from 'react-helmet'



const MetaData = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>{`${title}-Blogging`}</title>
                <meta name="description" content="React.js Boilerplate" />
            </Helmet>
        </div>
    );
}

export default MetaData;

