import Image from 'next/Image';
/* eslint-disable-next-line */
export interface WorkoutProps {}

export default function Auth(props: WorkoutProps) {
  return (
    <>
      <header>
        <div
        className="flex gap-1 items-center h-32 absolute right-0 left-0">
        <Image width={500} height={500} className="bg-smartgymprimary absolute right-0 left-0 z-0" src="/media/plan/tringle.svg" alt=""/>
          <div className="flex gap-3 items-center justify-start ">
            <div className="h-10 pt-3 mr-5 z-10">
              <Image width={12} height={12}  src="/media/plan/right.svg" alt=""/>
            </div>
            <div className="flex gap-1 z-10">
                <div className="text-pure-w text-lg mr-2">برنامه تمرینی</div>
                <div className=" text-yellow text-lg"> بدنسازی</div>
            </div>
          </div>
        </div> 
    </header>
     
    <section>
        <div className="flex justify-between items-center rounded-t-3xl mt-24  h-24 bg-smartgymprimarydark absolute left-0 right-0 z-10">
            <div className="flex">
                <div className="text-pure-w mr-5 text-sm">نام مربی:</div>
                <div className="text-yellow text-sm"> احمد صادقی</div>
            </div>
            <div className="flex">
                <div className="text-pure-w text-sm">تاریخ شروع:</div>
                <div className=" text-yellow pl-5 text-sm">1403/02/10</div>
            </div>
        </div>
        <div>
            <div className="flex items-center justify-center gap-5 bg-pure-w rounded-t-3xl border-b border-b-border-color drop-shadow-md mt-44 h-36 absolute left-0 right-0 z-20">
                <div className="border border-purple pr-2 mr-4 rounded-2xl w-24 h-20 flex flex-col justify-center items-start gap-2 shadow hover:shadow-2xl hover:shadow-blue-dark hover:scale-125">
                    <div className="text-secondary3-ligh font-bold" >جلسه اول</div>
                    <div className="flex justify-center items-center gap-1">
                        <div><Image width={5} height={5} src="/media/plan/line3.svg" alt=""/></div>
                        <div className="flex flex-col">
                            <div className="flex">
                                <div className="text-third3-ligh text-xs">حرکات:</div>
                                <div className="text-secondary3-ligh text-xs">6</div>
                            </div>
                            <div className="flex">
                                <div className="text-third3-ligh text-xs">مدت:</div>
                                <div className="text-secondary3-ligh text-xs">80 دقیقه</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-purple pr-2 rounded-2xl w-24 h-20 flex flex-col justify-center items-start gap-2 shadow hover:shadow-2xl hover:shadow-blue-dark hover:scale-125">
                    <div className="text-secondary3-ligh font-bold" >جلسه دوم</div>
                    <div className="flex justify-center items-center gap-1">
                        <div><Image  width={5} height={5} src={"/media/plan/line3.svg"} alt=""/></div>
                        <div className="flex flex-col">
                            <div className="flex">
                                <div className="text-third3-ligh text-xs">حرکات:</div>
                                <div className="text-secondary3-ligh text-xs">6</div>
                            </div>
                            <div className="flex">
                                <div className="text-third3-ligh text-xs">مدت:</div>
                                <div className="text-secondary3-ligh text-xs">80 دقیقه</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-purple pr-2 rounded-2xl w-24 h-20 flex flex-col justify-center items-start gap-2 shadow hover:shadow-2xl hover:shadow-blue-dark hover:scale-125">
                    <div className="text-secondary3-ligh font-bold" >جلسه سوم</div>
                    <div className="flex justify-center items-center gap-1">
                        <div><Image width={5} height={5} src="/media/plan/line3.svg" alt=""/></div>
                        <div className="flex flex-col">
                            <div className="flex">
                                <div className="text-third3-ligh text-xs">حرکات:</div>
                                <div className="text-secondary3-ligh text-xs">6</div>
                            </div>
                            <div className="flex">
                                <div className="text-third3-ligh text-xs">مدت:</div>
                                <div className="text-secondary3-ligh text-xs">80 دقیقه</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-80 z-10">
                <div className="flex items-center justify-center gap-5 z-10">
                    <div>
                        <Image width={3} height={12}  src="/media/plan/Line-dash.svg" alt=""/>
                    </div>
                    <div className="absolute pt-24 right-3  top-64 ">
                        <Image width={30} height={30} src="/media/plan/no1.svg" alt=""/>
                    </div>
                    <div className="w-80">
                        <div className="flex items-center justify-between w-80 h-14 border-b border-border-color">
                            <div className="font-bold text-lg">جلو بازو با دستگاه</div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-24 flex justify-center items-center h-6 bg-purple text-third3-ligh rounded-3xl text-xs font-bold ">3 ست و 8 تکرار
                                </div>
                                <Image width={15} height={15} src="/media/plan/down.svg" alt=""/>
                            </div>

                        </div>

                        <div className="my-6">
                            حرکت جلو بازو اسپایدر هالتر EZ دست جمع با تکیه آرنج جزو حرکات تک مفصلی بسیار عالی برای تقویت عضلات دو سر بازویی (جلو بازو) می‌باشد. این حرکت در گروه تمرینات جلو بازو با هالتر قرار می‌گیرد. جلو بازو عنکبوتی هالتر EZ دست جمع با تکیه آرنج و جلو بازو.
                        </div>
                        <div>
                            <Image width={500} height={500} src="/media/plan/man.svg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-5 ">
                    <div>
                        <Image width={3} height={12}  src="/media/plan/Line.svg" alt=""/>
                    </div>
                    <div className="absolute pt-20 right-3 ">
                        <Image width={30} height={30} src="/media/plan/no2.svg" alt=""/>
                    </div>
                    <div className="w-80 pt-3">
                        <div className="flex items-center justify-between w-80 h-16 border-b border-border-color ">
                            <div className="font-bold text-lg">پرس سینه</div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-24 flex justify-center items-center h-6 bg-purple text-third3-ligh rounded-3xl text-xs font-bold ">3 ست و 8 تکرار
                                </div>
                                <Image width={10} height={10} src="/media/plan/lfet.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-5 mt-4 ">
                    <div>
                        <Image width={3} height={10}  src="/media/plan/Line.svg" alt=""/>
                    </div>
                    <div className="absolute pt-16  right-3 ">
                        <Image width={30} height={30} src="/media/plan/no3.svg" alt=""/>
                    </div>
                    <div className="w-80">
                        <div className="flex items-center justify-between w-80 h-16 border-b border-border-color">
                            <div className="font-bold text-lg">پرس سینه</div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-24 flex justify-center items-center h-6 bg-purple text-third3-ligh rounded-3xl text-xs font-bold ">3 ست و 8 تکرار
                                </div>
                                <Image width={10} height={10} src="/media/plan/lfet.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-5 mt-4 ">
                    <div>
                        <Image width={3} height={10}  src="/media/plan/Line.svg" alt=""/>
                    </div>
                    <div className="absolute pt-16  right-3 ">
                        <Image width={30} height={30} src="/media/plan/no4.svg" alt=""/>
                    </div>
                    <div className="w-80">
                        <div className="flex items-center justify-between w-80 h-16 border-b border-border-color">
                            <div className="font-bold text-lg">سیم کش</div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-24 flex justify-center items-center h-6 bg-purple text-third3-ligh rounded-3xl text-xs font-bold ">3 ست و 8 تکرار
                                </div>
                                <Image width={10} height={10} src="/media/plan/lfet.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-5 mt-4 ">
                    <div>
                        <Image width={3} height={10}  src="/media/plan/Line.svg" alt=""/>
                    </div>
                    <div className="absolute pt-16  right-3 ">
                        <Image width={30} height={30} src="/media/plan/no5.svg" alt=""/>
                    </div>
                    <div className="w-80">
                        <div className="flex items-center justify-between w-80 h-16 border-b border-border-color">
                            <div className="font-bold text-lg">شنا سوئدی</div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-24 flex justify-center items-center h-6 bg-purple text-third3-ligh rounded-3xl text-xs font-bold ">3 ست و 8 تکرار
                                </div>
                                <Image width={10} height={10} src="/media/plan/lfet.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-5 mt-4 ">
                    <div>
                        <Image width={3} height={10}  src="/media/plan/Line.svg" alt=""/>
                    </div>
                    <div className="absolute pt-16  right-3 ">
                        <Image width={30} height={30} src="/media/plan/no6.svg" alt=""/>
                    </div>
                    <div className="w-80">
                        <div className="flex items-center justify-between w-80 h-16 border-b border-border-color">
                            <div className="font-bold text-lg">بالا سینه با دستگاه</div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-24 flex justify-center items-center h-6 bg-purple text-third3-ligh rounded-3xl text-xs font-bold ">3 ست و 8 تکرار
                                </div>
                                <Image width={10} height={10} src="/media/plan/lfet.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    </>
  );
}
