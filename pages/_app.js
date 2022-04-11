import {Layout} from "common/index";
import { wrapper } from '../redux/store'

const App = ({ Component,pageProps }) => {
  return (
    <Layout>
    <Component{...pageProps}/>
    </Layout>
  )
}

export default wrapper.withRedux(App)

