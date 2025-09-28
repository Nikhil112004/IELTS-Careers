import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-4 sm:px-6 lg:px-8 py-10 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
       
        <div className="text-center sm:text-left">
          <a href="/">
            <img className="h-16 mb-2 mx-auto sm:mx-0" alt="logo" src={Logo} />
          </a>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Your partner in acing the IELTS exam.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Navigation</h3>
          <nav className="mt-3 flex flex-col gap-2 text-center sm:text-left">
            <a href="#home" className="text-sm sm:text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">Home</a>
            <a href="#courses" className="text-sm sm:text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">Courses</a>
            <a href="#about" className="text-sm sm:text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">About Us</a>
            <a href="#contact" className="text-sm sm:text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">Contact</a>
          </nav>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Resources</h3>
          <nav className="mt-3 flex flex-col gap-2 text-center sm:text-left">
            <a href="#" className="text-sm sm:text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">Blog</a>
            <a href="#" className="text-sm sm:text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">FAQs</a>
            <a href="#testimonials" className="text-sm sm:text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">Testimonials</a>
          </nav>
        </div>

     
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Follow Us</h3>
          <div className="mt-3 flex justify-center sm:justify-start gap-3">
       
            <a className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary" href="#">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325..."></path>
              </svg>
            </a>
        
            <a className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary" href="#">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832..."></path>
              </svg>
            </a>

            <a className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary" href="#">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584..."></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-4 text-center text-sm text-slate-500 dark:text-slate-400">
        © 2024 IELTS Prep. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
