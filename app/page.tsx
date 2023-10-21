"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { gradient } from "@/components/Gradient";
import { useEffect } from "react";
import logo from "components/Logos/logogreen.png";
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-[100vh] sm:min-h-screen w-screen flex flex-col relative bg-[#F2F3F5] font-inter overflow-hidden">
        <svg
          style={{ filter: "contrast(125%) brightness(110%)" }}
          className="fixed z-[1] w-full h-full opacity-[35%]"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".7"
              numOctaves="3"
              stitchTiles="stitch"
            ></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
        <main className="flex flex-col justify-center h-[90%] static md:fixed w-screen overflow-hidden grid-rows-[1fr_repeat(3,auto)_1fr] z-[100] pt-[30px] pb-[320px] px-4 md:px-20 md:py-0">
        
        <div style={{ paddingBottom: '20px' }}>
    <Image src={logo} alt="Logo" width={180} height={180} />
</div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] md:mb-[37px] font-extrabold text-[16vw] md:text-[110px] font-inter text-[#000000] leading-[0.9] tracking-[-2px] z-[100]"
          >
            Instantly tailor <br />
            your <span className="text-[#234F1E]">resumes</span>
            <span className="font-inter text-[#234F1E]">.</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="flex flex-row justify-center z-20 mx-0 mb-0 mt-8 md:mt-0 md:mb-[35px] max-w-2xl md:space-x-8"
          >
            <div className="w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
                Optimize
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
              Analyze job descriptions and reword your resume to match the role&apos;s requirements. Emphasize your most relevant skills and experience so you pass screening every time.
              </p>
            </div>
            <div className="w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
                Organize
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
              View all resume versions in one sleek library with intuitive naming and version history. Make tweaks globally for structured workflow and total resume management from one control center.              </p>
            </div>
          </motion.div>

          <div className="flex gap-[15px] mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              <Link
                href="https://2i5n5xtpj4i.typeform.com/to/Q8BwLheD"
                className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#234F1E] text-[#FFFFFF] no-underline active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                }}
              >
                <span className="mr-2"> Join the Waitlist </span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  //xmlns="https://2i5n5xtpj4i.typeform.com/to/Q8BwLheD"
                >
                  <path
                    d="M13.75 6.75L19.25 12L13.75 17.25"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12H4.75"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </main>

        <div
          className="fixed top-0 right-0 w-[80%] md:w-1/2 h-screen bg-[#1F2B3A]/20"
          style={{
            clipPath:
              "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
        ></div>

        <motion.canvas
          initial={{
            filter: "blur(20px)",
          }}
          animate={{
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: [0.075, 0.82, 0.965, 1],
          }}
          style={{
            clipPath:
              "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
          id="gradient-canvas"
          data-transition-in
          className="z-50 fixed top-0 right-[-2px] w-[80%] md:w-1/2 h-screen bg-[#c3e4ff]"
        ></motion.canvas>
        <div className="h-[50px] bg-[#000000] fixed bottom-0 z-20 w-full flex flex-row items-center justify-evenly">
       
        {/* <img 
      src="/Users/catherinedavodi/Documents/GitHub/liftoff/components/Logos/Berkeley.png" 
      className="w-[80px] opacity-80" 
      alt="Description of the Image" 
      /> */}

        </div>
      </div>
    </AnimatePresence>
  );
}
