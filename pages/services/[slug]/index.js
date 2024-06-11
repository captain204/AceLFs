import { useRouter } from "next/router";
import Footer from "../../../src/components/Footer";
import HeaderTwo from "../../../src/components/Header/HeaderTwo";
import Preloader from "../../../src/components/Preloader";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import axios from "axios";

const ServiceDetailsModules = dynamic(
  () => import("../../../src/modules/ServiceDetails"),
  {
    loading: () => <Preloader />,
  },
);

export default function ServiceDetails() {
  const router = useRouter();
  const { asPath } = router;
  const serviceSlug = asPath.split("/")[2];
  const [Services, setServices] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/program/degrees`)
        .then((response) => {
            setServices(response.data);
        }
      ).catch((error) => console.log(error))
}, [])

  const singleService = Services.filter((service) => {
    return service.slug === serviceSlug;
  });

  return (
    <main>
      <HeaderTwo />
      <ServiceDetailsModules item={singleService[0]} />

      <Footer />
    </main>
  );
}
