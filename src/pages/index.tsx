import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import { AboutUs } from '@/components/AboutUs'
import { Services } from '@/components/Services'
import { OurTeam } from '@/components/OurTeam'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { Testimonials } from '@/components/Testimonials'
import { OurBlog } from '@/components/OurBlog'

import { getBanner } from '@/utils/getBanner'
// import { getAboutUs } from '@/utils/getAboutUs'

export default function Home({ data }: any) {
  if (!data) return
  const {
    banner,
    // aboutUs
  } = JSON.parse(data)

  const testimonials = [
    {
      name: "José",
      star: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet odio ligula. Pellentesque sit amet mollis eros. Cras eget eros convallis, tincidunt nulla ut, porta ligula.",
    },
    {
      name: "José",
      star: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet odio ligula. Pellentesque sit amet mollis eros. Cras eget eros convallis, tincidunt nulla ut, porta ligula.",
    },
    {
      name: "José",
      star: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet odio ligula. Pellentesque sit amet mollis eros. Cras eget eros convallis, tincidunt nulla ut, porta ligula.",
    },
    {
      name: "José",
      star: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet odio ligula. Pellentesque sit amet mollis eros. Cras eget eros convallis, tincidunt nulla ut, porta ligula.",
    },
    {
      name: "José",
      star: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet odio ligula. Pellentesque sit amet mollis eros. Cras eget eros convallis, tincidunt nulla ut, porta ligula.",
    },
    {
      name: "José",
      star: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet odio ligula. Pellentesque sit amet mollis eros. Cras eget eros convallis, tincidunt nulla ut, porta ligula.",
    },
    {
      name: "José",
      star: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet odio ligula. Pellentesque sit amet mollis eros. Cras eget eros convallis, tincidunt nulla ut, porta ligula.",
    },
    {
      name: "José",
      star: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet odio ligula. Pellentesque sit amet mollis eros. Cras eget eros convallis, tincidunt nulla ut, porta ligula.",
    }
  ]

  console.log(banner)
  return (
    <>
      <Header />
      <div className="relative top-[72px] sm:top-[80px]">
        {/* <Banner banner={banner} /> */}
        {/* <AboutUs aboutUs={aboutUs} /> */}
        <Services />
        <OurTeam />
        <Testimonials testimonials={testimonials} />
        <OurBlog />
        <FAQ />
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { banner } = await getBanner()
  // const { aboutUs } = await getAboutUs()
  
  return {
    props: {
      data: JSON.stringify({
        banner,
        // aboutUs
      }) || null
    }
  }
}