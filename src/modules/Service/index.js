import BreadCrumbs from "../../components/BreadCrumbs";
import ServiceArea from "./ServiceArea";
import Newsletter from "../../components/Newsletter";
import ScrollTop from "../../components/ScrollTop";

export default function ServiceModules() {
  return (
    <main>
      <BreadCrumbs Title="Programs" subTitle="Programs" />
      <ServiceArea />
      <Newsletter />
      <ScrollTop />
    </main>
  );
}
