import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";

import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () =>
        setVideo((prev) => ({ ...prev, startPlay: true, isPlaying: true })),
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current[videoId];
    if (!span || !videoDivRef.current[videoId]) return;

    let anim = gsap.to(span, {
      onUpdate: () => {
        const progress = Math.ceil(anim.progress() * 100);
        if (progress !== currentProgress) {
          currentProgress = progress;
          gsap.to(videoDivRef.current[videoId], {
            width: window.innerWidth < 1200 ? "10vw" : "4vw",
          });
          gsap.to(span, {
            width: `${currentProgress}%`,
            backgroundColor: "white",
          });
        }
      },
      onComplete: () => {
        if (isPlaying) {
          gsap.to(videoDivRef.current[videoId], { width: "12px" });
          gsap.to(span, { backgroundColor: "#afafaf" });
        }
      },
    });

    const animUpdate = () => {
      if (videoRef.current[videoId]) {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      }
    };

    if (isPlaying) {
      gsap.ticker.add(animUpdate);
    } else {
      gsap.ticker.remove(animUpdate);
    }
  }, [videoId, startPlay]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (videoRef.current[videoId]) {
        isPlaying
          ? startPlay && videoRef.current[videoId].play()
          : videoRef.current[videoId].pause();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleProcess = (type, i) => {
    const actions = {
      "video-end": () =>
        setVideo((prev) => ({ ...prev, isEnd: true, videoId: i + 1 })),
      "video-last": () => setVideo((prev) => ({ ...prev, isLastVideo: true })),
      "video-reset": () =>
        setVideo({
          isEnd: false,
          startPlay: false,
          videoId: 0,
          isLastVideo: false,
          isPlaying: false,
        }),
      pause: () =>
        setVideo((prev) => ({ ...prev, isPlaying: !prev.isPlaying })),
      play: () => setVideo((prev) => ({ ...prev, isPlaying: !prev.isPlaying })),
    };
    actions[type]?.();
  };

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline
                  className={`${
                    list.id === 2 && "translate-x-44"
                  } pointer-events-none`}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() =>
                    handleProcess(i !== 3 ? "video-end" : "video-last", i)
                  }
                  onPlay={() =>
                    setVideo((prev) => ({ ...prev, isPlaying: true }))
                  }
                  onLoadedMetadata={(e) =>
                    setLoadedData((prev) => [...prev, e])
                  }
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, idx) => (
                  <p key={idx} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {hightlightsSlides.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
              ref={(el) => (videoDivRef.current[i] = el)}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>
        <button
          className="control-btn"
          onClick={() =>
            handleProcess(
              isLastVideo ? "video-reset" : isPlaying ? "pause" : "play"
            )
          }
        >
          <img
            src={isLastVideo ? replayImg : isPlaying ? pauseImg : playImg}
            alt={isLastVideo ? "replay" : isPlaying ? "pause" : "play"}
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
