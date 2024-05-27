import Image from "next/image"
/* eslint-disable-next-line */
export interface InformationProps {}

export default function Information(props: InformationProps) {
  return (
    <>
     <div className="bg-primary-600 ">
        
        
        <header className=" flex items-center justify-between mx-8 py-4" >
           <Image width={500} height={500} className="absolute  right-0" src="/media/home/images/bermuda-traingle(1) 1.svg" alt="" />
            
                <div className="z-10 flex items-center gap-6 mt-12 mb-4">
                    <button ><Image width={18} height={18} src="/media/home/images/arrow.svg" alt="" /></button>
                    <p className="text-white text-base  font-semibold">اطلاعات فردی </p>
                </div>
                  
           
            
        </header>

         <section className=" container relative z-10  bg-white bg- rounded-t-4xl">
            
           

           <div className="mx-8 pt-8">
                <div className="flex items-center  gap-1">
                    <div><Image width={80} height={80} src="/media/home/images/picture.svg" alt="" /></div>
                    <div className="space-y-1">
                        <p className="text-lg text-primary-600 font-medium">صدرا رهبر </p>
                        <p className="text-sm text-primary-500 font-medium">کد کاربری: 10254</p>
                    </div>
                </div>

                <hr className="mt-4"/>
                <div className="mr-5  pt-6 border-r-2  border-dashed space-y-4 border-r-primary-100">
                    <div className="flex items-center gap-2">
                        <div><Image width={15} height={2} src="/media/home/images/Line 2(2).svg" alt="" /></div>
                        <div>
                            <p className="text-sm text-primary-500">تاریخ تولد: <span className="text-primary-600 ">1364/06/28</span></p>
                        </div>
                    </div>


                    <div className="flex items-center gap-2">
                        <div><Image width={15} height={2} src="/media/home/images/Line 2(2).svg" alt="" /></div>
                        <div>
                            <p className="text-sm text-primary-500"> جنسیت: <span className="text-primary-600 ">مرد</span></p>
                        </div>
                    </div>


                    <div className="flex items-center gap-2">
                        <div><Image width={15} height={2} src="/media/home/images/Line 2(2).svg" alt="" /></div>
                        <div>
                            <p className="text-sm text-primary-500"> شماره موبایل: <span className="text-primary-600 ">09339087808</span></p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div><Image width={15} height={2} src="/media/home/images/Line 2(2).svg" alt="" /></div>
                        <div>
                            <p className="text-sm text-primary-500"> پست الکترونیک: <span className="text-primary-600 font-sans  ">sadrarahbar@gmail.com</span></p>
                        </div>
                    </div>
                </div>
           </div>







            
        </section>

        
   </div>
    </>
  );
}
