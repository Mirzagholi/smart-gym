import Image from "next/image";
/* eslint-disable-next-line */
export interface ServicesProps {}

export default function Services(props: ServicesProps) {
  return (
   <>
    <div className="bg-primary-600 ">
        
        
        <header className="   mx-8 py-4" >
           <Image width={500} height={500} className="absolute  right-0" src="/media/home/images/bermuda-traingle(1) 1.svg" alt=""/>
            
                <div className="z-10 flex items-center gap-6 mt-12 mb-4">
                    <button ><Image width={18} height={18} src="/media/home/images/arrow.svg" alt=""/></button>
                    <p className="text-white text-base  font-semibold">  خدمات باشگاهی </p>
                </div>
                   
           
                
            
        </header>

        <div className="flex  gap-4 pr-6 py-8  bg-primary-100 z-20 relative rounded-t-4xl">
            <div className="text-center  min-w-24 h-20 border border-primary-600 rounded-2xl flex items-center justify-center">
                <p className="text-sm text-primary-600">ماساژ</p>
            </div>


            <div className="text-center bg-white scale-110 min-w-24 h-20  shadow-3xl rounded-2xl flex items-center justify-center">
                <p className="text-sm text-primary-600  ">مربی حضوری</p>
            </div>


            <div className="text-center  min-w-24 h-20 border border-primary-600 rounded-2xl flex items-center justify-center">
                <p className="text-sm text-primary-600">برنامه تمرین</p>
            </div>


            
            <div className="text-center  min-w-24 h-20 border border-primary-600 rounded-2xl flex items-center justify-center">
                <p className="text-sm text-primary-600">تمرین VIP</p>
            </div>
            
            <div className="text-center  min-w-24 h-20 border border-primary-600 rounded-2xl flex items-center justify-center">
                <p className="text-sm text-primary-600"> تست عملکرد ورزشی</p>
            </div>



            

            
        </div>


       

         <section className=" container relative z-10  bg-white bg- ">
            
           

           <div className="mx-8  mb-44">
                

                <div className=" border-r-2  border-dashed space-y-4 border-r-primary-100">
                    <div className="flex pt-6 items-center ">
                        <div><Image width={15} height={15} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                        <div className="border w-full p-2 pb-4 border-primary-100 rounded-2xl">
                            <div className="flex justify-between items-center p-2">
                                
                                   
                                    <p className="text-base font-bold text-primary-600">کراس فیت</p>
                                    <div >
                                   
                                        <Image width={15} height={15} src="/media/home/images/arrowb.svg" alt=""/>
                                    </div>

                            </div>

                            <hr className="p-2"/>

                           <div className="space-y-3 px-2">
                               
                               <div className="flex items-center gap-1">
                                   <div><Image width={15} height={15} src="/media/home/images/ph_user-bold.svg" alt=""/></div>
                                <p className="text-sm text-primary-500">نام مربی:<span className=" px-1 text-primary-600">ابراهیم اسدی</span></p>
                                
                            </div>
                            <div className="flex items-center gap-1">
                                <div><Image width={15} height={15} src="/media/home/images/mingcute_time-line.svg" alt=""/></div>
                                <p className="text-sm text-primary-500">روز و ساعت: <span className="  text-primary-600">همه روزه 9 - 12</span></p>
                           
                            </div> 

                           


                            <div className="flex items-center gap-1">
                                <div><Image width={15} height={15} src="/media/home/images/gg_list.svg" alt=""/></div>
                                <p className="text-sm text-primary-500">توضیحات:  <span className=" text-primary-600">برگزاری در سالن A</span></p>
                           
                            </div>

                            



                                <div className=" bg-secondary-400 flex items-center gap-1 justify-end rounded-4xl border border-primary-600">
                                    <span className="text-primary-600 text-sm">45,000,000 ریال</span>
                                    <button className="border border-primary-600 w-3/5 text-white bg-primary-600 rounded-4xl py-1">ثبت نام</button>
                                </div>
                           </div>

                           
                           
                        </div>
                    </div>



                    <div className="flex pt-6 items-center ">
                        <div><Image width={15} height={15} src="/media/home/images/Line 2(2).svg" alt=""/></div>
                        <div className="border w-full p-2 pb-4 border-primary-100 rounded-2xl">
                            <div className="flex justify-between items-center p-2">
                                
                                   
                                    <p className="text-base font-bold text-primary-600">بوکس</p>
                                    <div >
                                   
                                        <Image width={15} height={15} src="/media/home/images/arrowb.svg" alt=""/>
                                    </div>

                            </div>

                            <hr className="p-2"/>

                           <div className="space-y-3 px-2">

                            
                            <div className="flex items-center gap-1">
                                <div><Image width={15} height={15} src="/media/home/images/ph_user-bold.svg" alt=""/></div>
                                <p className="text-sm text-primary-500">نام مربی:<span className=" px-1 text-primary-600">ابراهیم اسدی</span></p>
                           
                            </div>


                            <div className="flex  gap-2 ">
                                <div className="flex  gap-1">
                                    <div><Image width={15} height={15} src="/media/home/images/mingcute_time-line.svg" alt=""/></div>
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
                                <div><Image width={15} height={15} src="/media/home/images/gg_list.svg" alt=""/></div>
                                <p className="text-sm text-primary-500">توضیحات:  <span className=" text-primary-600">برگزاری در سالن A</span></p>
                           
                            </div>

                            <div className=" bg-secondary-400 flex items-center gap-1 justify-end rounded-4xl border border-primary-600">
                                <span className="text-primary-600 text-sm">36,000,000 ریال </span>
                                <button className="border border-primary-600 w-3/5 text-white bg-primary-600 rounded-4xl py-1 ">ثبت نام</button>
                            </div>

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
