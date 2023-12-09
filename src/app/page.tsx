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
import CardWitnesses from '@/components/CardWitnesses/Index'
import IconFastMode from '@/img/fast-forward.svg'
import IconPowerFul from '@/img/power-off.svg'
import IconSearch from '@/img/search-plus.svg'
import PhReview from '@/img/ph-review.webp'
import CarouselInfinitLoop from '@/components/CarouselInfinitLoop/Index'
import CardFAQs from '@/components/CardFaqs/Inadex'
import Logo from '@/img/logo-new-violet.webp'
import TopPostBadge from '@/img/top-post-badge.svg'
import SputnikATX from '@/img/sputnikatx.png'
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
import LaptopLadingpage16 from '@/img/laptop-landing-16.png'
import LaptopLadingpage17 from '@/img/laptop-landing-17.png'
import LaptopLadingpage18 from '@/img/laptop-landing-18.png'
import LaptopLadingpage19 from '@/img/laptop-landing-19.png'
import LaptopLadingpage20 from '@/img/laptop-landing-20.png'


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
          <div className='card-carousel-link link-animation'>
            <CarouselInfinitLoop>
              <div className='card_title-check'>
                <CardTitleCheck title="Summarize Key Findings" />
                <CardTitleCheck title="Compare Between Documents" />
                <CardTitleCheck title="Search For Answers" />
                <CardTitleCheck title="Ask in Any Language" />
              </div>
            </CarouselInfinitLoop>
            <CarouselInfinitLoop>
              <div className='card_title-check card_title-mobile'>
                <CardTitleCheck title="Summarize Key Findings" />
                <CardTitleCheck title="Compare Between Documents" />
                <CardTitleCheck title="Search For Answers" />
                <CardTitleCheck title="Ask in Any Language" />
              </div>
            </CarouselInfinitLoop>
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
        <section className='section_ten'>
          <div className='section_ten-card-info-witnesses container'>
            <Link href="https://www.producthunt.com/products/afforai" target='__blank'>
              <Image src={PhReview} alt='' />
            </Link>
            <h3>See what our users say</h3>
            <p>Loved by thousands, all around the World</p>
          </div>
          <div className='section_ten-card-carousel'>
            <div className='card-carousel  left'>
              <CarouselInfinitLoop>
                <div className='card_title-check'>
                  <CardWitnesses
                    title="Henry Sipchen, Marketing Coordinator"
                    description='AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.'
                    image={LaptopLadingpage17}
                  />
                  <CardWitnesses
                    title="Henry Sipchen, Marketing Coordinator"
                    description='AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.'
                    image={LaptopLadingpage17}
                  />
                  <CardWitnesses
                    title="Henry Sipchen, Marketing Coordinator"
                    description='AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.'
                    image={LaptopLadingpage17}
                  />
                  <CardWitnesses
                    title="Henry Sipchen, Marketing Coordinator"
                    description='AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.'
                    image={LaptopLadingpage17}
                  />
                </div>
              </CarouselInfinitLoop>
              <CarouselInfinitLoop>
                <div className='card_title-check '>
                  <CardWitnesses
                    title="Henry Sipchen, Marketing Coordinator"
                    description='AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.'
                    image={LaptopLadingpage17}
                  />
                  <CardWitnesses
                    title="Henry Sipchen, Marketing Coordinator"
                    description='AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.'
                    image={LaptopLadingpage17}
                  />
                  <CardWitnesses
                    title="Henry Sipchen, Marketing Coordinator"
                    description='AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.'
                    image={LaptopLadingpage17}
                  />
                  <CardWitnesses
                    title="Henry Sipchen, Marketing Coordinator"
                    description='AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.'
                    image={LaptopLadingpage17}
                  />
                </div>
              </CarouselInfinitLoop>
            </div>
            <div className='card-carousel  right'>
              <CarouselInfinitLoop>
                <div className='card_title-check'>
                  <CardWitnesses
                    title="Henry Sipchen, Marketing Coordinator"
                    description='AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.'
                    image={LaptopLadingpage17}
                  />
                  <CardWitnesses
                    title="Henry Sipchen, Marketing Coordinator"
                    description='AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.'
                    image={LaptopLadingpage17}
                  />
                  <CardWitnesses
                    title="Henry Sipchen, Marketing Coordinator"
                    description='AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.'
                    image={LaptopLadingpage17}
                  />
                  <CardWitnesses
                    title="Henry Sipchen, Marketing Coordinator"
                    description='AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.'
                    image={LaptopLadingpage17}
                  />
                </div>
              </CarouselInfinitLoop>
              <CarouselInfinitLoop>
                <div className='card_title-check '>
                  <CardWitnesses
                    title="Henry Sipchen, Marketing Coordinator"
                    description='AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.'
                    image={LaptopLadingpage17}
                  />
                  <CardWitnesses
                    title="Henry Sipchen, Marketing Coordinator"
                    description='AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.'
                    image={LaptopLadingpage17}
                  />
                  <CardWitnesses
                    title="Henry Sipchen, Marketing Coordinator"
                    description='AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.'
                    image={LaptopLadingpage17}
                  />
                  <CardWitnesses
                    title="Henry Sipchen, Marketing Coordinator"
                    description='AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.'
                    image={LaptopLadingpage17}
                  />
                </div>
              </CarouselInfinitLoop>
            </div>
          </div>
        </section>
        <section className='section_eleven container'>
          <div className='section_eleven-card-info'>
            <CardListInfo
              title="100% money back guaranteed if you are not satisfied"
              subtitle="My promise to you"
              description="We crafted Afforai with total belief in our ability to make a chatbot that is not only powerful and reliable, but able to maximise your satisfaction as a user. This is why we have implemented a money back guarantee if you find yourself not satisfied with the capabilities of Afforai."
            />
            <div className='section_eleven-image-laptop20'>
              <Image src={LaptopLadingpage20} alt='' />
            </div>
          </div>
          <div className='section_eleven-card-info-get-started'>
            <CardListInfo
              title="Start saving time today!"
              description="Join an ever-growing community, and get with Afforai started free of charge!"
            />
            <CardPurple title="Get Started for Free" />
            <Image src={LaptopLadingpage16} alt='' />
          </div>
        </section>
        <section className='section_faqs'>
          <div className='section_faqs-card-info'>
            <h3>FAQs</h3>
            <p>For more information, check out our <Link href='https://help.afforai.com/en/' > Help Center.</Link></p>
          </div>
          <div className='section_faqs-list-questions'>
            <CardFAQs
              question="Is Afforai free?"
              answer="Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits"
            />
            <CardFAQs
              question="What are subscription credits versus permanent credits?"
              answer="Subscription credits come from monthly payments, while permanent credits come from top ups. Subscription credits will be used before permanent credits, and subscription credits expire every month while permanent credits stay."
            />
            <CardFAQs
              question="Does Afforai support documents storing on the cloud like Google Drive, One Drive, or Drop Box?"
              answer="Currently Afforai only support uploading local documents and websites, in the near future we will integrate these cloud solutions. Sign up with us to get updated"
            />
            <CardFAQs
              question="Does Afforai support uploading images and video?"
              answer="Currently Afforai supports OCR for scanned PDF, but not via image file directly. Afforai currently working on working with video and audio transcript."
            />
            <CardFAQs
              question="Does Afforai support collaboration between accounts?"
              answer="Currently Afforai is working on a solution to allow users to share chatbots and files. Sign up with us to get updated when this feature roll out."
            />
            <CardFAQs
              question="Is my data secured?"
              answer="Yes your data is secured with Afforai. We don't store your conversation with the AI, and the files you uploaded on the system is stored on the cloud using Microsoft Azure and MongoDB with their standard security. LLM calls are made using OpenAI Azure with their security measures."
            />
          </div>
        </section>
      </main>
      <footer className='card_footer container'>
        <ul className='card_footer-container-list'>
          <li className='card_footer-list-one'>
            <div className='card_footer-list-one-box-logo'>
              <div>
                <Image src={Logo} alt='' />
                <h3>Afforai</h3>
              </div>
              <p>Afforai is your research tool in to damn near anything. Helping you summarise, translate, and withdraw data from documents.</p>
              <p>Copyright © 2023 Afforai Inc. All rights reserved.</p>
            </div>
            <div className='card_footer-image-top-post-badge'>
              <Image src={TopPostBadge} alt='' />
            </div>
            <div className='card_footer-box-image-sputnikatx'>
              <h3>Backed by</h3>
              <Image src={SputnikATX} alt='' />
            </div>
          </li>
          <li className='card_footer-list-two'>
            <h3>Company</h3>
            <Link href=''>Our Stony</Link>
            <Link href=''>Affiliate</Link>
            <Link href=''>security</Link>
            <Link href=''>Roadmap</Link>
            <Link href=''>Contact Us</Link>
          </li>
          <li className='card_footer-list-three'>
            <h3>Resources</h3>
            <Link href=''>Help Center</Link>
            <Link href=''>API Docs</Link>
            <Link href=''>Terms of Use</Link>
            <Link href=''>Privacy Policy</Link>
          </li>
          <li className='card_footer-list-four'>
            <h3>Follow Us</h3>
            <Link href=''>Facebook Group</Link>
            <Link href=''>Linkedin</Link>
            <Link href=''>Twitter</Link>
            <Link href=''>Medium Blog</Link>
          </li>
          <li className='card_footer-list-five'>
            <h3>Language</h3>
            <Link href='/'>English</Link>
            <Link href='/'>Vietnamese</Link>
          </li>
        </ul>
      </footer>
    </>
  )
}
