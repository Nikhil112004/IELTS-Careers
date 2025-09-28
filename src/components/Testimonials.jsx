const SuccessStories = () => {
  return (
    <div className="pt-20 px-4 sm:px-8 lg:px-16" id="testimonials">
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white pt-10">
          Success Stories
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center mt-4 text-slate-600 dark:text-slate-400 max-w-xl sm:max-w-2xl mx-auto">
          Don't just take our word for it. Hear what our successful students have to say about their experience.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center pt-16">
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  )
}

const TestimonialCard = () => {
  return (
    <div className="w-full sm:w-[300px] md:w-[350px] border-2 border-gray-200 rounded-md shadow-sm bg-white dark:bg-slate-800">
      <div className="flex p-4 items-center">
        <img
          alt="Sophia Carter"
          className="w-14 h-14 rounded-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY46NsJfhMyze-o2MzIxPZkBJ1pxZ1CguxnUzda8ZjC_qRy2oyprOPNg4kSAcTlNaoHv6YfQ9B_GALVL_56HKPQ8zNrQvHchM3noxjcV8GcepPsE_B8YG1CrUkWH1m_DDSG-7h59sp7hSkuUa_DUwMnIgKWPhjJ0SFAaNWD5dDlDBTzipGRjpKFlbsyQlCFHlDkaTniKwclslH12uXdzaG5qc9NcnCyklPsCOjBeprIpZdPnh6QhimAioC69A70zJqtGmphpIHKa3X"
        />
        <div className="ml-4">
          <p className="text-lg font-semibold text-slate-900 dark:text-white">Sophia Carter</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">Achieved Band 8.5</p>
        </div>
      </div>
      <div className="px-4 pb-4">
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 italic">
          "The personalized feedback on my writing was a game-changer. The instructors pinpointed my exact weaknesses and gave me the tools to overcome them. I couldn't have achieved my score without their help!"
        </p>
      </div>
    </div>
  )
}

export default SuccessStories;
