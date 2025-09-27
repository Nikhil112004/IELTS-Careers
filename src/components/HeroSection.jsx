import HeroImage from '../assets/hero image.png';

const HeroSection = () => {
    return (
       <div>
               <div className='relative w-full'>
                    <img alt='/' src={HeroImage} className='w-full h-[35rem] sm:h-[45rem] lg:h-[50rem] object-cover'/>
                <div className='absolute inset-0 pb-95 items-center flex flex-col text-center justify-center'>
                    <h1 class=" pt-35 sm:text-4xl md:text-5xl flex justify-center text-center text-5xl  lg:text-6xl  xl:text-7xl font-extrabold tracking-tight text-gray-200 dark:text-white">
                      Your Gateway to <br /> Global Opportunities
                  </h1>
                    <p class="mt-6 text-base sm:text-lg md:text-xl text-gray-300 dark:text-gray-200 max-w-3xl">
                      Master the IELTS exam with our expert-led courses.Personalized feedback, <br className='hidden md:block' /> proven strategies, and a supportive community to ensure your success.
                  </p>
                  <div className='flex justify-center'>
                    <button className=' mt-10  px-4 py-2  text-white rounded-4xl bg-[#4f46e5] hover:bg-indigo-600 transition'>Explore Courses</button>
                  </div>
                    </div>  
               </div> 
               
       </div>
    )
}
export default HeroSection;