import Hero from "../components/Hero";
import SignatureApproach from "../components/SignatureApproach";
import PracticeAreas from "../components/PracticeAreas";
import Testimonials from "../components/Testimonials";
import EliteResults from "../components/EliteResults";
import CommunityPillar from "../components/CommunityPillar";
import ConciergeContact from "../components/ConciergeContact";

export default function Home() {
    return (
        <main className="flex-1">
            <Hero />
            <SignatureApproach />
            <PracticeAreas />
            <Testimonials />
            <EliteResults />
            <CommunityPillar />
            <ConciergeContact />
        </main>
    );
}
