import React from "react";
import EventCard from "./EventCard";
import Container from "../common/container";
import { eventData } from "data/eventData";

const ExploreMoreEvent = () => {
  const eventsData = eventData.filter((event) =>
    [
      "Managing difficult conversations with clarity",
      "opsgenie-ending",
      "opsgenie",
    ].includes(event.slug),
  );
  return (
    <div className="w-full">
      <Container>
        <div>
          <h4 className="text-[30px] font-bold font-merriweather text-tertiary-200 pb-12">
            Explore other events
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {eventsData.map((e) => {
            return (
              <EventCard
                title={e.title}
                link={`/event/${e.slug}`}
                key={e.slug}
                imgUrl={e.imgUrl}
                date={e.date}
                variant="light"
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default ExploreMoreEvent;
