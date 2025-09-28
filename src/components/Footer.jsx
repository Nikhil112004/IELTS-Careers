import Logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className='pt-30'>
            <footer className="border-t border-slate-200 bg-slate-50 px-4 sm:px-6 lg:px-12 py-10 dark:border-slate-800 dark:bg-slate-900/50">
           <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
           <div className='pb-30'>
            <a href='/'>
                <img className='h-16 mb-4' alt='logo' src={Logo}/>
            </a>
           <p className="text-base text-slate-600 dark:text-slate-400">Your partner in acing the IELTS exam.</p>
           </div>
           <div>
           <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Navigation</h3>
           <nav className="mt-4 flex flex-col gap-2">
           <a className="text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary scroll-smooth" href="#home">Home</a>
           <a className="text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary scroll-smooth" href="#courses">Courses</a>
           <a className="text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary scroll-smooth" href="#about">About Us</a>
           <a className="text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary scroll-smooth" href="#contact">Contact</a>
           </nav>
           </div>
           <div>
           <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Resources</h3>
           <nav className="mt-4 flex flex-col gap-2">
           <a className="text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary" href="#">Blog</a>
           <a className="text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary" href="#">FAQs</a>
           <a className="text-base text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary" href="#testimonials">Testimonials</a>
           </nav>
           </div>
           <div>
           <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Follow Us</h3>
           <div className="mt-4 flex gap-4">
           <a className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary" href="#">
           <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"></path>
           </svg>
           </a>
           <a className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary" href="#">
           <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.561-.666 2.477 0 1.61.82 3.027 2.057 3.868-.76-.025-1.475-.232-2.106-.579v.052c0 2.246 1.595 4.123 3.712 4.557-.387.106-.795.163-1.22.163-.3 0-.592-.028-.876-.082.589 1.842 2.3 3.182 4.325 3.22-.994.778-2.246 1.242-3.612 1.242-.235 0-.466-.014-.694-.04.926.598 2.025.94 3.167.94 3.807 0 5.882-3.153 5.882-5.881 0-.09-.002-.18-.006-.27.404-.29.754-.658 1.03-1.07z"></path>
           </svg>
           </a>
           <a className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary" href="#">
           <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"></path>
           </svg>
           </a>
           </div>
           </div>
           </div>
           <div className="mt-10 border-t border-slate-200 dark:border-slate-800 pt-6 text-center text-sm text-slate-500 dark:text-slate-400">
           <p>© 2024 IELTS Prep. All rights reserved.</p>
           </div>
           </footer>
        </div>
    )
}
 
export default Footer;