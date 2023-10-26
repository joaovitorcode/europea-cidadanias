import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import { AboutUs } from '@/components/AboutUs'
import { Services } from '@/components/Services'
import { OurTeam } from '@/components/OurTeam'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative top-[72px] sm:top-[80px]">
        <Banner />
        <AboutUs />
        <Services />
        <OurTeam />
        <FAQ />
        <Footer />
      </div>
    </>
  )
}
