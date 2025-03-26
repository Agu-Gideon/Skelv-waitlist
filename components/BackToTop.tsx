<<<<<<< HEAD
"use client"
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
    if (window.scrollY > 300) {
        console.log('above 300px')
        setIsVisible(true)
    } else {
        console.log('below 300px')
        setIsVisible(false)
    }
    };

    window.addEventListener("scroll",  toggleVisibility);
    return () =>
    window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // if (typeof window !== "undefined"){
  //  console.log(window)

  //  console.log(window.innerHeight, document.documentElement.scrollHeight)
  // }

  return (
    <div>
      <div
        onClick={scrollToTop}
        className={`${
            isVisible ? "scale-100" : "scale-0"
          } fixed bottom-20 p-4 z-[99999] transition-all ease-in-out duration-700 rounded-full right-5 sm:right-20 bg-orange-700 text-3xl text-white `}
      >
        <BiArrowBack className="rotate-90" />
      </div>
    </div>
  );
};

export default BackToTop;
=======
"use client"
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
    if (window.scrollY > 300) {
        console.log('above 300px')
        setIsVisible(true)
    } else {
        console.log('below 300px')
        setIsVisible(false)
    }
    };

    window.addEventListener("scroll",  toggleVisibility);
    return () =>
    window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // if (typeof window !== "undefined"){
  //  console.log(window)

  //  console.log(window.innerHeight, document.documentElement.scrollHeight)
  // }

  return (
    <div>
      <div
        onClick={scrollToTop}
        className={`${
            isVisible ? "scale-100" : "scale-0"
          } fixed bottom-20 p-4 z-[99999] transition-all ease-in-out duration-700 rounded-full right-5 sm:right-20 bg-orange-700 text-3xl text-white `}
      >
        <BiArrowBack className="rotate-90" />
      </div>
    </div>
  );
};

export default BackToTop;
>>>>>>> 782717e (completed with waitlist)
