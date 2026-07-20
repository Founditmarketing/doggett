import Hero from "../components/Hero";
import SignatureApproach from "../components/SignatureApproach";
import PracticeAreas from "../components/PracticeAreas";
import Testimonials from "../components/Testimonials";
import EliteResults from "../components/EliteResults";
import CommunityPillar from "../components/CommunityPillar";
import LocalSeo from "../components/LocalSeo";
import ConciergeContact from "../components/ConciergeContact";
import PageSEO from "../components/PageSEO";

export default function Home() {
    return (
        <main className="flex-1">
            <PageSEO
                path="/"
                title="Doggett Law | Elite Alexandria Personal Injury & Family Law"
                description="Doggett Law Firm is an elite personal injury, family law, and succession firm based in Alexandria, Louisiana. Kenneth A. Doggett, Jr. provides aggressive litigation and signature representation for catastrophic truck accidents, divorce, and complex estates."
            />
            <Hero />
            <SignatureApproach />
            <PracticeAreas />
            <Testimonials />
            {/* <EliteResults /> */}
            <CommunityPillar />
            <LocalSeo />
            <ConciergeContact />
        </main>
    );
}
