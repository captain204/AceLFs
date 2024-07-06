import { useRouter } from "next/router";
import Events from "../../.././src/data/events.json";

import Footer from "../../../src/components/Footer";
import HeaderTwo from "../../../src/components/Header/HeaderTwo";
import Preloader from "../../../src/components/Preloader";
import dynamic from "next/dynamic";

const EventDetailsModules = dynamic(() => import("../../../src/modules/EventDetails"), {
  loading: () => <Preloader />,
});

export default function EventDetails() {
  const router = useRouter();
  const { asPath } = router;
  const eventSlug = asPath.split("/")[2];

  const singleEvent = Events.filter((event) => {
    return event.slug === eventSlug;
  });

  return (
    <main>
      <HeaderTwo />

      <EventDetailsModules item={singleEvent[0]} />

      <Footer />
    </main>
  );
}
