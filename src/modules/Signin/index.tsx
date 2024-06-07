import BreadCrumbs from "../../../src/components/BreadCrumbs";
import SignInArea from "./SignInArea";
import Newsletter from "../../../src/components/Newsletter";
import { useEffect, useState } from "react";

export default function SignInModules() {
  // State to check if the component is mounted
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Render a loading state or nothing on the initial render
    return null;
  }

  return (
    <main>
      <BreadCrumbs Title="SignIn" subTitle="SignIn" />
      <SignInArea />
      <Newsletter />
    </main>
  );
}
