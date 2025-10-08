import { DentalHealthOverview } from "./dental-health-overview";
import { NextAppointment } from "./next-appointment";

export const ActivityOverview = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <DentalHealthOverview />
      <NextAppointment />
    </div>
  );
};
