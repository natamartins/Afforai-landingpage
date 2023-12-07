import NavBar from '@/components/NavBar/Index'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import AppSumo from '@/img/appsumo.png'
import LaptopLadingpage01 from '@/img/laptop-landing-1.png'
import LaptopLadingpage03 from '@/img/laptop-landing-3.png'
import CardPurple from '@/components/CardLinks/CardPurple'
import CardGray from '@/components/CardLinks/CardGray'
import CardTitleCheck from '@/components/CardTitleCheck/Index'

export default function Home() {
  const url = 'https://appsumo.com/products/Afforai/?p=1&clickId=WZ6wcxyF0xyPUvwxVMQEwwLVUkFSpxQm%3AVl6wM0&irgwc=1&utm_medium=4245229&utm_campaign=Online%20Tracking%20Link&utm_source=IR#pricePlans'

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section className='section_one container'>
          <div className='section_one-app-sumo'>
            <Image src={AppSumo} width={30} height={30} alt='' />
            <p>Now on AppSumo</p>
            <Link href={url} >
              Get Lifetime Deal
              <ChevronRight size={12} />
            </Link>
          </div>
          <div className='section_one-info'>
            <h2>Your second brain for maximizing productivity</h2>
            <p>Afforai is an AI chatbot that searches, summarizes, and translates
              info from multiple sources to produce trustworthy research. Feed lengthy
              research documents to stacks of dry compliance requirements and extract
              the key findings you need.
            </p>
          </div>
          <div className='card_title-check'>
            <CardTitleCheck title="Summarize Key Findings" />
            <CardTitleCheck title="Compare Between Documents" />
            <CardTitleCheck title="Search For Answers" />
            <CardTitleCheck title="Ask in Any Language" />
          </div>
          <div className='section_one-card_links'>
            <CardPurple title="Try for free" />
            <CardGray title="View pricing" />
          </div>
          <span className='section_one-img-bacground container'>
            <Image src={LaptopLadingpage03} alt='' />
          </span>
          <div className='section_one-image-dashboard container'>
            <Image src={LaptopLadingpage01} alt='' />
          </div>
        </section>
        <section className='section_two'>

        </section>
      </main>
      <footer></footer>
    </>
  )
}
