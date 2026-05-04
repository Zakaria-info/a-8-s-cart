import HeroSection from "@/components/homepage/HeroSection";
import PopularProducts from "@/components/homepage/PopularProducts";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularProducts />
     
      <h2>Welcome to the Home Page</h2>
    </>
  );
}
