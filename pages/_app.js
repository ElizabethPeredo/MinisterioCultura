import Navbar from '../src/components/Header/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css'; //importing font awesome css
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import '../src/assets/css/global.css'
/*import 'tailwindcss/tailwind.css';*/

function MyApp({ Component, pageProps }) {

  return (
    <>

      <Navbar />
      
      <Component {...pageProps} />
      <Footer />
    </>)
}

export default MyApp
