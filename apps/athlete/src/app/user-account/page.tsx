import { AthleteFeatureHome } from '@smart-gym/athlete/feature/home';

/* eslint-disable-next-line */
export interface HomeProps {}
export default function Home(props: HomeProps) {
  return (
    <div>
      {/*  header section  */}
      <header className="w-full bg-smartgymprimary">
        <div className="text-sm font-bold text-white gap-4 py-6 px-4 flex justify-center items-center">
          <img
            className="w-5 h-5"
            src="media/user-account/profile-icon.png"
            alt="user-avatar"
          />
          <p className="text-lg">پروفایل</p>
        </div>
        <div className="w-full h-60 bg-smartgymprimarydark rounded-t-3xl px-8 flex flex-col justify-center items-center gap-2 pt-4 pb-10">
          <img
            className="w-28 h-28"
            src="media/user-account/user-avatar.png"
            alt="Avatar"
          />
          <h1 className="text-xl text-smartgymyellow">صدرا رهبر</h1>
          <p className="text-sm text-white">کد کاربری: ۱۰۲۵۴</p>
        </div>
      </header>
      {/*  body section  */}
      <div className="w-full bg-white rounded-3xl -mt-6 p-8 flex flex-col gap-6 mb-24">
        <div className="w-full h-16 flex gap-4 bg-white justify-between items-center p-4 shadow-md shadow-gray-200 rounded-2xl cursor-pointer">
          <div className="flex gap-4">
            <img
              className="w-5 h-5"
              src="media/user-account/user-info-icon.png"
              alt="user-avatar"
            />
            <p className="text-lg font-bold">اطلاعات فردی</p>
          </div>
          <svg
            className=""
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.69408 13.6918C7.88996 13.4945 8 13.2268 8 12.9477C8 12.6686 7.88996 12.401 7.69408 12.2036L2.52205 6.99365L7.69408 1.78371C7.88441 1.5852 7.98972 1.31933 7.98734 1.04337C7.98496 0.767402 7.87508 0.503418 7.68135 0.308273C7.48763 0.113129 7.22557 0.00243861 6.95161 4.0146e-05C6.67765 -0.00235737 6.41372 0.103729 6.21666 0.295453L0.305919 6.24952C0.110039 6.4469 -1.60076e-07 6.71456 -1.35678e-07 6.99365C-1.11279e-07 7.27274 0.110039 7.5404 0.305919 7.73777L6.21666 13.6918C6.4126 13.8892 6.67831 14 6.95537 14C7.23243 14 7.49814 13.8892 7.69408 13.6918Z"
              fill="#52559F"
            />
          </svg>
        </div>
        <div className="w-full h-16 flex gap-4 bg-white justify-between items-center p-4 shadow-md shadow-gray-200 rounded-2xl cursor-pointer">
          <div className="flex gap-4">
            <img
              className="w-5 h-5"
              src="media/user-account/transection-icon.png"
              alt="user-avatar"
            />
            <p className="text-lg font-bold">تاریخچه تراکنش ها</p>
          </div>
          <svg
            className=""
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.69408 13.6918C7.88996 13.4945 8 13.2268 8 12.9477C8 12.6686 7.88996 12.401 7.69408 12.2036L2.52205 6.99365L7.69408 1.78371C7.88441 1.5852 7.98972 1.31933 7.98734 1.04337C7.98496 0.767402 7.87508 0.503418 7.68135 0.308273C7.48763 0.113129 7.22557 0.00243861 6.95161 4.0146e-05C6.67765 -0.00235737 6.41372 0.103729 6.21666 0.295453L0.305919 6.24952C0.110039 6.4469 -1.60076e-07 6.71456 -1.35678e-07 6.99365C-1.11279e-07 7.27274 0.110039 7.5404 0.305919 7.73777L6.21666 13.6918C6.4126 13.8892 6.67831 14 6.95537 14C7.23243 14 7.49814 13.8892 7.69408 13.6918Z"
              fill="#52559F"
            />
          </svg>
        </div>
        <div className="w-full h-16 flex gap-4 bg-white justify-between items-center p-4 shadow-md shadow-gray-200 rounded-2xl cursor-pointer">
          <div className="flex gap-4">
            <img
              className="w-5 h-5"
              src="media/user-account/course-history-icon.png"
              alt="user-avatar"
            />
            <p className="text-lg font-bold">تاریخچه دوره ها</p>
          </div>
          <svg
            className=""
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.69408 13.6918C7.88996 13.4945 8 13.2268 8 12.9477C8 12.6686 7.88996 12.401 7.69408 12.2036L2.52205 6.99365L7.69408 1.78371C7.88441 1.5852 7.98972 1.31933 7.98734 1.04337C7.98496 0.767402 7.87508 0.503418 7.68135 0.308273C7.48763 0.113129 7.22557 0.00243861 6.95161 4.0146e-05C6.67765 -0.00235737 6.41372 0.103729 6.21666 0.295453L0.305919 6.24952C0.110039 6.4469 -1.60076e-07 6.71456 -1.35678e-07 6.99365C-1.11279e-07 7.27274 0.110039 7.5404 0.305919 7.73777L6.21666 13.6918C6.4126 13.8892 6.67831 14 6.95537 14C7.23243 14 7.49814 13.8892 7.69408 13.6918Z"
              fill="#52559F"
            />
          </svg>
        </div>
        <div className="w-full h-16 flex gap-4 bg-white justify-between items-center p-4 shadow-md shadow-gray-200 rounded-2xl cursor-pointer">
          <div className="flex gap-4">
            <img
              className="w-5 h-5"
              src="media/user-account/sport-calander-icon.png"
              alt="user-avatar"
            />
            <p className="text-lg font-bold">تقویم ورزشی من</p>
          </div>
          <svg
            className=""
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.69408 13.6918C7.88996 13.4945 8 13.2268 8 12.9477C8 12.6686 7.88996 12.401 7.69408 12.2036L2.52205 6.99365L7.69408 1.78371C7.88441 1.5852 7.98972 1.31933 7.98734 1.04337C7.98496 0.767402 7.87508 0.503418 7.68135 0.308273C7.48763 0.113129 7.22557 0.00243861 6.95161 4.0146e-05C6.67765 -0.00235737 6.41372 0.103729 6.21666 0.295453L0.305919 6.24952C0.110039 6.4469 -1.60076e-07 6.71456 -1.35678e-07 6.99365C-1.11279e-07 7.27274 0.110039 7.5404 0.305919 7.73777L6.21666 13.6918C6.4126 13.8892 6.67831 14 6.95537 14C7.23243 14 7.49814 13.8892 7.69408 13.6918Z"
              fill="#52559F"
            />
          </svg>
        </div>
        <div className="w-full h-16 flex gap-4 bg-white justify-between items-center p-4 shadow-md shadow-gray-200 rounded-2xl cursor-pointer">
          <div className="flex gap-4">
            <img
              className="w-5 h-5"
              src="media/user-account/gym-info-icon.png"
              alt="user-avatar"
            />
            <p className="text-lg font-bold">اطلاعات باشگاه</p>
          </div>
          <svg
            className=""
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.69408 13.6918C7.88996 13.4945 8 13.2268 8 12.9477C8 12.6686 7.88996 12.401 7.69408 12.2036L2.52205 6.99365L7.69408 1.78371C7.88441 1.5852 7.98972 1.31933 7.98734 1.04337C7.98496 0.767402 7.87508 0.503418 7.68135 0.308273C7.48763 0.113129 7.22557 0.00243861 6.95161 4.0146e-05C6.67765 -0.00235737 6.41372 0.103729 6.21666 0.295453L0.305919 6.24952C0.110039 6.4469 -1.60076e-07 6.71456 -1.35678e-07 6.99365C-1.11279e-07 7.27274 0.110039 7.5404 0.305919 7.73777L6.21666 13.6918C6.4126 13.8892 6.67831 14 6.95537 14C7.23243 14 7.49814 13.8892 7.69408 13.6918Z"
              fill="#52559F"
            />
          </svg>
        </div>
        <div className="w-full h-16 flex gap-4 bg-white justify-between items-center p-4 shadow-md shadow-gray-200 rounded-2xl cursor-pointer">
          <div className="flex gap-4">
            <img
              className="w-5 h-5"
              src="media/user-account/insurance-icon.png"
              alt="user-avatar"
            />
            <p className="text-lg font-bold">بیمه ورزشی</p>
          </div>
          <svg
            className=""
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.69408 13.6918C7.88996 13.4945 8 13.2268 8 12.9477C8 12.6686 7.88996 12.401 7.69408 12.2036L2.52205 6.99365L7.69408 1.78371C7.88441 1.5852 7.98972 1.31933 7.98734 1.04337C7.98496 0.767402 7.87508 0.503418 7.68135 0.308273C7.48763 0.113129 7.22557 0.00243861 6.95161 4.0146e-05C6.67765 -0.00235737 6.41372 0.103729 6.21666 0.295453L0.305919 6.24952C0.110039 6.4469 -1.60076e-07 6.71456 -1.35678e-07 6.99365C-1.11279e-07 7.27274 0.110039 7.5404 0.305919 7.73777L6.21666 13.6918C6.4126 13.8892 6.67831 14 6.95537 14C7.23243 14 7.49814 13.8892 7.69408 13.6918Z"
              fill="#52559F"
            />
          </svg>
        </div>
        <div className="w-full h-16 flex gap-4 bg-white justify-between items-center p-4 shadow-md shadow-gray-200 rounded-2xl cursor-pointer">
          <div className="flex gap-4">
            <img
              className="w-5 h-5"
              src="media/user-account/about-icon.png"
              alt="user-avatar"
            />
            <p className="text-lg font-bold">درباره اپلیکیشن</p>
          </div>
          <svg
            className=""
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.69408 13.6918C7.88996 13.4945 8 13.2268 8 12.9477C8 12.6686 7.88996 12.401 7.69408 12.2036L2.52205 6.99365L7.69408 1.78371C7.88441 1.5852 7.98972 1.31933 7.98734 1.04337C7.98496 0.767402 7.87508 0.503418 7.68135 0.308273C7.48763 0.113129 7.22557 0.00243861 6.95161 4.0146e-05C6.67765 -0.00235737 6.41372 0.103729 6.21666 0.295453L0.305919 6.24952C0.110039 6.4469 -1.60076e-07 6.71456 -1.35678e-07 6.99365C-1.11279e-07 7.27274 0.110039 7.5404 0.305919 7.73777L6.21666 13.6918C6.4126 13.8892 6.67831 14 6.95537 14C7.23243 14 7.49814 13.8892 7.69408 13.6918Z"
              fill="#52559F"
            />
          </svg>
        </div>
        <div className="w-full h-16 flex gap-4 bg-white justify-between items-center p-4 shadow-md shadow-gray-200 rounded-2xl cursor-pointer">
          <div className="flex gap-4">
            <img
              className="w-5 h-5"
              src="media/user-account/exit-icon.png"
              alt="user-avatar"
            />
            <p className="text-lg font-bold">خروج از حساب کاربری</p>
          </div>
          <svg
            className=""
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.69408 13.6918C7.88996 13.4945 8 13.2268 8 12.9477C8 12.6686 7.88996 12.401 7.69408 12.2036L2.52205 6.99365L7.69408 1.78371C7.88441 1.5852 7.98972 1.31933 7.98734 1.04337C7.98496 0.767402 7.87508 0.503418 7.68135 0.308273C7.48763 0.113129 7.22557 0.00243861 6.95161 4.0146e-05C6.67765 -0.00235737 6.41372 0.103729 6.21666 0.295453L0.305919 6.24952C0.110039 6.4469 -1.60076e-07 6.71456 -1.35678e-07 6.99365C-1.11279e-07 7.27274 0.110039 7.5404 0.305919 7.73777L6.21666 13.6918C6.4126 13.8892 6.67831 14 6.95537 14C7.23243 14 7.49814 13.8892 7.69408 13.6918Z"
              fill="#52559F"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
