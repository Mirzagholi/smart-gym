import { AthleteFeatureHome } from '@smart-gym/athlete/feature/home';

/* eslint-disable-next-line */
export interface HomeProps {}
export default function Home(props: HomeProps) {
  return (
    <div>
      {/*  header section  */}
      <header className="w-full h-1/2 bg-smartgymprimary">
        <div className="w-full h-40 text-sm font-bold text-white flex gap-6 py-6 px-10 items-center ">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.92064 1.39621C4.6513 1.64998 4.5 1.99411 4.5 2.35294C4.5 2.71177 4.6513 3.05591 4.92064 3.30968L12.0322 10.0082L4.92064 16.7067C4.65894 16.9619 4.51413 17.3037 4.5174 17.6585C4.52068 18.0133 4.67177 18.3528 4.93814 18.6037C5.20451 18.8546 5.56485 18.9969 5.94154 19C6.31823 19.003 6.68114 18.8666 6.9521 18.6201L15.0794 10.9649C15.3487 10.7111 15.5 10.367 15.5 10.0082C15.5 9.64934 15.3487 9.3052 15.0794 9.05143L6.95209 1.39621C6.68268 1.14252 6.31732 1 5.93637 1C5.55541 1 5.19005 1.14252 4.92064 1.39621Z"
              fill="#6A7CBC"
            />
          </svg>
          <p className="text-lg font-medium">
            {' '}
            تاثیر ورزش بر تاسب و سلامتی بدن{' '}
          </p>
        </div>
      </header>
      {/* body section  */}
      <div className="w-full bg-white p-8 mb-10 h-1/2 -mt-12 rounded-3xl flex flex-col justify-center gap-4 pt-8">
        <img
          className="rounded-md"
          src="media/article/article-image.jpg"
          alt="article image"
        />
        <div className="">
          <p>
            ورزش به یکی از عوامل مهم در بهبود کیفیت زندگی انسان‌ها تبدیل شده
            است. از جمله اثرات مثبت ورزش بر سلامتی، بهبود کیفیت خواب و افزایش
            تناسب اندام است. این مقاله به بررسی تأثیر ورزش بر بهبود کیفیت خواب و
            تناسب اندام می‌پردازد و نحوه ارتباط میان این دو موضوع را برای شما
            توضیح می‌دهد. ورزش به عنوان یکی از عوامل اصلی بهبود تناسب اندام
            تأثیر مثبت زیادی دارد و این ارتباط توسط عوامل مختلفی توجیه می‌شود:
            <div className="text-smartgymsecodary">
              <li>سوزاندن چربی و کاهش وزن </li>
              <li>تقویت عضلات و تعادل بدنی</li>
              <li>بهبود سلامت قلبی-عروقی</li>
              <li>کاهش استرس و اضطراب</li>
              <li>افزایش انرژی</li>
              <li>افزایش خواب عمیق</li>
              <li>کاهش اضطراب و استرس</li>
            </div>
          </p>
        </div>
      </div>
      {/* related articles   */}
      <div className="flex text-wrap gap-6 pl-0 pr-10 mb-20 ">
        <div className="w-96 bg-white shadow-lg shadow-gray-300 rounded-2xl mb-10 flex flex-col py-4 gap-2 ">
          <img
            className="rounded-2xl p-4 "
            src="media/article/related-article-image.jpg"
            alt="related article image"
          />
          <h2 className="px-4 font-bold">تاثیر ورزش بر تناسب و سلامتی بدن</h2>
          <p className="px-4 text-xs">
            اثر ورزش بر بدن شامل افزایش آرامش،کاهش استرس و بهبود خواب و روحیه
            بهتر،عملکرد ایمن
          </p>
        </div>
        <div className="w-56 bg-white shadow-lg shadow-gray-300 rounded-r-lg mb-10">
          <div className="h-full bg-white shadow-lg shadow-gray-200 rounded-r-2xl mb-10 flex flex-col py-2 gap-4">
            <img
              className="mt-6 h-38 pl-0 rounded-r-2xl px-4"
              src="media/article/related-article-image.jpg"
              alt="related article image"
            />
            <h2 className="pl-0 px-4 font-bold">تاثیر ورزش بر تناسب </h2>
            <p className="pl-0 px-4 text-xs">
              اثر ورزش بر بدن شامل افزایش آرامش،کاهش استرس{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
