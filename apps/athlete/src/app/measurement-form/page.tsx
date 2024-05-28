import Image from 'next/Image';
/* eslint-disable-next-line */
export interface InfoProps {}

export default function Info(props: InfoProps) {
  return (
    <div>
      {/* <!-- header section --> */}
      <header className="w-full h-32 bg-smartgymprimary">
        <div className="text-sm font-bold text-white flex gap-4 py-6 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          <p> اندازه گیری جدید</p>
        </div>
        <div className="w-full h-24 bg-smartgymprimarydark rounded-t-3xl px-8 flex justify-center items-center gap-4">
          <div className="w-1/2 flex gap-2 justify-center items-center pb-4">
            <svg
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0728 2.16364H14.6728V0H13.4364V2.16364H6.01823V0H4.78186V2.16364H1.38186C1.13602 2.16392 0.900333 2.26171 0.726498 2.43554C0.552663 2.60938 0.454876 2.84507 0.45459 3.09091V16.0727C0.454876 16.3186 0.552663 16.5543 0.726498 16.7281C0.900333 16.9019 1.13602 16.9997 1.38186 17H18.0728C18.3186 16.9997 18.5543 16.9019 18.7281 16.7281C18.902 16.5543 18.9998 16.3186 19 16.0727V3.09091C18.9998 2.84507 18.902 2.60938 18.7281 2.43554C18.5543 2.26171 18.3186 2.16392 18.0728 2.16364ZM17.7637 15.7636H1.69095V3.4H4.78186V4.94545H6.01823V3.4H13.4364V4.94545H14.6728V3.4H17.7637V15.7636Z"
                fill="#E7FE58"
              />
              <path
                d="M5.39994 7.10938H4.16357V8.34574H5.39994V7.10938Z"
                fill="#E7FE58"
              />
              <path
                d="M8.79984 7.10938H7.56348V8.34574H8.79984V7.10938Z"
                fill="#E7FE58"
              />
              <path
                d="M11.8909 7.10938H10.6545V8.34574H11.8909V7.10938Z"
                fill="#E7FE58"
              />
              <path
                d="M15.2911 7.10938H14.0547V8.34574H15.2911V7.10938Z"
                fill="#E7FE58"
              />
              <path
                d="M5.39994 9.89062H4.16357V11.127H5.39994V9.89062Z"
                fill="#E7FE58"
              />
              <path
                d="M8.79984 9.89062H7.56348V11.127H8.79984V9.89062Z"
                fill="#E7FE58"
              />
              <path
                d="M11.8909 9.89062H10.6545V11.127H11.8909V9.89062Z"
                fill="#E7FE58"
              />
              <path
                d="M15.2911 9.89062H14.0547V11.127H15.2911V9.89062Z"
                fill="#E7FE58"
              />
              <path
                d="M5.39994 12.6729H4.16357V13.9092H5.39994V12.6729Z"
                fill="#E7FE58"
              />
              <path
                d="M8.79984 12.6729H7.56348V13.9092H8.79984V12.6729Z"
                fill="#E7FE58"
              />
              <path
                d="M11.8909 12.6729H10.6545V13.9092H11.8909V12.6729Z"
                fill="#E7FE58"
              />
              <path
                d="M15.2911 12.6729H14.0547V13.9092H15.2911V12.6729Z"
                fill="#E7FE58"
              />
            </svg>
            <p className="text-white">
              تاریخ: <span className="text-smartgymyellow">۱۴۰۳/۰۲/۱۰</span>
            </p>
          </div>
          <div className="w-1/2 flex gap-2 justify-center items-center pb-4">
            <svg
              width="19"
              height="19"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.51686 3.15039H7.4502V9.08742L11.304 10.919L11.7619 9.95562L8.51686 8.41336V3.15039Z"
                fill="#E7FE58"
              />
              <path
                d="M8 0.5C3.58173 0.5 0 4.08173 0 8.5C0 12.9183 3.58173 16.5 8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08173 12.4183 0.5 8 0.5ZM8 15.4333C4.17083 15.4333 1.06667 12.3292 1.06667 8.5C1.06667 4.67083 4.17083 1.56667 8 1.56667C11.8292 1.56667 14.9333 4.67083 14.9333 8.5C14.9333 12.3292 11.8292 15.4333 8 15.4333Z"
                fill="#E7FE58"
              />
            </svg>
            <p className="text-white">
              ساعت: <span className="text-smartgymyellow">۱۱:۰۰</span>
            </p>
          </div>
        </div>
      </header>
      {/* <!-- body section --> */}
      <div className="w-full h-max rounded-3xl bg-white p-6 mt-4 mb-10 ">
        <form className="flex flex-col justify-center items-center " action="">
          <div className="flex gap-4">
            <div className="my-2">
              <label className="px-2 font-bold text-lg">قد:</label>
              <div className=" mt-1">
                <input
                  className="rounded-md py-3 bg-smartgymlight/20 border-2 border-gray-100"
                  type="text"
                  id="fname"
                  name="fname"
                  value=""
                />
              </div>
            </div>
            <div className="my-2">
              <label className="px-2 font-bold text-lg ">وزن:</label>
              <div className=" mt-1">
                <input
                  className="rounded-md py-3 bg-smartgymlight/20 border-2 border-gray-100"
                  type="text"
                  id="fname"
                  name="fname"
                  value=""
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="my-2">
              <label className="px-2 font-bold text-lg ">دور گردن:</label>
              <div className=" mt-1">
                <input
                  className="rounded-md py-3 bg-smartgymlight/20 border-2 border-gray-100"
                  type="text"
                  id="fname"
                  name="fname"
                  value=""
                />
              </div>
            </div>
            <div className="my-2">
              <label className="px-2 font-bold text-lg ">دور شانه:</label>
              <div className=" mt-1">
                <input
                  className="rounded-md py-3 bg-smartgymlight/20 border-2 border-gray-100"
                  type="text"
                  id="fname"
                  name="fname"
                  value=""
                />
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="my-2">
              <label className="px-2 font-bold text-lg ">دور سینه:</label>
              <div className=" mt-1">
                <input
                  className="rounded-md py-3 bg-smartgymlight/20 border-2 border-gray-100 w-32"
                  type="text"
                  id="fname"
                  name="fname"
                  value=""
                />
              </div>
            </div>
            <div className="my-2 ">
              <label className="px-2 font-bold text-lg ">دور شکم:</label>
              <div className=" mt-1">
                <input
                  className="rounded-md py-3 bg-smartgymlight/20 border-2 border-gray-100 w-32"
                  type="text"
                  id="fname"
                  name="fname"
                  value=""
                />
              </div>
            </div>
            <div className="my-2">
              <label className="px-2 font-bold text-lg ">دور لگن:</label>
              <div className=" mt-1">
                <input
                  className="rounded-md py-3 bg-smartgymlight/20 border-2 border-gray-100 w-32"
                  type="text"
                  id="fname"
                  name="fname"
                  value=""
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="my-2">
              <label className="px-2 font-bold text-lg ">دور بازو راست:</label>
              <div className=" mt-1">
                <input
                  className="rounded-md py-3 bg-smartgymlight/20 border-2 border-gray-100"
                  type="text"
                  id="fname"
                  name="fname"
                  value=""
                />
              </div>
            </div>
            <div className="my-2">
              <label className="px-2 font-bold text-lg ">دور بازو چپ:</label>
              <div className=" mt-1">
                <input
                  className="rounded-md py-3 bg-smartgymlight/20 border-2 border-gray-100"
                  type="text"
                  id="fname"
                  name="fname"
                  value=""
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="my-2">
              <label className="px-2 font-bold text-lg ">دور ران راست:</label>
              <div className=" mt-1">
                <input
                  className="rounded-md py-3 bg-smartgymlight/20 border-2 border-gray-100"
                  type="text"
                  id="fname"
                  name="fname"
                  value=""
                />
              </div>
            </div>
            <div className="my-2">
              <label className="px-2 font-bold text-lg ">دور ران چپ:</label>
              <div className=" mt-1">
                <input
                  className="rounded-md py-3 bg-smartgymlight/20 border-2 border-gray-100"
                  type="text"
                  id="fname"
                  name="fname"
                  value=""
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="my-2">
              <label className="px-2 font-bold text-lg ">دور ساق راست:</label>
              <div className=" mt-1">
                <input
                  className="rounded-md py-3 bg-smartgymlight/20 border-2 border-gray-100"
                  type="text"
                  id="fname"
                  name="fname"
                  value=""
                />
              </div>
            </div>
            <div className="my-2">
              <label className="px-2 font-bold text-lg ">دور ساق چپ:</label>
              <div className=" mt-1">
                <input
                  className="rounded-md py-3 bg-smartgymlight/20 border-2 border-gray-100"
                  type="text"
                  id="fname"
                  name="fname"
                  value=""
                />
              </div>
            </div>
          </div>
          <input
            className="bg-smartgymprimarydark rounded-full py-4 text-white text-xl my-4 w-full"
            type="submit"
            value="ثبت اطلاعات"
          />
        </form>
      </div>
    </div>
  );
}
