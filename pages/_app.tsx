import 'bootstrap/dist/css/bootstrap.min.css'
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from './store'
import CustomNavbar from 'components/common/CustomNavbar'

const navItemArray = [
  {
    link: '/todo',
    name: 'Todo App',
  },
  {
    link: '/pomodoro',
    name: 'Pomodoro App',
  },
]

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=5.0, minimum-scale=0.86'
        />
      </Head>
      <CustomNavbar navItems={navItemArray} />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
