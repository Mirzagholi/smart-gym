import { AthleteFeatureHome } from '@smart-gym/athlete/feature/home';

/* eslint-disable-next-line */
export interface HomeProps {}
export default function Home(props: HomeProps) {
  return (
    <div>
      {/*  header section  */}
      <header className="w-full h-32 bg-smartgymprimary mb-4">
        <div className="text-sm font-bold text-white flex gap-4 py-6 px-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            className="w-6 h-6 text-smartgymsecodary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          <p className="text-lg"> تقویم ورزشی </p>
        </div>
        <div className="h-24 bg-smartgymprimarydark rounded-t-3xl px-8 flex justify-center gap-8">
          <div className=" flex gap-2 justify-center items-center pb-4">
            <p className="text-white">
              سال: <span className="text-smartgymyellow">۱۴۰۳</span>
            </p>
          </div>
          <div className=" flex gap-2 justify-center items-center pb-4">
            <p className="text-white">
              ماه: <span className="text-smartgymyellow">فروردین</span>
            </p>
          </div>
        </div>
      </header>
      {/*  body section  */}
      <div className="w-full bg-smartgymyellow rounded-t-3xl flex px-2 pb-14 justify-center items-start">
        {/*  calander  */}
        <div className="flex pt-8">
          <table className="w-full">
            <thead>
              <tr className="">
                <th>
                  <div className="w-full flex justify-center">
                    <p className="text-xl font-bold text-center text-black">
                      ش
                    </p>
                  </div>
                </th>
                <th>
                  <div className="w-full flex justify-center">
                    <p className="text-xl font-bold text-center text-black">
                      ی
                    </p>
                  </div>
                </th>
                <th>
                  <div className="w-full flex justify-center">
                    <p className="text-xl font-bold text-center text-black">
                      د
                    </p>
                  </div>
                </th>
                <th>
                  <div className="w-full flex justify-center">
                    <p className="text-xl font-bold text-center text-black">
                      س
                    </p>
                  </div>
                </th>
                <th>
                  <div className="w-full flex justify-center">
                    <p className="text-xl font-bold text-center text-black">
                      چ
                    </p>
                  </div>
                </th>
                <th>
                  <div className="w-full flex justify-center">
                    <p className="text-xl font-bold text-center text-black">
                      پ
                    </p>
                  </div>
                </th>
                <th>
                  <div className="w-full flex justify-center">
                    <p className="text-xl font-bold text-center text-black">
                      ج
                    </p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="pt-6">
                  <div className="py-2 px-5 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۱
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-5 cursor-pointer border-2 border-black rounded-lg text-lg font-bold flex justify-center text-white bg-black">
                    ۲
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-5 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۳
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-5 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۴
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-5 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center bg-white">
                    ۵
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-5 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۶
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-5 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۷
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr className="">
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۸
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۹
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center bg-white">
                    ۱۰
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۱۱
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center ">
                    ۱۲
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۱۳
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center bg-white">
                    ۱۴
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr className="">
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۱۵
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۱۶
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۱۷
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center bg-white">
                    ۱۸
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center bg-white">
                    ۱۹
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۲۰
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۲۱
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr className="">
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۲۲
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center bg-white">
                    ۲۳
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۲۴
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center bg-white">
                    ۲۵
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۲۶
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۲۷
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۲۸
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr className="">
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center">
                    ۲۹
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center ">
                    ۳۰
                  </div>
                </td>
                <td className="pt-6">
                  <div className="py-2 px-4 cursor-pointer border-2 border-gray-600 rounded-lg text-lg font-bold flex justify-center bg-white">
                    ۳۱
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/*  courses  */}
      <div className="h-24 bg-smartgymprimarydark rounded-t-3xl px-8 flex justify-center gap-8 -mt-4">
        <div className=" flex gap-2 justify-center items-center pb-6">
          <p className="text-white">
            تاریخ انتخاب شده:
            <span className="text-smartgymyellow mx-4">
              یکشنبه ۲ فروردین ۱۴۰۳
            </span>
          </p>
        </div>
      </div>
      {/*  accordion section  */}
      <div className="w-full bg-white p-8 mb-24 h-1/2 rounded-3xl flex flex-col justify-center gap-4 pt-8 -mt-6 border-r-2">
        <div
          x-data="{ acc: 1 }"
          className="w-full border-2 border-gray-300 rounded-3xl"
        >
          <div className="m-4 w- h-10 flex items-center px-4 py-6 justify-between  text-bold cursor-pointer border-b-2">
            <p className="text-xl font-bold text-smartgymprimarydark">
              دوره TRX
            </p>
            <div className="flex gap-8 items-center">
              <svg
                width="15"
                height="9"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7359 0.267679C11.5667 0.0962845 11.3373 8.69082e-08 11.098 1.18278e-07C10.8588 1.49648e-07 10.6294 0.0962846 10.4602 0.267679L5.99455 4.7932L1.52889 0.267681C1.35874 0.101143 1.13086 0.00899188 0.894313 0.0110749C0.657771 0.013158 0.431499 0.109309 0.264233 0.278817C0.0969668 0.448326 0.00208864 0.677631 3.34989e-05 0.917343C-0.00202164 1.15706 0.0889103 1.388 0.253245 1.56043L5.35673 6.73232C5.52591 6.90372 5.75533 7 5.99455 7C6.23377 7 6.4632 6.90371 6.63238 6.73232L11.7359 1.56042C11.905 1.38898 12 1.15648 12 0.914052C12 0.671626 11.905 0.439126 11.7359 0.267679Z"
                  fill="#52559F"
                />
              </svg>
            </div>
          </div>
          <div
            x-show="acc"
            className="tex-black w-11/12 flex gap-4 justify-between items-center "
          >
            <div className="flex flex-col w-full justify-center py-4 gap-4 text-smartgymsecodary px-8">
              <div className="flex gap-4">
                <img
                  className="w-7 h-7"
                  src="media/calander/clock-icon.png"
                  alt="attendance time"
                />
                <p className="text-lg font-bold">ساعت حضور: ۱۸:۳۰ - ۲۰:۳۰</p>
              </div>
              <div className="flex gap-4">
                <img
                  className="w-7 h-7"
                  src="media/calander/trainer-icon.png"
                  alt="attendance time"
                />
                <p className="text-lg font-bold">
                  نام مربی:{' '}
                  <span className="text-smartgymprimarydark">ابراهیم اسدی</span>
                </p>
              </div>
              <div className="flex gap-4">
                <img
                  className="w-7 h-7"
                  src="media/calander/course-icon.png"
                  alt="attendance time"
                />
                <p className="text-lg font-bold">
                  توضیحات:{' '}
                  <span className="text-smartgymprimarydark">
                    برگزاری در سالن A{' '}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          x-data="{ acc: 1 }"
          className="w-full border-2 border-gray-300 rounded-3xl"
        >
          <div className="m-4 w- h-10 flex items-center px-4 py-6 justify-between  text-bold cursor-pointer border-b-2">
            <p className="text-xl font-bold text-smartgymprimarydark">
              دوره بوکس
            </p>
            <div className="flex gap-8 items-center">
              <svg
                width="15"
                height="9"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7359 0.267679C11.5667 0.0962845 11.3373 8.69082e-08 11.098 1.18278e-07C10.8588 1.49648e-07 10.6294 0.0962846 10.4602 0.267679L5.99455 4.7932L1.52889 0.267681C1.35874 0.101143 1.13086 0.00899188 0.894313 0.0110749C0.657771 0.013158 0.431499 0.109309 0.264233 0.278817C0.0969668 0.448326 0.00208864 0.677631 3.34989e-05 0.917343C-0.00202164 1.15706 0.0889103 1.388 0.253245 1.56043L5.35673 6.73232C5.52591 6.90372 5.75533 7 5.99455 7C6.23377 7 6.4632 6.90371 6.63238 6.73232L11.7359 1.56042C11.905 1.38898 12 1.15648 12 0.914052C12 0.671626 11.905 0.439126 11.7359 0.267679Z"
                  fill="#52559F"
                />
              </svg>
            </div>
          </div>

          <div
            x-show="acc"
            className="tex-black w-11/12 flex gap-4 justify-between items-center "
          >
            <div className="flex flex-col w-full justify-center py-4 gap-4 text-smartgymsecodary px-8">
              <div className="flex gap-4">
                <img
                  className="w-7 h-7"
                  src="media/calander/clock-icon.png"
                  alt="attendance time"
                />
                <p className="text-lg font-bold">ساعت حضور: ۱۹:۳۰ - ۲۱:۳۰</p>
              </div>
              <div className="flex gap-4">
                <img
                  className="w-7 h-7"
                  src="media/calander/trainer-icon.png"
                  alt="attendance time"
                />
                <p className="text-lg font-bold">
                  نام مربی:{' '}
                  <span className="text-smartgymprimarydark">رضا صادقی</span>
                </p>
              </div>
              <div className="flex gap-4">
                <img
                  className="w-7 h-7"
                  src="media/calander/course-icon.png"
                  alt="attendance time"
                />
                <p className="text-lg font-bold">
                  توضیحات:{' '}
                  <span className="text-smartgymprimarydark">
                    برگزاری در سالن A{' '}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
