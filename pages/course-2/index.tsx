import Footer from "../../src/components/Footer";
import HeaderTwo from "../../src/components/Header/HeaderTwo";
import Preloader from "../../src/components/Preloader";
import dynamic from "next/dynamic";

const CourseTwoModules = dynamic(() => import("../../src/modules/CourseTwo"), {
  loading: () => <Preloader />,
});

export default function Course() {
  return (
    <main>
      <HeaderTwo />

      <CourseTwoModules />

      <Footer />
    </main>
  );
}
