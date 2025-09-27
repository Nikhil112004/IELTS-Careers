import HeroImage from '../assets/hero image.png';

const HeroSection = () => {
    return (
       <div>
               <div className='relative w-full'>
                    <img alt='/' src={HeroImage} className='w-full h-150 object-cover'/>
                <div className='absolute inset-0  items-center justify-center'>
                    <h1 class=" pt-35 flex justify-center text-center text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-200 dark:text-white">
                      Your Gateway to <br /> Global Opportunities
                  </h1>
                    <p class=" flex justify-center  p-4 text-lg sm:text-xl text-gray-300 dark:text-white-300">
                      Master the IELTS exam with our expert-led courses.Personalized feedback, <br /> proven strategies, and a supportive community to ensure your success.
                  </p>
                  <button className='ml-175 mt-4  px-4 py-2  text-white rounded-4xl bg-[#4f46e5]'>Explore Courses</button>
                    </div>  
               </div> 
               
       </div>
    )
}
export default HeroSection;