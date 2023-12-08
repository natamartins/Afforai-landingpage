import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import AppSumo from '@/img/appsumo.png'
import NavBar from '@/components/NavBar/Index'
import LaptopLadingpage01 from '@/img/laptop-landing-1.png'
import LaptopLadingpage02 from '@/img/laptop-landing-2.png'
import LaptopLadingpage03 from '@/img/laptop-landing-3.png'
import LaptopLadingpage04 from '@/img/laptop-landing-4.png'
import LaptopLadingpage05 from '@/img/laptop-landing-5.png'
import CardPurple from '@/components/CardLinks/CardPurple'
import CardGray from '@/components/CardLinks/CardGray'
import CardTitleCheck from '@/components/CardTitleCheck/Index'
import CardListCheckGreen from '@/components/CardListCheckGreen/Index'
import CardListInfo from '@/components/CardListInfo/Index'

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
            <Image src={AppSumo} width={30} height={30} alt='logo app sumo' />
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
            <Image src={LaptopLadingpage03} alt='image laptop ladingpage 03' />
          </span>
          <div className='section_one-image-dashboard container'>
            <Image src={LaptopLadingpage01} alt='image laptop ladingpage 01' />
          </div>
        </section>
        <section className='section_two container'>
          <div className='section_two-card-users-people'>
            <p>Loved by <span>20,000+</span> users around the world</p>
            <Image src={LaptopLadingpage02} alt='image laptop ladingpage 02' />
          </div>
          <div className='section_two-container-info'>
            <div className='section_two-box-info'>
              <h2>Say goodbye to long, tiresome documents</h2>
              <p>
                Afforai seamlessly translates documents, files, spreadsheets &
                websites, filtering out what you don’t need & answering your
                specific questions within seconds.
              </p>
              <div className='section_two-card-check'>
                <CardListCheckGreen title={"A whip smart research assistant"} />
                <CardListCheckGreen title="We speak every language" />
                <CardListCheckGreen title="Reliable data citation for answers" />
                <CardListCheckGreen title="Fort-Knox level data security" />
              </div>
            </div>
            <div className='section_two-card-img-info'>
              <Image src={LaptopLadingpage04} alt='image laptop ladingpage 04' />
            </div>
          </div>
          <div className='section_two-info-person'>
            <CardListInfo
              title="Save yourself from stress & streamline your workflow"
              subtitle="10x your productivity"
              description="The average worker spends 9 hours per week looking through & gathering information from thick stacks of documents. With Afforai, you can save yourself 8 hours per week (plus a lot of headaches)."
            />
            <Image src={LaptopLadingpage05} alt='image laptop ladingpage 05' />
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  )
}
