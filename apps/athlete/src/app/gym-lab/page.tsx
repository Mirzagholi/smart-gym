import Image from 'next/image';
/* eslint-disable-next-line */
export interface GymlabProps {}

export default function Auth(props: GymlabProps) {
  return (
   <>
   <div>
        <section className=" bg-pure-w rounded-t-3xl absolute left-0 right-0 z-10 mt-24">
            <div className="flex items-center justify-center">
                <div>
                    <Image width={6} height={10} src="/media/gym-lab/line1.svg" alt=""/>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center">
                        <div>
                            <Image width={18} height={15}src="/media/gym-lab/line2.svg" alt=""/>
                        </div>
                        <div className="flex justify-center items-center gap-3  border border-purple w-80 h-16 rounded-xl">
                           <div className="flex gap-1 items-center justify-center">
                               <div><Image width={20} height={20} src="/media/gym-lab/calendar.svg" alt=""/></div>
                               <div className="text-light-blue text-sm">تاریخ انجام: 1403/02/28</div>
                           </div>
                            <button className="bg-secondary-blue text-pure-w rounded-2xl w-28 h-8  text-sm">مشاهده نتایج</button>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <Image width={18} height={15} src="/media/gym-lab/line2.svg" alt=""/>
                        </div>
                        <div className="flex justify-center items-center gap-3  border border-purple w-80 h-16 rounded-xl">
                           <div className="flex gap-1 items-center justify-center">
                               <div><Image width={20} height={20} src="/media/gym-lab/calendar.svg" alt=""/></div>
                               <div className="text-light-blue text-sm">تاریخ انجام: 1403/02/28</div>
                           </div>
                            <button className="bg-secondary-blue text-pure-w rounded-2xl w-28 h-8  text-sm">مشاهده نتایج</button>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <Image width={18} height={15} src="/media/gym-lab/line2.svg" alt=""/>
                        </div>
                        <div className="flex justify-center items-center gap-3  border border-purple w-80 h-16 rounded-xl">
                           <div className="flex gap-1 items-center justify-center">
                               <div><Image width={20} height={20} src="/media/gym-lab/calendar.svg" alt=""/></div>
                               <div className="text-light-blue text-sm">تاریخ انجام: 1403/02/28</div>
                           </div>
                            <button className="bg-secondary-blue text-pure-w rounded-2xl w-28 h-8  text-sm">مشاهده نتایج</button>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <Image width={18} height={15} src="/media/gym-lab/line2.svg" alt=""/>
                        </div>
                        <div className="flex justify-center items-center gap-3  border border-purple w-80 h-16 rounded-xl">
                           <div className="flex gap-1 items-center justify-center">
                               <div><Image width={20} height={20} src="/media/gym-lab/calendar.svg" alt=""/></div>
                               <div className="text-light-blue text-sm">تاریخ انجام: 1403/02/28</div>
                           </div>
                            <button className="bg-secondary-blue text-pure-w rounded-2xl w-28 h-8  text-sm">مشاهده نتایج</button>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <Image width={18} height={15} src="/media/gym-lab/line2.svg" alt=""/>
                        </div>
                        <div className="flex justify-center items-center gap-3  border border-purple w-80 h-16 rounded-xl">
                           <div className="flex gap-1 items-center justify-center">
                               <div><Image width={20} height={20}src="/media/gym-lab/calendar.svg" alt=""/></div>
                               <div className="text-light-blue text-sm">تاریخ انجام: 1403/02/28</div>
                           </div>
                            <button className="bg-secondary-blue text-pure-w rounded-2xl w-28 h-8  text-sm">مشاهده نتایج</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
   </>
  );
}
