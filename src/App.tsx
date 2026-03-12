import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SignatureApproach from "./components/SignatureApproach";
import PracticeAreas from "./components/PracticeAreas";
import EliteResults from "./components/EliteResults";
import CommunityPillar from "./components/CommunityPillar";
import ConciergeContact from "./components/ConciergeContact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-alabaster selection:bg-champagne selection:text-obsidian">
      <Navbar />
      <main>
        <Hero />
        <SignatureApproach />
        <PracticeAreas />
        <EliteResults />
        <CommunityPillar />
        <ConciergeContact />
      </main>
      <Footer />
    </div>
  );
}
