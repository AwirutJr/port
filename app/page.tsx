"use client";

import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { data, navbar, contact, skill } from "@/data";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

const Page: React.FC = () => {
  const resumeUrl: string =
    "https://www.canva.com/design/DAGlpFKrgRU/LkXoq9ZQq_D9iFkKXYPX2Q/edit?utm_content=DAGlpFKrgRU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // useEffect สำหรับการตั้งค่า AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // ความเร็ว animation (ms)
      once: true, // ให้เล่นแค่ครั้งเดียว
    });
  }, []);

  // ใช้ useCallback สำหรับการเลื่อน
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // useEffect สำหรับการเลือกเมื่อมีการเปลี่ยนแปลง
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setSelectedIndex(index);
    };

    emblaApi.on("select", onSelect);
    onSelect(); // เรียกตอน mount

    return () => {
      emblaApi?.off("select", onSelect); // ใส่ ? เพื่อความปลอดภัย
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center">
      {/* BG Video */}
      <video
        src="/Video/Video1.mp4"
        autoPlay
        loop
        muted
        width="100%"
        height="100%"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />

      {/* Navbar */}
      <div className="w-full h-20 bg-black/90 flex justify-center items-center px-5">
        <div className="flex space-x-8 w-full max-w-5xl justify-center">
          {Object.entries(navbar).map(([name, url]) => (
            <Link
              key={name}
              href={url}
              className="text-white text-lg hover:underline"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>

      <div
        id="profile"
        className="mx-5 max-w-5xl bg-white/80 backdrop-blur-md rounded-3xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden"
      >
        {/* ข้อมูลส่วนตัว */}
        <div className="p-10 flex flex-col justify-center text-gray-800 space-y-6">
          <h2 className="text-3xl font-bold mb-4 pb-2 border-b-2 border-pink-300 bg-gradient-to-r from-purple-600 via-pink-500 to-pink-400 text-transparent bg-clip-text">
            About Me
          </h2>

          <div className="border-b pb-2">
            <p className="text-sm font-medium text-gray-500">Name</p>
            <p className="text-xl font-semibold">Awirut Jiensakul</p>
          </div>

          <div className="border-b pb-2">
            <p className="text-sm font-medium text-gray-500">Nickname</p>
            <p className="text-xl font-semibold">Chok</p>
          </div>

          <div className="border-b pb-2">
            <p className="text-sm font-medium text-gray-500">Age</p>
            <p className="text-xl font-semibold">20 years old</p>
          </div>

          <div className="border-b pb-2">
            <p className="text-sm font-medium text-gray-500">Education</p>
            <p className="text-base">
              Bachelor of Science in Computer Science and Software Development
              Innovation, Faculty of Information Technology, Sripatum University
              (SPU)
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500">Address</p>
            <p className="text-base">
              56 Nuanchan 56 Alley, Nuanchan Subdistrict, Bueng Kum District,
              Bangkok 10240, Thailand
            </p>
          </div>
        </div>

        {/* รูปภาพ */}
        <div className="relative flex justify-center items-center p-8 bg-blue-50">
          <Image
            src="/chok.jpg"
            alt="Awirut Jiensakul"
            width={280}
            height={280}
            className="rounded-xl shadow-md border border-gray-200 object-cover"
          />
        </div>
      </div>

      {/* ข้อความบนกลาง */}
      <div className="w-fit h-20 bottom-5 fixed z-10 left-1/2 transform -translate-x-1/2 bg-white/50 rounded-full p-2 flex justify-center items-center gap-4 shadow-lg ">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white w-full h-full hover:text-blue-300 px-8 rounded-full hover:scale-105 cursor-pointer transition-all duration-300 font-semibold flex items-center justify-center"
        >
          RESUME
        </a>

        {contact?.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4"
          >
            <div className="w-8 h-8 text-black hover:scale-110 transition-all duration-300 group relative">
              <item.icon size={32} />
              <p
                className="absolute -top-14 left-[50%] -translate-x-[50%] 
                            z-20 origin-left scale-0 px-3 rounded-lg border 
                            border-gray-300 bg-white py-2 text-sm font-bold
                            shadow-md transition-all duration-300 ease-in-out 
                            group-hover:scale-100"
              >
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* work Section */}
      <div
        id="workshop"
        data-aos="fade-up"
        className="w-full flex flex-col justify-center items-center p-6 space-y-4 mt-12"
      >
        <h1 className="px-6 sm:px-10 py-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 rounded-full shadow-lg tracking-wide text-center">
          Projects
        </h1>

        <div className="w-3/4 h-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-400 to-pink-300 shadow-inner mt-4" />
      </div>

      <div
        data-aos="fade-up"
        className="mx-5 gap-8 max-w-5xl h-fit w-full rounded-2xl flex flex-col lg:flex-row justify-between items-stretch pt-6 sm:pt-8 px-4"
      >
        {/* Description ด้านซ้าย */}
        <div className="w-full lg:w-[40%] bg-white/80 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col space-y-4 sm:space-y-5">
          {data[selectedIndex]?.Detail.map((detail, index) => (
            <div key={index} className="space-y-2 sm:space-y-3">
              <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                {detail.project}
              </p>
              <p className="text-sm sm:text-base text-gray-800">
                {detail.work}
              </p>
            </div>
          ))}
        </div>

        {/* Title + Carousel ด้านขวา */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center items-center space-y-4 sm:space-y-5">
          {/* Title */}
          <div className="bg-white/80 backdrop-blur-lg w-full h-20 sm:h-24 lg:h-32 rounded-2xl flex justify-center items-center text-center px-4 shadow-lg">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {data[selectedIndex]?.title}
            </h1>
          </div>

          {/* Carousel */}
          <div className="relative bg-white/50 w-full flex-1 rounded-2xl overflow-hidden min-h-[160px] sm:min-h-[180px]">
            {/* ปุ่มเลื่อนซ้าย */}
            <button
              onClick={scrollPrev}
              className="absolute top-1/2 left-4 z-10 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition"
            >
              <ChevronLeft size={24} />
            </button>

            {/* ปุ่มเลื่อนขวา */}
            <button
              onClick={scrollNext}
              className="absolute top-1/2 right-4 z-10 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition"
            >
              <ChevronRight size={24} />
            </button>

            {/* รูปภาพเลื่อน */}
            <div className="embla w-full h-full" ref={emblaRef}>
              <div className="flex h-full">
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="flex-[0_0_100%] flex justify-center items-center text-xl sm:text-2xl sm:h-100"
                  >
                    <div className="w-full h-full flex justify-center items-center">
                      {item.Img ? (
                        <Image
                          src={item.Img}
                          alt={`Image for ${item.title}`}
                          width={400}
                          height={200}
                          className="rounded-lg w-full h-auto object-cover"
                        />
                      ) : (
                        <p className="text-center text-white text-xl sm:text-2xl">
                          {item.id}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* skill section */}
      <div className="mt-4 py-11" data-aos="fade-up">
        <div
          id="skill"
          className="max-w-5xl h-fit bg-white/80 backdrop-blur-2xl rounded-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          <div className="w-full h-full col-span-1 md:col-span-2 lg:col-span-3 p-12 space-y-12">
            <div className="w-full flex flex-col gap-4">
              <p className="text-3xl md:text-4xl lg:text-5xl uppercase font-bold">
                My Skill
              </p>
              <p>
                I am capable of working on both frontend and backend
                development. However, I am deeply interested in DevOps, where I
                can integrate development and operations to optimize workflows
                and deployment processes. I also have experience building
                e-commerce websites and online course platforms, and I am
                excited to further develop my skills in a professional
                environment.
              </p>
            </div>

            <div className="space-y-4">
              {skill?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleToggle(item.id)}
                  className="space-y-1"
                >
                  {/* หัวข้อ */}
                  <div className="w-full h-20 bg-black/90 rounded-2xl flex items-center justify-between px-6 md:px-12">
                    <p className="text-white text-lg md:text-xl">
                      {item.title}
                    </p>
                    <div className="text-white cursor-pointer">
                      <ChevronDown />
                    </div>
                  </div>

                  {/* เนื้อหาที่เปิดปิด */}
                  <AnimatePresence initial={false}>
                    {openId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden bg-white rounded-xl flex justify-center items-center"
                      >
                        <div className="px-4 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                          {item.logo.map((logo) => (
                            <div
                              key={logo.id}
                              className="w-16 h-16 sm:w-20 sm:h-20 relative flex justify-center items-center"
                            >
                              <Image
                                src={logo.image}
                                alt="skill"
                                fill
                                className="object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* image right */}
          <div
            className="relative w-full h-full col-span-1 md:col-span-2 lg:col-span-2 overflow-hidden bg-cover bg-center bg-fixed rounded-r-2xl"
            style={{ backgroundImage: "url('/coding.jpg')" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
