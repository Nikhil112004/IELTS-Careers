import Courses from './Courses';
import HeroSection from './HeroSection';
import SuccessStories from './Testimonials';
import WhyUs from './WhyUs';


const Body = () => {
    return(
        <div>
            <HeroSection />
            <Courses />
            <WhyUs />
            <SuccessStories />
        </div>
    )
}

export default Body;