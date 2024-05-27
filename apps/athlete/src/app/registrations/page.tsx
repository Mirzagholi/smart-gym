import Image from "next/image"
/* eslint-disable-next-line */
export interface RegistrationsProps {}

export default function Registrations(props: RegistrationsProps) {
  return (
    <>
     <div className="bg-primary-600 ">
        
        
        <header className="   mx-8 py-4" >
           <Image width={500} height={500} className="absolute  right-0" src="/media/home/images/bermuda-traingle(1) 1.svg" alt=""/>
            
                <div className="z-10 flex items-center gap-6 mt-12 mb-4">
                    <button ><Image width={18} height={18} src="/media/home/images/arrow.svg" alt=""/></button>
                    <p className="text-white text-base  font-semibold"> ثبت نام </p>
                </div>
                   
           
                
            
        </header>

        <div className="flex  gap-4 pr-6 py-8  bg-secondary-400 z-20 relative rounded-t-4xl">
            <div className="text-center space-y-2 min-w-24 h-20 border border-primary-600 rounded-2xl py-4">
                <p className="text-sm text-primary-600">بدنسازی</p>
                <p className="text-xs text-primary-500">تایم شناوری</p>
            </div>


            <div className="text-center bg-white scale-110 min-w-24 h-20 space-y-2  shadow-3xl rounded-2xl py-4">
                <p className="text-base text-primary-600 font-sans font-semibold">TRX</p>
                <p className="text-xs text-primary-500"> بدون شناوری</p>
            </div>


            <div className="text-center space-y-2 min-w-24 h-20 border border-primary-600 rounded-2xl py-4">
                <p className="text-sm text-primary-600">پیلاتس</p>
                <p className="text-xs text-primary-500"> شناوری</p>
            </div>


            
            <div className="text-center space-y-2 min-w-24 h-20 border border-primary-600 rounded-2xl py-4">
                <p className="text-sm text-primary-600">یوگا</p>
                <p className="text-xs text-primary-500"> شناوری</p>
            </div>



            

            
        </div>


        <div className="mx-8 flex justify-between my-4">
            <div>
                <p className="text-white text-base">رشته ورزشی: <span className="px-2 text-secondary-400 font-sans font-semibold">TRX</span></p>
            </div>
            <div>
                <p className="text-white text-base"> شناوری:<span className="px-2 text-secondary-400">ندارد</span></p>
            </div>
            
        </div>

         <section className=" container relative z-10  bg-white bg- ">
            
           

           <div className="mx-8  mb-44">
                

                <div className=" border-r-2  border-dashed space-y-4 border-r-primary-100">
                    <div className="flex pt-6 items-center ">
                        <div><Image width={15} height={15} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                        <div className="border w-full p-2 pb-4 border-primary-100 rounded-2xl">
                            <div className="flex justify-between items-center p-2">
                                
                                   
                                    <p className="text-base text-primary-600">12 جلسه در ماه</p>
                                    <div className="flex items-center gap-2 ">
                                        <p className="text-primary-500 text-sm ">اعتبار دوره:  <span className="text-primary-600">30 روزه</span></p>
                                   
                                        <Image width={15} height={15} src="/media/home/images/arrowb.svg" alt=""/>
                                    </div>

                            </div>

                            <hr className="p-2"/>

                           <div className="space-y-3 px-2">
                            <div className="flex items-center gap-1">
                                <div><Image width={15} height={15} src="/media/home/images/mingcute_time-line.svg" alt=""/></div>
                                <p className="text-sm text-primary-500">روز و ساعت: <span className="  text-primary-600">همه روزه 9 - 12</span></p>
                           
                            </div> 

                            <div className="flex items-center gap-1">
                                <div><Image width={15} height={15} src="/media/home/images/ph_user-bold.svg" alt=""/></div>
                                <p className="text-sm text-primary-500">نام مربی:<span className=" px-1 text-primary-600">ابراهیم اسدی</span></p>
                           
                            </div>

                            <div className="flex items-center gap-1">
                                <div><Image width={15} height={15} src="/media/home/images/ph_users-bold2.svg" alt=""/></div>
                                <p className="text-sm text-primary-500">ظرفیت: <span className="  text-primary-600">6 نفر </span></p>
                           
                            </div>


                            <div className="flex items-center gap-1">
                                <div><Image width={15} height={15} src="/media/home/images/gg_list.svg" alt=""/></div>
                                <p className="text-sm text-primary-500">توضیحات:  <span className=" text-primary-600">برگزاری در سالن A</span></p>
                           
                            </div>

                            <div className="flex items-center gap-1">
                                <div><Image width={15} height={15} src="/media/home/images/solar_tag-price-outline.svg" alt=""/></div>
                                <p className="text-sm text-primary-500">مبلغ:<span className="px-1 text-primary-600">48,000,000 ریال</span></p>
                           
                            </div>



                            <button className="w-full p-3 text-white bg-primary-600 rounded-4xl ">ثبت نام</button>

                           </div>

                           
                           
                        </div>
                    </div>



                    <div className="flex pt-6 items-center ">
                        <div><Image width={15} height={15} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                        <div className="border w-full p-2 pb-4 border-primary-100 rounded-2xl">
                            <div className="flex justify-between items-center p-2">
                                
                                   
                                    <p className="text-base text-primary-600">12 جلسه در ماه</p>
                                    <div className="flex items-center gap-2 ">
                                        <p className="text-primary-500 text-sm ">اعتبار دوره:  <span className="text-primary-600">30 روزه</span></p>
                                   
                                        <Image width={15} height={15} src="/media/home/images/arrowb.svg" alt=""/>
                                    </div>

                            </div>

                            <hr className="p-2"/>

                           <div className="space-y-3 px-2">
                            <div className="flex  gap-2 ">
                                <div className="flex  gap-1">
                                    <div><Image width={20} height={20} src="/media/home/images/mingcute_time-line.svg" alt=""/></div>
                                    <p className="text-sm text-primary-500">روز و ساعت: 
                                    
                                    </p>
                                </div>
                           
                                <div className="w-40 border-r-4 border-primary-100 px-2 space-y-1">
                                    <p className="    text-primary-600"> شنبه 17 - 20</p>
                                    <hr />
                                    <p className="    text-primary-600">یکشنبه 12 - 15</p>
                                    <hr/>
                                    <p className="   text-primary-600">دوشنبه 13 - 18</p>
                                    <hr className="h-1 "/>
                                    <p className="  text-primary-600">سه شنبه 16 - 20</p>
                                </div>
                            </div> 


                            <div className="flex items-center gap-1">
                                <div><Image width={15} height={15} src="/media/home/images/ph_user-bold.svg" alt=""/></div>
                                <p className="text-sm text-primary-500">نام مربی:<span className=" px-1 text-primary-600">ابراهیم اسدی</span></p>
                           
                            </div>

                            <div className="flex items-center gap-1">
                                <div><Image width={15} height={15} src="/media/home/images/ph_users-bold2.svg" alt=""/></div>
                                <p className="text-sm text-primary-500">ظرفیت: <span className="  text-primary-600">6 نفر </span></p>
                           
                            </div>


                            <div className="flex items-center gap-1">
                                <div><Image width={15} height={15} src="/media/home/images/gg_list.svg" alt=""/></div>
                                <p className="text-sm text-primary-500">توضیحات:  <span className=" text-primary-600">برگزاری در سالن A</span></p>
                           
                            </div>

                            <div className="flex items-center gap-1">
                                <div><Image width={15} height={15} src="/media/home/images/solar_tag-price-outline.svg" alt=""/></div>
                                <p className="text-sm text-primary-500">مبلغ:<span className="px-1 text-primary-600">48,000,000 ریال</span></p>
                           
                            </div>



                            <button className="w-full p-3 text-white bg-primary-600 rounded-4xl ">ثبت نام</button>

                           </div>

                           
                           
                        </div>
                    </div>




                    <div className="flex pt-6 items-center ">
                        <div><Image width={15} height={15} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                        <div className="border w-full p-2 pb-4 border-primary-100 rounded-2xl">
                            <div className="flex justify-between items-center p-2">
                                
                                   
                                    <p className="text-base text-primary-600">12 جلسه در ماه</p>
                                    <div className="flex items-center gap-2 ">
                                        <p className="text-primary-500 text-sm ">اعتبار دوره:  <span className="text-primary-600">30 روزه</span></p>
                                   
                                        <Image width={15} height={15} src="/media/home/images/arrowb.svg" alt=""/>
                                    </div>

                            </div>

                            <hr className="p-2"/>

                           <div className="space-y-3 px-2">
                            <div className="flex items-center gap-1">
                                <div><Image width={15} height={15} src="/media/home/images/mingcute_time-line.svg" alt=""/></div>
                                <p className="text-sm text-primary-500">روز و ساعت: <span className="  text-primary-600">همه روزه 9 - 12</span></p>
                           
                            </div> 

                            <div className="flex items-center gap-1">
                                <div><Image width={15} height={15} src="/media/home/images/ph_user-bold.svg" alt=""/></div>
                                <p className="text-sm text-primary-500">نام مربی:<span className=" px-1 text-primary-600">ابراهیم اسدی</span></p>
                           
                            </div>

                            <div className="flex items-center gap-1">
                                <div><Image width={15} height={15} src="/media/home/images/ph_users-bold2.svg" alt=""/></div>
                                <p className="text-sm text-primary-500">ظرفیت: <span className="  text-primary-600">6 نفر </span></p>
                           
                            </div>


                            <div className="flex items-center gap-1">
                                <div><Image width={15} height={15} src="/media/home/images/gg_list.svg" alt=""/></div>
                                <p className="text-sm text-primary-500">توضیحات:  <span className=" text-primary-600">برگزاری در سالن A</span></p>
                           
                            </div>

                            <div className="flex items-center gap-1">
                                <div><Image width={15} height={15} src="/media/home/images/solar_tag-price-outline.svg" alt=""/></div>
                                <p className="text-sm text-primary-500">مبلغ:<span className="px-1 text-primary-600">48,000,000 ریال</span></p>
                           
                            </div>

                            <button className="w-full p-3 text-white bg-primary-600 rounded-4xl ">ثبت نام</button>

                           </div> 
                        </div>
                    </div>   
                </div>
           </div>
   
        </section>

        
        
   </div>
    </>
  );
}
