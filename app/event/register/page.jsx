import { currentEventName } from "config";
import { getUsersCount } from "pages/api/event/follow-up";
import { connectToDatabaseOnly } from "lib/mongo";
import Content from "./content";

export const metadata = {
  title: "Event Registration | Alluvium",
};

// The in-person capacity check must run on every request (it reads live
// registration counts from the database), same as the old getServerSideProps.
export const dynamic = "force-dynamic";

export default async function Page() {
  let lockInPersonRegistrations = true,
    message = null,
    messageStatus = "info";

  const dbStatus = connectToDatabaseOnly();
  if (dbStatus == undefined) {
    message = "DB connection is not established, Please connect support";
    messageStatus = "error";
  }
  if (!dbStatus.success) {
    message = dbStatus.message;
    messageStatus = "error";
  }
  if (dbStatus.success) {
    await getUsersCount(currentEventName, "In-Person")
      .then((response) => {
        if (response !== undefined) {
          const { success, usersLength } = response;
          if (!success) lockInPersonRegistrations = true;
          if (usersLength != null && usersLength >= 90) {
            message =
              "We have exceeded our capacity for In-person registration, all further registrations will be online by default. Thank you.";
            lockInPersonRegistrations = true;
          } else {
            lockInPersonRegistrations = false;
          }
        }
      })
      .catch((err) => {
        console.log(err);
        message =
          err?.response?.data?.message ||
          "I can only get online attendee form. Please refresh the page or reach out for support if you want to attend physically.";
      });
  }

  return (
    <Content
      lockInPersonRegistrations={lockInPersonRegistrations}
      message={message}
      messageStatus={messageStatus}
    />
  );
}
