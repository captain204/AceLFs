import BreadCrumbs from "../../../src/components/BreadCrumbs";
import SignUpArea from "./SignUpArea";
import Newsletter from "../../../src/components/Newsletter";

export default function SignUpModules() {
  return (
    <main>
      <BreadCrumbs Title="SignUp" subTitle="SignUp" />
      <SignUpArea />
      <Newsletter />
    </main>
  );
}
