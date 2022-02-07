import { Provider } from '@skynexui/components'

export default function App({ Component, pageProps }) {
  return (
    <Provider
      theme={{
        components: {
          textField: {
            variant: 'basicBordered', // or put "bottomBorder"
          },
        },
      }}
    >
      <style global jsx>{`
        * {
          box-sizing: border-box;
        }
        body {
          overflow: hidden;
        }
      `}</style>
      <Component {...pageProps} />
    </Provider>
  )
}
