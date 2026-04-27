import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import FeaturedSection from "@/components/FeaturedSection";

const Index = () => {
  return (
    <PageLayout>
      <Hero />
      <ServiceCards />
      <FeaturedSection />
    </PageLayout>
  );
};

export default Index;
