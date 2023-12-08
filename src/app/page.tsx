import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import AppSumo from '@/img/appsumo.png'
import NavBar from '@/components/NavBar/Index'
import CardPurple from '@/components/CardLinks/CardPurple'
import CardGray from '@/components/CardLinks/CardGray'
import CardTitleCheck from '@/components/CardTitleCheck/Index'
import CardListCheckGreen from '@/components/CardListCheckGreen/Index'
import CardListInfo from '@/components/CardListInfo/Index'
import CardInfoSectionThree from '@/components/CardInfoSectionThree/Index'
import CardInfoSectionFive from '@/components/CardInfoSectionFive/Index'
import IconFastMode from '@/img/fast-forward.svg'
import IconPowerFul from '@/img/power-off.svg'
import IconSearch from '@/img/search-plus.svg'
import LaptopLadingpage01 from '@/img/laptop-landing-1.png'
import LaptopLadingpage02 from '@/img/laptop-landing-2.png'
import LaptopLadingpage03 from '@/img/laptop-landing-3.png'
import LaptopLadingpage04 from '@/img/laptop-landing-4.png'
import LaptopLadingpage05 from '@/img/laptop-landing-5.png'
import LaptopLadingpage06 from '@/img/laptop-landing-6.png'
import LaptopLadingpage07 from '@/img/laptop-landing-7.png'
import LaptopLadingpage08 from '@/img/laptop-landing-8.png'
import LaptopLadingpage09 from '@/img/laptop-landing-9.png'
import LaptopLadingpage10 from '@/img/laptop-landing-10.png'
import LaptopLadingpage11 from '@/img/laptop-landing-11.png'
import LaptopLadingpage12 from '@/img/laptop-landing-12.png'
import LaptopLadingpage13 from '@/img/laptop-landing-13.png'
import LaptopLadingpage14 from '@/img/laptop-landing-14.png'
import LaptopLadingpage15 from '@/img/laptop-landing-15.png'
import LaptopLadingpage17 from '@/img/laptop-landing-17.png'
import LaptopLadingpage18 from '@/img/laptop-landing-18.png'
import LaptopLadingpage19 from '@/img/laptop-landing-19.png'

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
        <section className='section_three container'>
          <div className='section_three-card-list-info'>
            <CardListInfo
              title="Built for the user"
              subtitle="Why choose us?"
              description="Afforai is where exceptional customer focus meets exceptional technology."
            />
          </div>
          <article className='section_three-cards-info-three'>
            <div className='section_three-info-one'>
              <CardInfoSectionThree
                image={LaptopLadingpage06}
                title="Cross Language Querying"
                subtitle="NEW"
                description="Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help."
              />
              <CardInfoSectionThree
                image={LaptopLadingpage07}
                title="Multiple file types supported"
                description="Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links from Websites. The possibilities are limitless!"
              />
            </div>
            <div className='section_three-info-two'>
              <div className='section_three-info-boxs-info'>
                <CardInfoSectionThree
                  image={LaptopLadingpage08}
                  title="Valuable Data Citation"
                  subtitle="NEW"
                  description="Afforai is able to show exactly where your data has been extracted from & highlight it for you, so you never loose your time validating information again."
                />
                <CardInfoSectionThree
                  image={LaptopLadingpage10}
                  title="Built in Document Viewer"
                  description="Never Switch tabs again. Afforai’s document viewer means that you can have your uploaded files right next to your chatbot, giving you the ability to search the file, and refer to it for data citations."
                />
              </div>
              <CardInfoSectionThree
                image={LaptopLadingpage09}
                title="Unbreakable Security"
                description="Afforai uses Azure Server & Azure OpenAI API. In other words, your data is more than safe with us."
                link="https://afforai.com/security"
                titleLink='Learn more.'
              />
            </div>
          </article>
        </section>
        <section className='section_four container'>
          <div className='section_four-card-info'>
            <CardListInfo
              title="Create multiple chatbots for different purposes"
              subtitle="Most versatile"
              description="Legal documents? Summarising a book? Extracting data from a website? We allow you to create multiple chatbots at one time, so you can use Afforai for a whole range of purposes."
            />
            <div className='section_four-card-link'>
              <CardPurple title="Get started" />
              <CardGray title="View pricing" />
            </div>
          </div>
          <div>
            <Image src={LaptopLadingpage11} alt='' />
          </div>
        </section>
        <section className='section_five container'>
          <div className='section_five-imagem-laptop12 card-one'>
            <Image src={LaptopLadingpage12} alt='' className='section_five-img-flaptop' />
          </div>
          <div className='section_five-box-info card-two'>
            <CardListInfo
              title="Customize your assistant with a range of different modes"
              subtitle="Different Modes Available"
              description="Further power your questions with additional modes. Afforai allows you to switch between three different modes, each which have unique ways of utilising our AI tools to answer your question(s)."
            />
          </div>
          <div className='section_five-card-info-section-five card-three'>
            <CardInfoSectionFive
              icon={IconFastMode}
              title="Fast Mode (default)"
              subtitle="1 credit"
              description="Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search)."
            />
            <CardInfoSectionFive
              icon={IconPowerFul}
              title="Powerful Mode"
              subtitle="4 credit"
              description="Get answers of extra high quality from the AI. This mode is most suited for applications that require inferences as well as the full documents to be scanned (ex. Textual Data Analysis, Search with Inference, Report Generation)."
            />
            <CardInfoSectionFive
              icon={IconSearch}
              title="Google Mode"
              subtitle="5 credit"
              description="Supplement your answers with the top 3 results from Google Search. This adds extra reliability to back up our already incredibly accurate answers."
            />
          </div>
        </section>
        <section className='section_six container'>
          <div className='section_six-card-info'>
            <CardListInfo
              title="Regardless of where you are from, Afforai is for you"
              subtitle="Multiple Language Supported"
              description="We support more than 100 Languages, meaning you can seamlessly use our services regardless of where you are from. Our Cross Language Querying feature also allows flawless translation of documents."
            />
          </div>
          <div>
            <Image src={LaptopLadingpage13} alt='' />
          </div>
        </section>
        <section className='section_seven container'>
          <div className='section_seven-imagem-laptop14'>
            <Image src={LaptopLadingpage14} alt='' />
          </div>
          <div className='section_seven-card-info'>
            <CardListInfo
              title="File Wizard - a game changing new feature"
              subtitle="Get more out of your files"
              description="Convert your files with less effort than ever. Afforai’s File Wizard feature allows you to transform your files, in limitless different ways. We can translate, summarize, or explain your upload in no time."
            />
          </div>
        </section>
        <section className='section_eight container'>
          <CardListInfo
            title="Upload Files directly from Google Drive, One Drive & Dropbox"
            subtitle="Seamless Integrations - Coming Soon"
            description="Afforai allows you to upload files directly from Google Drive, One Drive & Dropbox, meaning your experience will be smooth sailing regardless of your preferred"
          />
          <div className='section_eight-imagem-laptop15'>
            <Image src={LaptopLadingpage15} alt='' />
          </div>
        </section>
        <section className='section_nine container'>
          <div className='section_nine-card-list-info'>
            <CardListInfo
              title="Unquestionable accuracy & reliability"
              description="We pride ourselves on the quality of our chatbot’s responses, and go the extra mile to ensure the accuracy & reliability of our answers."
            />
          </div>
          <div className='section_nine-card-info'>
            <CardInfoSectionThree
              image={LaptopLadingpage17}
              title="Trusted by users all over the World"
              description="Afforai is used all around the World, saving thousands of people time and money with our speed & accuracy."
            />
            <CardInfoSectionThree
              image={LaptopLadingpage18}
              title="Information filtering"
              description="Afforai gives you the highest quality answers, and filters out any irrelevant information."
            />
            <CardInfoSectionThree
              image={LaptopLadingpage19}
              title="Built in Comprehension Model"
              description="Our powerful comprehension model increases the power of our data retrieval."
            />

          </div>
        </section>
      </main>
      <footer></footer>
    </>
  )
}
