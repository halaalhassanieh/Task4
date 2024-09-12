
import './App.css'
import Carousel from './componants/Carousel/Carousel';
import Header from './componants/Header/Header';
import NavBar from './componants/NavBar/NavBar'
import { FaRegClock, FaHeartPulse,FaPlay,FaUserDoctor,FaFlask } from "react-icons/fa6";
import { FiSmartphone } from "react-icons/fi";
import MiniCard from './componants/MiniCard/MiniCard';
import { BsCapsulePill } from "react-icons/bs";
import { BiInjection } from "react-icons/bi";
import { GiSandsOfTime } from "react-icons/gi";
import { Row, Col ,Card } from 'react-bootstrap';
import Hero from './componants/Hero/Hero';
import Hero2 from './componants/Hero2/Hero2';
import VideoSection from './componants/VideoSection/VideoSection';
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { CiHospital1 } from "react-icons/ci";
import { FaAward } from "react-icons/fa";
import ImgSection from './componants/ImgSection/ImgSection';
import Services from './componants/Servicess/Services';
import Appointment from './componants/Appointment/Appointment';
import Department from './componants/Department/Department';




function App() {
  const CarouselInfo = [
    {
      src: "../src/assets/hero-carousel/hero-carousel-1.jpg",
      alt: "First slide",
      title: "First slide",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni quis, recusandae perferendis accusantium quisquam.",
    },
    {
      src: "../src/assets/hero-carousel/hero-carousel-2.jpg",
      alt: "Second slide",
      title: "Second slide",
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni quis, recusandae perferendis accusantium quisquam.',
    },
    {
      src: "../src/assets/hero-carousel/hero-carousel-3.jpg",
      alt: "Third slide",
      title: "Third slide",
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni quis, recusandae perferendis accusantium quisquam.',
    },
  ]
  const logo = {
    img: "../src/assets/logo.png",
    alt: "logo img"
  }
  const info = [{
    icon: <FaRegClock />,
    text: " Monday - Saturday, 8AM to 10PM"
  },
  {
    icon: <FiSmartphone />,
    text: " Call us now +1 5589 55488 55"
  },
  ]
  const MiniCardInfo = [{
    icon: <FaHeartPulse />,
    title: " Lorem ipsum",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    icon: <BsCapsulePill />,
    title: "Lorem ipsum",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    icon: <BiInjection />,
    title: " Lorem ipsum",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    icon: <GiSandsOfTime />,
    title: " Lorem ipsum",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  ]
  const miniInfo = [{
    icon: <FaUserDoctor />,
    title: "  25",
    subtitle: "Doctors"
  },
  {
    icon: <CiHospital1 />,
    title: "15",
    subtitle: "Departments"
  },
  {
    icon: <FaFlask />,
    title: "8",
    subtitle: "Research Labs"
  },
  {
    icon: <FaAward />,
    title: " 150",
    subtitle: "Awards"
  },
  ]
  const Info2 = [{
    icon: <FaUserDoctor />,
    title: "Lorem ipsum",
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni quis, recusandae perferendis accusantium quisquam.',
  },
  {
    icon: <CiHospital1 />,
    title: "Dolor sit",
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni quis, recusandae perferendis accusantium quisquam.',
  },
  {
    icon: <FaFlask />,
    title: "Amet consectetur",
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni quis, recusandae perferendis accusantium quisquam.',
  },
  {
    icon: <FaAward />,
    title: " Adipisicing",
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni quis, recusandae perferendis accusantium quisquam.',
  },
  ]
  const ServicesData = [{
    icon: <FaUserDoctor />,
    title: "Lorem ipsum",
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni quis, recusandae perferendis accusantium quisquam.',
  },
  {
    icon: <CiHospital1 />,
    title: "Dolor sit",
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni quis, recusandae perferendis accusantium quisquam.',
  },
  {
    icon: <FaFlask />,
    title: "Amet consect",
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni quis, recusandae perferendis accusantium quisquam.',
  },
  {
    icon: <FaAward />,
    title: " Adipisicing",
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni quis, recusandae perferendis accusantium quisquam.',
  },
  {
    icon: <GiSandsOfTime />,
    title: "Amet consect",
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni quis, recusandae perferendis accusantium quisquam.',
  },
  {
    icon: <FaHeartPulse />,
    title: " Adipisicing",
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni quis, recusandae perferendis accusantium quisquam.',
  },
  ]
  const data={
    title: " In an emergency ? Need help now?",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit. Provident dolor voluptatem doloribus nemo aliquam exercitationem?",
    btn:"Make An Appointment", 
  }
  const aboutimg={
    img:'../src/assets/about.jpg',
    alt:'aboutimg',
    src:'../src/assets/features.jpg'
  }
  const text=[{
    icon2:<IoCheckmarkDoneOutline />,
    text2:" Numquam distinctio dignissimos necessitatibus, ab rem iure ad corporis."
  },
  {
    icon2:<IoCheckmarkDoneOutline />,
    text2:" Numquam distinctio dignissimos necessitatibus, ab rem iure ad corporis possimus fuga neque impedit!"
  },
  {
    icon2:<IoCheckmarkDoneOutline />,
    text2:" Numquam distinctio dignissimos necessitatibus, ab rem iure ad corporis possimus fuga neque impedit! Aspernatur labore iusto aliquid, eveniet aperiam"
  },
]
const items=[
  {name:"Cardiology"},
  {name:"Neurology"},
  {name:"Hepatology"},
  {name:"Ophthalmologists"},
]
  return (

    <>
      <Header info={info} />
      <NavBar alt={logo.alt} img={logo.img} btn='Make An Appointment' />
      <Carousel CarouselInfo={CarouselInfo} btn="Read More" />
          <section className=' mx-0  my-5'>
            <Row className=' flex-sm-nowrap flex-wrap   w-75 m-auto '>
              {
                MiniCardInfo?.map((e, i) => {
                  return (
                    <Col key={i} className='w-100'>
                      <MiniCard icon={e.icon} title={e.title} subtitle={e.subtitle} />
                    </Col>
                  )
                })
              }
            </Row>
          </section>
      <Hero data={data}/>    
      <Hero2 title='About Us' subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit. Provident dolor voluptatem doloribus nemo aliquam exercitationem"/>
      <VideoSection miniInfo={miniInfo} img={aboutimg.img} alt={aboutimg.alt} icon={<FaPlay />} title="Voluptatem doloribus nemo aliquam exercitationem" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit. Provident dolor voluptatem doloribus nemo aliquam exercitationem?" text={text} endtext="Obcaecati nihil, qui et inventore voluptates fugit porro consequatur assumenda molestias incidunt iure earum voluptatum, laborum provident eligendi, nobis architecto? Eius esse at qui inventore cum, modi cumque. Necessitatibus hic ea veniam? Soluta."/>
      <ImgSection Info2={Info2} src={aboutimg.src} alt={aboutimg.alt} title="Provident dolor voluptatem doloribus nemo aliquam" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit. Provident dolor voluptatem doloribus nemo aliquam exercitationem?"/> 
      <Services ServicesData={ServicesData}/>
      <Appointment btn='Make An Appointment' />
      <Department items={items} />
   
   
    </>
  )
}

export default App
