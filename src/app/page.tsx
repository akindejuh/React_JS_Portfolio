import SmoothScroll from '@/components/smooth-scroll';
import Header from '@/components/header';
import Hero from '@/sections/hero';
import Numbers from '@/sections/numbers';
import Woju from '@/sections/woju';
import Method from '@/sections/method';
import GitHub from '@/sections/github';
import Experience from '@/sections/experience';
import Work from '@/sections/work';
import Contact from '@/sections/contact';

// The page runs like a keynote: who, the numbers, the product, how, the record, the ask.
export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <Numbers />
        <Woju />
        <Method />
        <GitHub />
        <Experience />
        <Work />
        <Contact />
      </main>
    </>
  );
}
