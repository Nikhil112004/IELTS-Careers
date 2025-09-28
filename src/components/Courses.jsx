import card from '../assets/card.png';

const Courses = () => {
    return (
        <div id='courses' className='pt-20'>
            <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-center text-slate-900 dark:text-white pt-10">Our Courses</h2>
            <p className=" text-base sm:text-lg md:text-xl text-center mt-4 text-slate-600 dark:text-slate-400 max-w-xl sm:max-w-2xl mx-auto">Tailored programs designed to meet your specific IELTS needs, whether for <br /> academic, professional, or immigration purposes.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 pt-20 justify-center'>
        <Cards />
        <Cards />
        <Cards />
        </div>
        </div>
    )
}

const Cards = () => {
    return (
       <div className='p-2 ml-20  w-[350px] border-2 border-gray-200 rounded-md'>
        <img className='p-2 w-full h-auto rounded-sm' alt="/" src={card}/>
       <div className='pt-4 ml-2'>
         <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">IELTS Academic</h3>
         <p className="mt-2 text-base text-slate-600 dark:text-slate-400">Ideal for those seeking higher education or professional registration in an English-speaking environment.</p>
         </div>
          <a className="inline-block mt-1 p-2 text-[#670afb]" href="#">Learn More </a>
       </div>
    )
}

export default Courses;