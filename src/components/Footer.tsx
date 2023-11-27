import { FacebookLogo, InstagramLogo, ThreadsLogo } from "../utils/svgComponents";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className=" w-full" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="grid grid-cols-16 grid-row-16 gap-y-8  sm:max-w-7xl xl:max-w-9xl py-12 lg:py-16">

        {/* <div className="inline-flex flex-col space-y-3 sm:w-full sm:justify-between"> */}

          <div className="col-span-full sm:col-span-8 row-start-1 flex flex-col space-y-1.5 text-white">
            <Logo />
            <p className="text-base text-gray-300">Hassle Free Vehicle Purchasing</p>
          </div>

          <div className="flex row-start-2 sm:row-start-1 sm:col-end-[-1] sm:col-span-8 col-span-full space-x-3 sm:space-x-6 sm:ml-auto">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              {<InstagramLogo className="h-8 w-8"/>}
            </a>
            
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
                {<FacebookLogo className="h-8 w-8"/>}
            </a>
  
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Threads</span>
                {<ThreadsLogo className="h-8 w-8"/>}
            </a>
          </div>

          <div className="col-span-full sm:col-span-8 sm:col-start-9 row-start-3 flex flex-col space-y-6 text-gray-400">

            <div className="flex flex-col sm:mt-0 text-left sm:text-right  md:space-x-6">
              <div className="text-base py-1 hover:text-gray-200 cursor-pointer">Home</div>
              <div className="text-base py-1 hover:text-gray-200 cursor-pointer">How it Works</div>
              <div className="text-base py-1 hover:text-gray-200 cursor-pointer">Contact</div>

              <div className="privacy-link--footer text-base py-1 hover:text-gray-200 cursor-pointer">Privacy Policy</div>
            </div>
          </div>

          <div className=" sm:col-start-1 col-span-full sm:col-span-8 company-info text-base text-gray-400 ">
            <p className="font-semibold leading-7 underline underline-offset-1">
              Company Info
            </p>
            <div className="flex flex-col  sm:mt-0 text-left md:flex-row md:space-x-3 text-gray-400">
              <div className="text-base">VAT No. 413872839</div>
              <div className="text-base">Company No. 129384930</div>
              <div className="privacy-link--footer text-base"> ICO No.ZB232253</div>
            </div>
          </div>
          
          <div className=" col-span-full inline-flex md:flex md:w-full ">
            <p className="text-base text-gray-200 ">&copy; 2023 Vehicle Searcher.<br/>All rights reserved.</p>
          </div>



      </div>
    </footer>
  );
}