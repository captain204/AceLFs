import "../src/assets/css/nice-select.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/font-awesome-pro.css";
import "../src/assets/css/flaticon_xoft.css";
import "../src/assets/css/flaticon_mycollection.css";
import "../src/assets/scss/main.scss";
import "../src/assets/css/spacing.css";
import "../src/assets/css/meanmenu.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Providers } from "../src/redux/providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

function App({ Component, pageProps }) {
  return (
    <>
      <Providers>
        {/* <AppRouterCacheProvider  options={{ key: 'css' }}> */}
          <Component {...pageProps} />
          <ToastContainer />
        {/* </AppRouterCacheProvider> */}
      </Providers>
    </>
  );
}

export default App;
