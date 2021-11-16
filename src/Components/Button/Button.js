import React from 'react';

const Button = function ({title, className, disabled}) {
    return (
            <button className={className} onClick={()=> console.log(title)} disabled={disabled}>
                {title}
            </button>
        )
};

export default Button;