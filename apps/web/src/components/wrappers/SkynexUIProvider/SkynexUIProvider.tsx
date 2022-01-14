import { Provider } from '@skynexui/components';

export const SkynexUIProvider = ({ children }) => {
    return (
        <Provider>
            {children}
        </Provider>
    );
};