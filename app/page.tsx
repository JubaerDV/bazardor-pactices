
import Navbar from "@/components/Navbar/Navbar";
import PriceTicker from "@/components/PriceTicker/PriceTicker";
import Hero from "@/components/Hero/Hero";
import PriceMovement from "@/components/Product/PriceMovement";
import ProductList from "@/components/Product/ProductList";

export default function Home() {
  return (
    <>
      <Navbar />
      <PriceTicker />
      <Hero />
      <PriceMovement />
      <ProductList />
    </>
  );
}
