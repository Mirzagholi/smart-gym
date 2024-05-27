import Image from "next/image";
/* eslint-disable-next-line */
export interface CoachesProps {}

export default function Coaches(props: CoachesProps) {
  return (
    <>
     <section className=" container relative z-10  bg-white bg- rounded-t-4xl">
            
           

            <div className=" pt-8 space-y-6">
              
                 <div  className="mx-8 border rounded-2xl  ">
                  
                     <div id="accordion" className="px-6 pt-6 pb-6 rounded-2xl bg-primary-100 bg-opacity-50 cursor-pointer flex items-center justify-between">
                         <div className="flex items-center  gap-1">
                             <div><Image width={77} height={77} className="w-20 h-20" src="/media/home/images/pic.svg" alt=""/></div>
                             <div className="space-y-1">
                                 <p className="text-lg text-primary-600 font-medium">امیر احمدی  </p>
                                 <p className="text-sm text-primary-500 font-medium"> رشته ورزشی: کراس فیت </p>
                             </div>
                         </div>
                         
                         <Image width={15} height={15} id="icon" src="/media/home/images/Vector(7).svg" alt=""/>
                         
                     </div>
                  
 
                 <div id="panel" className="px-6 ">
                     <h3 className= "pt-4 mx-4 text-primary-500 text-base">برنامه حضور</h3>
                     <hr className="mt-4"/>
                     <div className="mr-5  pt-6 border-r-2  border-dashed space-y-4 border-r-primary-100">
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500">شنبه: <span className="px-1 text-primary-600 ">16 تا 21</span></p>
                             </div>
                         </div>
     
     
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> یکشنبه:   <span className="px-1 text-primary-600 ">15 تا 16</span></p>
                             </div>
                         </div>
     
     
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> دوشنبه: <span className="px-1 text-primary-600 ">16 تا 20</span></p>
                             </div>
                         </div>
     
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> سه شنبه:  <span className="px-1 text-primary-600  ">20 تا 21</span></p>
                             </div>
                         </div>
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> چهار شنبه:<span className="px-1 text-primary-600">18 تا 21</span></p>
                             </div>
                         </div>
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> پنج شنبه:<span className="px-1 text-primary-600  ">17 تا 21</span></p>
                             </div>
                         </div>
                     </div>
 
 
                     <h3 className= "pt-8 mx-4 text-primary-500 text-base"> توضیحات</h3>
                     <hr className="mt-4"/>
                     <p className="pb-6 text-xs text-primary-600 p-2 leading-6 over">
                         هادی چوپان زادهٔ ۴ مهر ۱۳۶۶ بدن‌ساز حرفه‌ای اهل ایران است. او از سال ۱۳۷۹ ورزش پرورش اندام را آغاز کرد و سال ۱۳۹۰ تا ۱۳۹۵ عضو ثابت تیم ملی بدن‌سازی ایران بوده است. او تنها ایرانی و دومین آسیایی پس از سمیر بنوت است که توانسته قهرمان مستر المپیا شود.
                     </p>
 
 
                 </div>
 
 
                  </div>
 
 
 
                  <div  className="mx-8 border rounded-2xl  ">
                  
                     <div id="accordion1" className="px-6 pt-6 pb-6 rounded-2xl bg-primary-100 bg-opacity-50 cursor-pointer flex items-center justify-between">
                         <div className="flex items-center  gap-1">
                             <div><Image width={30} height={30} className="w-20 h-20" src="/media/home/images/pic.svg" alt=""/></div>
                             <div className="space-y-1">
                                 <p className="text-lg text-primary-600 font-medium">امیر احمدی  </p>
                                 <p className="text-sm text-primary-500 font-medium"> رشته ورزشی: کراس فیت </p>
                             </div>
                         </div>
                         
                         <Image width={15} height={15} id="icon1" src="/media/home/images/Vector(7).svg" alt=""/>
                         
                     </div>
                  
 
                 <div id="panel1" className="px-6 hidden">
                     <h3 className= "pt-4 mx-4 text-primary-500 text-base">برنامه حضور</h3>
                     <hr className="mt-3"/>
                     <div className="mr-5  pt-6 border-r-2  border-dashed space-y-4 border-r-primary-100">
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500">شنبه: <span className="px-1 text-primary-600 ">16 تا 21</span></p>
                             </div>
                         </div>
     
     
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> یکشنبه:   <span className="px-1 text-primary-600 ">15 تا 16</span></p>
                             </div>
                         </div>
     
     
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> دوشنبه: <span className="px-1 text-primary-600 ">16 تا 20</span></p>
                             </div>
                         </div>
     
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> سه شنبه:  <span className="px-1 text-primary-600  ">20 تا 21</span></p>
                             </div>
                         </div>
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> چهار شنبه:<span className="px-1 text-primary-600">18 تا 21</span></p>
                             </div>
                         </div>
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> پنج شنبه:<span className="px-1 text-primary-600  ">17 تا 21</span></p>
                             </div>
                         </div>
                     </div>
 
 
                     <h3 className= "pt-8 mx-4 text-primary-500 text-base"> توضیحات</h3>
                     <hr className="mt-4"/>
                     <p className="pb-6 text-xs text-primary-600 p-2 leading-6 over">
                         هادی چوپان زادهٔ ۴ مهر ۱۳۶۶ بدن‌ساز حرفه‌ای اهل ایران است. او از سال ۱۳۷۹ ورزش پرورش اندام را آغاز کرد و سال ۱۳۹۰ تا ۱۳۹۵ عضو ثابت تیم ملی بدن‌سازی ایران بوده است. او تنها ایرانی و دومین آسیایی پس از سمیر بنوت است که توانسته قهرمان مستر المپیا شود.
                     </p>
 
 
                 </div>
 
 
                  </div>
 
 
                  <div  className="mx-8 border rounded-2xl  ">
                  
                     <div id="accordion2" className="px-6 pt-6 pb-6 rounded-2xl bg-primary-100 bg-opacity-50 cursor-pointer flex items-center justify-between">
                         <div className="flex items-center  gap-1">
                             <div><Image width={30} height={30} className="w-20 h-20" src="/media/home/images/pic2 (2).svg" alt=""/></div>
                             <div className="space-y-1">
                                 <p className="text-lg text-primary-600 font-medium"> حسین یاری  </p>
                                 <p className="text-sm text-primary-500 font-medium"> رشته ورزشی:  بوکس </p>
                             </div>
                         </div>
                         
                         <Image width={15} height={15} id="icon2" src="/media/home/images/Vector(7).svg" alt=""/>
                         
                     </div>
                  
 
                 <div id="panel2" className="px-6 hidden">
                     <h3 className= "pt-4 mx-4 text-primary-500 text-base">برنامه حضور</h3>
                     <hr className="mt-4"/>
                     <div className="mr-5  pt-6 border-r-2  border-dashed space-y-4 border-r-primary-100">
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500">همه روزه: <span className="px-1 text-primary-600 ">16 تا 21</span></p>
                             </div>
                         </div>
                     </div>
 
 
                     <h3 className= "pt-8 mx-4 text-primary-500 text-base"> توضیحات</h3>
                     <hr className="mt-4"/>
                     <p className="pb-6 text-xs text-primary-600 p-2 leading-6 over">
                         هادی چوپان زادهٔ ۴ مهر ۱۳۶۶ بدن‌ساز حرفه‌ای اهل ایران است. او از سال ۱۳۷۹ ورزش پرورش اندام را آغاز کرد و سال ۱۳۹۰ تا ۱۳۹۵ عضو ثابت تیم ملی بدن‌سازی ایران بوده است. او تنها ایرانی و دومین آسیایی پس از سمیر بنوت است که توانسته قهرمان مستر المپیا شود.
                     </p>
 
 
                     <h3 className= "pt-4 mx-4 text-primary-500 text-base"> هزینه خدمات</h3>
                     <hr className="mt-4"/>
                     <div className=" py-4 px-2">
                         <div className="flex items-center justify-between">
                             <p className="text-xs text-primary-600">بابت هر جلسه 2 ساعته </p>
                             <p className="text-xs text-primary-600"> 2,500,000 ریال</p>
                         </div>
     
     
                       
     
   
                     </div>
 
 
 
                 </div>
 
 
                  </div>
 
 
 
 
                  <div  className="mx-8 border rounded-2xl  ">
                  
                     <div id="accordion3" className="px-6 pt-6 pb-6 rounded-2xl bg-primary-100 bg-opacity-50 cursor-pointer flex items-center justify-between">
                         <div className="flex items-center  gap-1">
                             <div><Image width={30} height={30} className="w-20 h-20" src="/media/home/images/pic.svg" alt=""/></div>
                             <div className="space-y-1">
                                 <p className="text-lg text-primary-600 font-medium">امیر احمدی  </p>
                                 <p className="text-sm text-primary-500 font-medium"> رشته ورزشی: کراس فیت </p>
                             </div>
                         </div>
                         
                         <Image width={15} height={15} id="icon3" src="/media/home/images/Vector(7).svg" alt=""/>
                         
                     </div>
                  
 
                 <div id="panel3" className="px-6 hidden">
                     <h3 className= "pt-4 mx-4 text-primary-500 text-base">برنامه حضور</h3>
                     <hr className="mt-4"/>
                     <div className="mr-5  pt-6 border-r-2  border-dashed space-y-4 border-r-primary-100">
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500">شنبه: <span className="px-1 text-primary-600 ">16 تا 21</span></p>
                             </div>
                         </div>
     
     
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> یکشنبه:   <span className="px-1 text-primary-600 ">15 تا 16</span></p>
                             </div>
                         </div>
     
     
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> دوشنبه: <span className="px-1 text-primary-600 ">16 تا 20</span></p>
                             </div>
                         </div>
     
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> سه شنبه:  <span className="px-1 text-primary-600  ">20 تا 21</span></p>
                             </div>
                         </div>
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> چهار شنبه:<span className="px-1 text-primary-600">18 تا 21</span></p>
                             </div>
                         </div>
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> پنج شنبه:<span className="px-1 text-primary-600  ">17 تا 21</span></p>
                             </div>
                         </div>
                     </div>
 
 
                     <h3 className= "pt-8 mx-4 text-primary-500 text-base"> توضیحات</h3>
                     <hr className="mt-4"/>
                     <p className="pb-6 text-xs text-primary-600 p-2 leading-6 over">
                         هادی چوپان زادهٔ ۴ مهر ۱۳۶۶ بدن‌ساز حرفه‌ای اهل ایران است. او از سال ۱۳۷۹ ورزش پرورش اندام را آغاز کرد و سال ۱۳۹۰ تا ۱۳۹۵ عضو ثابت تیم ملی بدن‌سازی ایران بوده است. او تنها ایرانی و دومین آسیایی پس از سمیر بنوت است که توانسته قهرمان مستر المپیا شود.
                     </p>
 
 
                 </div>
 
 
                  </div>
 
 
 
 
 
                  <div  className="mx-8 border rounded-2xl  ">
                  
                     <div id="accordion4" className="px-6 pt-6 pb-6 rounded-2xl bg-primary-100 bg-opacity-50 cursor-pointer flex items-center justify-between">
                         <div className="flex items-center  gap-1">
                             <div><Image width={30} height={30} className="w-20 h-20" src="/media/home/images/pic.svg" alt=""/></div>
                             <div className="space-y-1">
                                 <p className="text-lg text-primary-600 font-medium">امیر احمدی  </p>
                                 <p className="text-sm text-primary-500 font-medium"> رشته ورزشی: کراس فیت </p>
                             </div>
                         </div>
                         
                         <Image width={15} height={15} id="icon4" src="/media/home/images/Vector(7).svg" alt=""/>
                         
                     </div>
                  
 
                 <div id="panel4" className="px-6 hidden">
                     <h3 className= "pt-4 mx-4 text-primary-500 text-base">برنامه حضور</h3>
                     <hr className="mt-4"/>
                     <div className="mr-5  pt-6 border-r-2  border-dashed space-y-4 border-r-primary-100">
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500">شنبه: <span className="px-1 text-primary-600 ">16 تا 21</span></p>
                             </div>
                         </div>
     
     
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> یکشنبه:   <span className="px-1 text-primary-600 ">15 تا 16</span></p>
                             </div>
                         </div>
     
     
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> دوشنبه: <span className="px-1 text-primary-600 ">16 تا 20</span></p>
                             </div>
                         </div>
     
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> سه شنبه:  <span className="px-1 text-primary-600  ">20 تا 21</span></p>
                             </div>
                         </div>
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> چهار شنبه:<span className="px-1 text-primary-600">18 تا 21</span></p>
                             </div>
                         </div>
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> پنج شنبه:<span className="px-1 text-primary-600  ">17 تا 21</span></p>
                             </div>
                         </div>
                     </div>
 
 
                     <h3 className= "pt-8 mx-4 text-primary-500 text-base"> توضیحات</h3>
                     <hr className="mt-4"/>
                     <p className="pb-6 text-xs text-primary-600 p-2 leading-6 over">
                         هادی چوپان زادهٔ ۴ مهر ۱۳۶۶ بدن‌ساز حرفه‌ای اهل ایران است. او از سال ۱۳۷۹ ورزش پرورش اندام را آغاز کرد و سال ۱۳۹۰ تا ۱۳۹۵ عضو ثابت تیم ملی بدن‌سازی ایران بوده است. او تنها ایرانی و دومین آسیایی پس از سمیر بنوت است که توانسته قهرمان مستر المپیا شود.
                     </p>
 
 
                 </div>
 
 
                  </div>
 
 
 
 
 
                  
                  <div  className="mx-8 border rounded-2xl  ">
                  
                     <div id="accordion5" className="px-6 pt-6 pb-6 rounded-2xl bg-primary-100 bg-opacity-50 cursor-pointer flex items-center justify-between">
                         <div className="flex items-center  gap-1">
                             <div><Image width={30} height={30} className="w-20 h-20" src="/media/home/images/pic.svg" alt=""/></div>
                             <div className="space-y-1">
                                 <p className="text-lg text-primary-600 font-medium">امیر احمدی  </p>
                                 <p className="text-sm text-primary-500 font-medium"> رشته ورزشی: کراس فیت </p>
                             </div>
                         </div>
                         
                         <Image width={15} height={15} id="icon5" src="/media/home/images/Vector(7).svg" alt=""/>
                         
                     </div>
                  
 
                 <div id="panel5" className="px-6 hidden">
                     <h3 className= "pt-4 mx-4 text-primary-500 text-base">برنامه حضور</h3>
                     <hr className="mt-4"/>
                     <div className="mr-5  pt-6 border-r-2  border-dashed space-y-4 border-r-primary-100">
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500">شنبه: <span className="px-1 text-primary-600 ">16 تا 21</span></p>
                             </div>
                         </div>
     
     
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> یکشنبه:   <span className="px-1 text-primary-600 ">15 تا 16</span></p>
                             </div>
                         </div>
     
     
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> دوشنبه: <span className="px-1 text-primary-600 ">16 تا 20</span></p>
                             </div>
                         </div>
     
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> سه شنبه:  <span className="px-1 text-primary-600  ">20 تا 21</span></p>
                             </div>
                         </div>
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> چهار شنبه:<span className="px-1 text-primary-600">18 تا 21</span></p>
                             </div>
                         </div>
                         <div className="flex items-center gap-2">
                             <div><Image width={15} height={5} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                             <div>
                                 <p className="text-sm text-primary-500"> پنج شنبه:<span className="px-1 text-primary-600  ">17 تا 21</span></p>
                             </div>
                         </div>
                     </div>
 
 
                     <h3 className= "pt-8 mx-4 text-primary-500 text-base"> توضیحات</h3>
                     <hr className="mt-4"/>
                     <p className="pb-6 text-xs text-primary-600 p-2 leading-6 over">
                         هادی چوپان زادهٔ ۴ مهر ۱۳۶۶ بدن‌ساز حرفه‌ای اهل ایران است. او از سال ۱۳۷۹ ورزش پرورش اندام را آغاز کرد و سال ۱۳۹۰ تا ۱۳۹۵ عضو ثابت تیم ملی بدن‌سازی ایران بوده است. او تنها ایرانی و دومین آسیایی پس از سمیر بنوت است که توانسته قهرمان مستر المپیا شود.
                     </p>
 
 
                 </div>
 
 
                  </div>

            </div>
    
         </section>
    </>
  );
}
