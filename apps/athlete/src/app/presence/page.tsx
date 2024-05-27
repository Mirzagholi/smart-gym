import { AthleteFeatureHome } from '@smart-gym/athlete/feature/home';

/* eslint-disable-next-line */
export interface HomeProps {}
export default function Home(props: HomeProps) {
  return (
    <div>
      {/* page title */}
      <header className="w-full h-1/2 bg-smartgymprimary ">
        <div className="text-sm font-bold text-white flex gap-4 pt-10 pb-5 justify-center items-center h-1/3">
          <img
            className="w-6 h-6"
            src="/media/presence-img/scan-icon.png"
            alt="scan icon"
          />
          <p className="text-lg font-medium">اسکن بارکد و ثبت حضور</p>
        </div>
        <div className="w-full h-2/3 bg-smartgymprimarydark rounded-t-3xl py-8 flex flex-col justify-center items-center gap-4 mb-6">
          <div className="w-56 h-56 bg-white rounded-2xl p-4">
            <img src="/media/presence-img/scan.png" alt="Barcode Image" />
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-smartgymyellow text-xl">صدرا رهبر</p>
            <p className="text-white text-sm mb-4">کد کاربری: ۱۰۲۵۴</p>
          </div>
        </div>
      </header>
      {/* body section */}
      <div className="w-full bg-white p-8 mb-10 h-1/2 -mt-12 rounded-3xl flex justify-center gap-4 pt-8">
        <div className="w-44 bg-white rounded-2xl shadow-xl shadow-gray-300 flex justify-center items-center flex-col p-6 gap-4">
          <img
            className="w-12 h-10"
            src="/media/presence-img/presence.png"
            alt="presence icon"
          />

          <p className="font-bold">ثبت حضور</p>
        </div>
        <div className="w-44 bg-white rounded-2xl shadow-xl shadow-gray-300 flex justify-center items-center flex-col p-4 gap-4">
          <img
            className="w-12 h-10"
            src="/media/presence-img/calander.png"
            alt="calander icon"
          />
          <p className="font-bold">مشاهده تقویم حضور</p>
        </div>
      </div>
    </div>
  );
}
