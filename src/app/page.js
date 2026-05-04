import ExtraSections from "@/components/homepage/ExtraSection";
import HeroSection from "@/components/homepage/HeroSection";
import PopularProducts from "@/components/homepage/PopularProducts";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularProducts />
     <ExtraSections />
      
    </>
  );
}
