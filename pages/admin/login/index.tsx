import Footer from "../../../src/components/Footer";
import Preloader from "../../../src/components/Preloader";
import dynamic from "next/dynamic";

const AdminSignInModules = dynamic(() => import("../../../src/modules/AdminSignin"), {
  loading: () => <Preloader />,
});

export default function SignIn() {
  return (
    <main>
      <AdminSignInModules />
      {/* <Footer /> */}
    </main>
  );
}
