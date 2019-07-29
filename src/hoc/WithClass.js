import React from 'react';

const WithClass = props => (
    <div className={props.classes}>{props.children}
        {/*wraps the children in a div with a className */}
</div>
);

export default WithClass;