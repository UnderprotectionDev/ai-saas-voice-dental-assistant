import { ActivityOverview } from "@/components/dashboard/activity-overview";
import { MainActions } from "@/components/dashboard/main-actions";
import { WelcomeSection } from "@/components/dashboard/welcome-section";
import { Navbar } from "@/components/navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <WelcomeSection />
        <MainActions />
        <ActivityOverview />
      </div>
    </div>
  );
}
