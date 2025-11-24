import HeroSlider from "@/Components/Home/HeroSlider";
import MyContainer from "@/Components/MyContainer/MyContainer";
import Image from "next/image";

export default function Home() {
  return (
    <MyContainer>
      <div className="min-h-screen">
        <HeroSlider></HeroSlider>
      </div>
    </MyContainer>
  );
}
