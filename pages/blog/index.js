import Footer from "../../src/components/Footer";
import HeaderTwo from "../../src/components/Header/HeaderTwo";
import Preloader from "../../src/components/Preloader";
import dynamic from "next/dynamic";

const BlogModules = dynamic(() => import("../../src/modules/Blog"), {
  loading: () => <Preloader />,
});

export default function Blog() {
  return (
    <main>
      <HeaderTwo />

      <BlogModules />

      <Footer />
    </main>
  );
}
