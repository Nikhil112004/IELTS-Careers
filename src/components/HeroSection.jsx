import HeroImage from '../assets/hero image.png';

const HeroSection = () => {
    return (
        <div>
            <div className='relative w-full'>
                <img 
                    alt='Hero' 
                    src={HeroImage} 
                    className='w-full h-[30rem] sm:h-[40rem] lg:h-[50rem] object-cover'
                />
                <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4'>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-gray-200 dark:text-white leading-tight">
                        Your Gateway to <br /> Global Opportunities
                    </h1>
                    <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 dark:text-gray-200 max-w-2xl">
                        Master the IELTS exam with our expert-led courses. Personalized feedback, 
                        <br className='hidden md:block' /> 
                        proven strategies, and a supportive community to ensure your success.
                    </p>
                    <div className='flex justify-center'>
                        <button className='mt-8 px-5 py-2 text-white rounded-3xl bg-[#4f46e5] hover:bg-indigo-600 transition'>
                            Explore Courses
                        </button>
                    </div>
                </div>  
            </div> 
        </div>
    )
}
export default HeroSection;

