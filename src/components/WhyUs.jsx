
const WhyUs = () => {
    return(
        <div className="pt-20">
         <div>
            <h2 className="flex justify-center pt-10 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-900">Why Choose Us?</h2>
            <p className=" flex justify-center pt-1 text-center mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">We provide a comprehensive and supportive learning environment to help you <br />achieve your best possible IELTS score.</p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center pt-20">
        <Card />
        <Card />
        <Card />
        </div>
        </div>
    )
}

const Card = () => {
    return (
        <div className="p-6 w-[300px] sm:w-[350px] border-2 border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" size-8 text-[#670afb] ">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
            </div>
           <h3 class="flex justify-center text-2xl font-semibold text-slate-900 dark:text-white">Expert Instructors</h3>
           <p class="flex justify-center pt-2 pb-5 text-center text-base text-slate-600 dark:text-slate-400">Learn from certified IELTS experts with <br /> years of experience in helping students <br /> succeed.</p>
        </div>
    )
}

export default WhyUs;