import React from 'react';


export function websitePageHOC(Component: React.ElementType) {
    return ({ } = {}) => {
        return (
            <Component />
        )
    };
}