import { Html } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
  const loaderRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    // Circle rotation and scaling effect
    tl.to(circleRef.current, {
      rotate: 360,
      scale: 1.2,
      duration: 1.2,
      ease: "power2.inOut",
    }).to(circleRef.current, {
      scale: 1,
      duration: 1.2,
      ease: "power2.inOut",
    });

    // Fade-in for the loader
    gsap.fromTo(
      loaderRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <Html>
      <div
        ref={loaderRef}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center"
      >
        {/* Animated Circle */}
        <div
          ref={circleRef}
          className="w-[10vw] h-[10vw] border-4 border-gray-300 border-t-gray-600 rounded-full"
        ></div>

        {/* Loading Text */}
        <p className="text-gray-400 text-lg mt-3 animate-pulse">Loading...</p>
      </div>
    </Html>
  );
};

export default Loader;
