import AnimatedSection from '@/components/AnimatedSection';
import SectionCarousel from '@/components/SectionCarousel';
import SectionLanding from '@/components/SectionLanding';

export default function Home() {



  return (
    <main className='z-0'>
      {/* Section 1 */}
      <SectionLanding />

      {/* Section 2 */}

      <AnimatedSection />


      {/* Section 3 */}
      <SectionCarousel />

    </main>
  );
}
