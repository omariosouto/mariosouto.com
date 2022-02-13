import React from 'react';
import { SkynexUIProvider } from '@src/components/wrappers/SkynexUIProvider/SkynexUIProvider';


export function websitePageHOC(Component: React.ElementType, allProps = {}) {
    const { ...props } = allProps;
    return (componentProps) => {
        return (
            <SkynexUIProvider>
                <Component {...props} {...componentProps} />
            </SkynexUIProvider>
        )
    };
}
