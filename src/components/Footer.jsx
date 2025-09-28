import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-4 sm:px-6 lg:px-8 py-10 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div className="text-center sm:text-left">
          <a href="/">
            <img className="h-16 mb-2 mx-auto sm:mx-0" alt="logo" src={Logo} />
          </a>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Your partner in acing the IELTS exam.
          </p>
        </div>

        {/* Navigation */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Navigation</h3>
          <nav className="mt-3 flex flex-col gap-2">
            <a href="#home" className="text-sm sm:text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">Home</a>
            <a href="#courses" className="text-sm sm:text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">Courses</a>
            <a href="#about" className="text-sm sm:text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">About Us</a>
            <a href="#contact" className="text-sm sm:text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">Contact</a>
          </nav>
        </div>

        {/* Resources */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Resources</h3>
          <nav className="mt-3 flex flex-col gap-2">
            <a href="#" className="text-sm sm:text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">Blog</a>
            <a href="#" className="text-sm sm:text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">FAQs</a>
            <a href="#testimonials" className="text-sm sm:text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">Testimonials</a>
          </nav>
        </div>

        {/* Social Media */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Follow Us</h3>
          <div className="mt-3 flex justify-center sm:justify-start gap-3">
            {/* Example SVG icons */}
            <a className="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary" href="#">
              {/* Facebook */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
              </svg>
            </a>

            <a className="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary" href="#">
              {/* Twitter */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.816 9.816 0 01-2.828.775A4.932 4.932 0 0023.337 3.3a9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.939 13.939 0 011.671 3.149a4.916 4.916 0 001.523 6.555 4.9 4.9 0 01-2.228-.616v.062a4.918 4.918 0 003.946 4.827 4.902 4.902 0 01-2.224.085 4.918 4.918 0 004.59 3.417A9.867 9.867 0 010 19.54a13.933 13.933 0 007.548 2.212c9.058 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/>
              </svg>
            </a>

            <a className="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary" href="#">
              {/* Instagram */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163C8.741 0 8.332.014 7.052.072 2.694.272.272 2.69.072 7.052.014 8.332 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/>
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
