// import { AthleteFeatureHome } from "@smart-gym/athlete/feature/home";
// <AthleteFeatureHome></AthleteFeatureHome></h1>
'use client';
import { AthleteFeatureHome } from '@smart-gym/athlete/feature/home';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

/* eslint-disable-next-line */
export interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <div className="bg-primary-600 ">
      <header className=" flex items-center justify-between mx-8 py-4 relative">
        <Image
          fill
          className="absolute right-0 "
          src="./media/home/bermuda-traingle(1) 1.svg"
          alt=""
        />
        <div className=" flex items-center relative">
          <Image fill className="z-30" src="/media/home/Ellipse.png" alt="" />
          <div>
            <div className="flex items-center">
              <p className="text-xs text-white">صدرا رهبر </p>
              <Image
                width="0"
                height="0"
                className="w-full h-auto"
                src="/media/home/hand 1.svg "
                alt=""
              />
            </div>
            <p className="text-xs text-white">
              به باشگاه <span className="text-secondary-400">اونیکس</span> خوش
              آمدید
            </p>
          </div>
        </div>
        <div className=" flex gap-5">
          <a href="#">
            <Image
              width="0"
              height="0"
              className="w-full h-auto"
              src="/media/home/bell.svg"
              alt=""
            />
          </a>
          <a href="#">
            <Image
              width="0"
              height="0"
              className="w-full h-auto"
              src="/media/home/search.svg"
              alt=""
            />
          </a>
        </div>
      </header>

      <section className=" container relative z-10  bg-white bg- rounded-t-4xl">
        <div className="py-8">
          <div className="mx-8 flex justify-between border-2 border-dashed border-primary-600 rounded-lg p-4">
            <div className="flex gap-2 ">
              <p className="text-primary-300">
                موجودی: <span className="text-primary-600">50,000,000</span>{' '}
                ریال
              </p>
            </div>
            <div>
              <Image
                width="0"
                height="0"
                className="w-full h-auto"
                src="/media/home/plus.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <Swiper
          spaceBetween={1}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className=" bg-primary-600 rounded-2xl py-5 px-4 flex justify-between ">
              <div className="flex flex-col justify-between">
                <h1 className="text-sm text-white font-medium">
                  کلاس یوگا 100 جلسه
                </h1>
                <div className="flex gap-2 items-center">
                  <div>
                    <Image
                      width="0"
                      height="0"
                      className="w-full h-auto"
                      src="/media/home/border.svg"
                      alt=""
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-primary-300 text-xs">
                      تاریخ شروع: <span className="text-white">1403/03/15</span>
                    </p>
                    <p className="text-primary-300 text-xs">
                      تاریخ اتمام:{' '}
                      <span className="text-white">1403/06/26</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  width="0"
                  height="0"
                  className="w-full h-auto"
                  src="/media/home/water.svg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-primary-100 rounded-2xl py-5 px-4 flex justify-between ">
              <div className="flex flex-col justify-between">
                <h1 className="text-sm text-primary-600 font-medium">
                  بدنسازی 12 جلسه در ماه
                </h1>
                <div className="flex gap-2 items-center">
                  <div>
                    <Image
                      width="0"
                      height="0"
                      className="w-full h-auto"
                      src="/media/home/border(1).svg"
                      alt=""
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-primary-500 text-xs">
                      تاریخ شروع:{' '}
                      <span className="text-primary-600">1403/03/15</span>
                    </p>
                    <p className="text-primary-500 text-xs">
                      تاریخ اتمام:{' '}
                      <span className="text-primary-600">1403/06/26</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  width="0"
                  height="0"
                  className="w-full h-auto"
                  src="/media/home/water.svg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

        <div className="m-8 grid grid-cols-3 gap-4">
          <div className="shadow-4xl bg-white rounded-2xl w-26 h-24 flex flex-col items-center justify-center  gap-2">
            <div>
              <Image
                width="0"
                height="0"
                className="w-full h-auto"
                src="/media/home/fluent_form-24-regular.svg"
                alt=""
              />
            </div>
            <p className="text-xs font-medium text-primary-600">ثبت نام</p>
          </div>

          <div className="bg-white shadow-4xl rounded-2xl w-26 h-24 flex flex-col items-center justify-center   gap-2">
            <div>
              <Image
                width="0"
                height="0"
                className="w-full h-auto"
                src="/media/home/Frame 20.svg"
                alt=""
              />
            </div>
            <p className="text-xs font-medium text-primary-600">
              خرید از فروشگاه
            </p>
          </div>

          <div className="shadow-4xl bg-white rounded-2xl w-26 h-24 flex flex-col items-center justify-center  gap-2">
            <div>
              <Image
                width="0"
                height="0"
                className="w-full h-auto"
                src="/media/home/Group(11).svg"
                alt=""
              />
            </div>
            <p className="text-xs font-medium text-primary-600"> خدمات بیشتر</p>
          </div>

          <div className="shadow-4xl bg-white rounded-2xl w-26 h-24 flex flex-col items-center justify-center  gap-2">
            <div>
              <Image
                width="0"
                height="0"
                className="w-full h-auto"
                src="/media/home/Frame 19.svg"
                alt=""
              />
            </div>
            <p className="text-xs font-medium text-primary-600">
              مربیان باشگاه
            </p>
          </div>

          <div className="shadow-4xl bg-white rounded-2xl w-26 h-24 flex flex-col items-center justify-center  gap-2">
            <div>
              <Image
                width="0"
                height="0"
                className="w-full h-auto"
                src="/media/home/fi-rr-stats.svg"
                alt=""
              />
            </div>
            <p className="text-xs font-medium text-primary-600">
              پیشرفت فیزیکی
            </p>
          </div>

          <div className="shadow-4xl bg-white rounded-2xl w-26 h-24 flex flex-col items-center justify-center  gap-2">
            <div>
              <Image
                width="0"
                height="0"
                className="w-full h-auto"
                src="/media/home/fi-rs-gym.svg"
                alt=""
              />
            </div>
            <p className="text-xs font-medium text-primary-600"> Gym lab</p>
          </div>
        </div>

        <div className="mx-8">
          <Image
            width="0"
            height="0"
            className="w-full h-auto"
            src="/media/home/container.svg"
            alt=""
          />
        </div>
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="m-8 h-18  bg-white rounded-2xl shadow-5xl py-4 px-6">
              <p className="text-xs leading-6 text-primary-600 ">
                دوره جدید TRX مخصوص بانوان از تاریخ 1403/02/20 برگزار می گردد.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="m-8 h-18  bg-white rounded-2xl shadow-5xl py-4 px-6">
              <p className="text-xs leading-6 text-primary-600 ">
                دوره جدید TRX مخصوص بانوان از تاریخ 1403/02/20 برگزار می گردد.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="m-8 h-18  bg-white rounded-2xl shadow-5xl py-4 px-6">
              <p className="text-xs leading-6 text-primary-600 ">
                دوره جدید TRX مخصوص بانوان از تاریخ 1403/02/20 برگزار می گردد.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="m-8 h-18  bg-white rounded-2xl shadow-5xl py-4 px-6">
              <p className="text-xs leading-6 text-primary-600 ">
                دوره جدید TRX مخصوص بانوان از تاریخ 1403/02/20 برگزار می گردد.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={16}
          slidesPerView={1.35}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className=" h-72 rounded-2xl shadow-5xl p-4 space-y-3">
              <Image
                width="0"
                height="0"
                className="w-full h-auto"
                src="/media/home/image.svg"
                alt=""
              />

              <p className="text-sm font-semibold text-primary-600">
                تاثیر ورزش بر تناسب و سلامتی بدن
              </p>
              <p className="text-xs text-primary-300 leading-6">
                اثر ورزش بر بدن شامل افزایش آرامش،کاهش استرس و بهبود خواب و
                روحیه بهتر،عملکرد ایمن
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-72 rounded-2xl shadow-5xl p-4 space-y-3">
              <Image
                width="0"
                height="0"
                className="w-full h-auto"
                src="/media/home/image.svg"
                alt=""
              />

              <p className="text-sm font-semibold text-primary-600">
                تاثیر ورزش بر تناسب و سلامتی بدن
              </p>
              <p className="text-xs text-primary-300 leading-6">
                اثر ورزش بر بدن شامل افزایش آرامش،کاهش استرس و بهبود خواب و
                روحیه بهتر،عملکرد ایمن
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-72 rounded-2xl shadow-5xl p-4 space-y-3">
              <Image
                width="0"
                height="0"
                className="w-full h-auto"
                src="/media/home/image.svg"
                alt=""
              />

              <p className="text-sm font-semibold text-primary-600">
                تاثیر ورزش بر تناسب و سلامتی بدن
              </p>
              <p className="text-xs text-primary-300 leading-6">
                اثر ورزش بر بدن شامل افزایش آرامش،کاهش استرس و بهبود خواب و
                روحیه بهتر،عملکرد ایمن
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-72 rounded-2xl shadow-5xl p-4 space-y-3">
              <Image
                width="0"
                height="0"
                className="w-full h-auto"
                src="/media/home/image.svg"
                alt=""
              />

              <p className="text-sm font-semibold text-primary-600">
                تاثیر ورزش بر تناسب و سلامتی بدن
              </p>
              <p className="text-xs text-primary-300 leading-6">
                اثر ورزش بر بدن شامل افزایش آرامش،کاهش استرس و بهبود خواب و
                روحیه بهتر،عملکرد ایمن
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <footer className="bg-white fixed bottom-0  shadow-3xl w-full py-2 right-0 z-20">
        <div>
          <ul className="mx-8 flex justify-between">
            <li>
              <a
                className="flex flex-col justify-center items-center relative"
                href="#"
              >
                <Image
                  fill
                  className="p-1"
                  src="/media/home/Vector(1).svg"
                  alt=""
                />
                <p className="text-xs text-primary-300  p-1">اسکن</p>
              </a>
            </li>

            <li>
              <a
                className="flex flex-col justify-center items-center relative"
                href="#"
              >
                <Image
                  fill
                  className="p-1"
                  src="/media/home/Vector(2).svg"
                  alt=""
                />
                <p className="text-xs text-primary-300 text-center p-1">
                  پیام ها
                </p>
              </a>
            </li>

            <li>
              <a
                className="flex flex-col justify-center items-center relative"
                href="#"
              >
                <Image
                  fill
                  className=" opacity-100 absolute -top-1/2"
                  src="/media/home/icon.svg"
                  alt=""
                />
                <Image
                  fill
                  className="p-1 opacity-0 "
                  src="/media/home/Vector(3).svg"
                  alt=""
                />
                <p className=" text-xs  text-primary-600 font-bold text-center p-1">
                  خانه
                </p>
              </a>
            </li>

            <li>
              <a
                className="flex flex-col justify-center items-center relative"
                href="#"
              >
                <Image
                  fill
                  className="w-full h-auto p-1"
                  src="/media/home/Group 1.svg"
                  alt=""
                />
                <p className="text-xs text-primary-300 text-center p-1">
                  برنامه
                </p>
              </a>
            </li>

            <li>
              <a
                className="flex flex-col justify-center items-center relative"
                href="#"
              >
                <Image
                  className="w-full h-auto p-1"
                  fill
                  src="/media/home/Vector(4).svg"
                  alt=""
                />
                <p className="text-xs text-primary-300 text-center p-1">
                  پروفایل
                </p>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
