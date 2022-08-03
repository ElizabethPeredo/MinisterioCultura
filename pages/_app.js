import Navbar from '../src/components/Header/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css'; //importing font awesome css
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import '../src/assets/css/global.css'
/*import 'tailwindcss/tailwind.css';*/
import { useEffect } from "react"
import mermaid from "mermaid/dist/mermaid.min.js"
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad:true,
      theme: 'default',
    });
  }, [])

  return (
    <>

      <Navbar />
      
      <Component {...pageProps} />
      <Footer />
    </>)
}

export default MyApp
