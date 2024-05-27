import Image from "next/image";
/* eslint-disable-next-line */
export interface TransactionsProps {}

export default function Transactions(props: TransactionsProps) {
  return (
    <>
     <div className="bg-primary-600  ">
        
        
        <header className=" flex items-center justify-between mx-8 py-4" >
           <Image width={30} height={30} className="absolute  right-0" src="/media/home/images/bermuda-traingle(1) 1.svg" alt=""/>
            
                <div className="z-10 flex items-center gap-6 mt-12 mb-4">
                    <button ><Image width={20} height={20} src="/media/home/images/arrow.svg" alt=""/></button>
                    <p className="text-white text-base  font-semibold">تاریخچه تراکنش ها </p>
                </div>
               
           
            
        </header>
        <div className="bg-primary-800">    
           <div className="flex bg-primary-800 container relative z-20  ">

          <div className="flex justify-between items-center border border-dashed border-white rounded-lg m-8 p-5 w-full">  
            <div className="flex items-center gap-1">
                <Image width={30} height={30} src="/media/home/images/Layer_x0020_1.svg" alt=""/>
                <p className="text-sm text-white">موجودی: <span className="text-secondary-400">50,000,000 </span>ریال</p>
            </div>
            <div><Image width={30} height={30} src="/media/home/images/plus(1).svg" alt=""/></div>
         </div>
           </div>

         <section className=" container relative z-10  bg-white  rounded-t-4xl ">
            
           

            <div className="mx-8 pt-6 border-r-2 border-dashed  border-r-primary-100 space-y-4">
               
               
                <div className="flex  items-center ">
                  <div><Image width={18} height={5} src="/media/home/images/Line 2.svg" alt=""/></div>
                  <div className="w-full border px-6 py-4 rounded-2xl  space-y-3">
                    <div className="flex justify-between">
                        <p className="text-primary-600 text-sm">موز </p>
                        <p className="text-primary-500 text-xs"> 50,000 ریال </p>
                    </div>
                    <hr/>
                    <div className="flex justify-between ">
                        <div className="flex items-center gap-2">
                            <Image width={19} height={17} src="/media/home/images/🦆 icon _calendar_.svg" alt=""/>
                            <p className="text-primary-500 text-xs">تاریخ: 1403/02/28</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image width={16} height={16} src="/media/home/images/🦆 icon _clock_.svg" alt=""/>
                            <p className="text-primary-500 text-xs">ساعت: 12:45</p>
                        </div>
                    </div>
                  </div>
               </div>


               <div className="flex  items-center ">
                  <div><Image width={18} height={5} src="/media/home/images/Line 2.svg" alt=""/></div>
                  <div className="w-full border px-6 py-4 rounded-2xl  space-y-3">
                    <div className="flex justify-between">
                        <p className="text-primary-600 text-sm">ثبت نام بدنسازی 12 جلسه </p>
                        <p className="text-primary-500 text-xs">  28,000,000 ریال </p>
                    </div>
                    <hr/>
                    <div className="flex justify-between ">
                        <div className="flex items-center gap-2">
                            <Image width={19} height={17} src="/media/home/images/🦆 icon _calendar_.svg" alt=""/>
                            <p className="text-primary-500 text-xs">تاریخ: 1403/02/12</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image width={16} height={16} src="/media/home/images/🦆 icon _clock_.svg" alt=""/>
                            <p className="text-primary-500 text-xs">ساعت: 10:20</p>
                        </div>
                    </div>
                  </div>
               </div>


               <div className="flex  items-center ">
                  <div><Image width={18} height={5} src="/media/home/images/Line 2.svg" alt=""/></div>
                  <div className="w-full border px-6 py-4 rounded-2xl  space-y-3">
                    <div className="flex justify-between">
                        <p className="text-primary-600 text-sm">آب معدنی </p>
                        <p className="text-primary-500 text-xs"> 40,000 ریال </p>
                    </div>
                    <hr/>
                    <div className="flex justify-between ">
                        <div className="flex items-center gap-2">
                            <Image width={19} height={17} src="/media/home/images/🦆 icon _calendar_.svg" alt=""/>
                            <p className="text-primary-500 text-xs">تاریخ: 1403/02/12</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image width={16} height={16} src="/media/home/images/🦆 icon _clock_.svg" alt=""/>
                            <p className="text-primary-500 text-xs">ساعت: 10:40</p>
                        </div>
                    </div>
                  </div>
               </div>



               <div className="flex  items-center ">
                <div><Image width={18} height={5} src="/media/home/images/Line 2.svg" alt=""/></div>
                <div className="w-full border px-6 py-4 rounded-2xl  space-y-3">
                  <div className="flex justify-between">
                      <p className="text-primary-600 text-sm"> شارژ کیف پول </p>
                      <p className="text-primary-500 text-xs"> 40,000,000 ریال</p>
                  </div>
            
                  <hr className="w-full h-1"/>
                  <div className="flex justify-between ">
                      <div className="flex items-center gap-2">
                          <Image width={19} height={17} src="/media/home/images/🦆 icon _calendar_.svg" alt=""/>
                          <p className="text-primary-500 text-xs">تاریخ: 1403/02/10</p>
                      </div>
                      <div className="flex items-center gap-2">
                          <Image width={16} height={16} src="/media/home/images/🦆 icon _clock_.svg" alt=""/>
                          <p className="text-primary-500 text-xs">ساعت: 11:00</p>
                      </div>
                  </div>
                </div>
              </div>




              
            </div>







            
        </section>
       </div>

      
        
   </div>
    </>
  );
}
