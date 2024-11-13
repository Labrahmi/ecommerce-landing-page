import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { SocialProof } from '@/components/sections/social-proof';
import { Pricing } from '@/components/sections/pricing';
import { FAQ } from '@/components/sections/faq';
import { Newsletter } from '@/components/sections/newsletter';
import { TrustBadges } from '@/components/sections/trust-badges';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <SocialProof />
      <Pricing />
      <FAQ />
      <Newsletter />
      <TrustBadges />
    </>
  );
}