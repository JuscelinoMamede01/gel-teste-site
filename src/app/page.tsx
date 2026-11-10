import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { ForWhom } from "@/components/ForWhom";
import { Hormones } from "@/components/Hormones";
import { Contents } from "@/components/Contents";
import { Cases } from "@/components/Cases";
import { Author } from "@/components/Author";
import { Offer } from "@/components/Offer";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { MobileBuyBar } from "@/components/MobileBuyBar";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Intro />
        <ForWhom />
        <Hormones />
        <Contents />
        <Cases />
        <Author />
        <Offer />
        <Faq />
      </main>
      <Footer />
      <MobileBuyBar />
    </>
  );
}
