import Image from 'next/Image';
/* eslint-disable-next-line */
export interface InfoProps {}

export default function Auth(props: InfoProps) {
  return (
    <>
     <div>
       <div>
        <div
        className=" bg-secondary-blue flex items-center  h-32 fixed right-0 left-0 -z-0">
          <Image width={500} height={500} className="bg-secondary-blue fixed right-0 left-0 z-0" src={'/media/form/tringle.svg'} alt=""/>
          <div className="flex gap-3 items-center justify-start ">
            <div className="w-6 h-10 pt-3 mr-5 z-10">
              <Image width={17} height={17}  src="/media/form/right.svg" alt=""/>
            </div>
            <div className="text-pure-w text-lg mr-5 z-10">فرم اولیه</div>
          </div>
       
        </div>
      </div>
       </div>
       <div className="bg-pure-w rounded-t-3xl absolute left-0 right-0 z-10 mt-24">
         <div className="w-full   flex flex-col gap-1 justify-center items-center mt-5">
           <div className="flex flex-col gap-1">
               <div>نام و نام خانوادگی:</div>
               <input className="bg-white border-2 border-border-color rounded-lg w-80 h-10" type=""/>
           </div>
           <div className="flex flex-col gap-3">
            <div>شماره موبایل:</div>
               <input className="bg-white border-2 border-border-color rounded-lg w-80 h-10" type=""/>
           </div>
           <div className="flex flex-col gap-3">
            <div>تاریخ تولد:</div>
               <input className="bg-white border-2 border-border-color rounded-lg w-80 h-10" type=""/>
           </div>
           <div className="flex flex-col gap-3">
            <div>جنسیت:</div>
               <input className="bg-white border-2 border-border-color rounded-lg w-80 h-10" type=""/>
           </div>
           <div className="flex flex-col gap-3">
            <div>پست الکترونیک:</div>
               <input className="bg-white border-2 border-border-color rounded-lg w-80 h-10" type=""/>
           </div>
           <div className="flex flex-col gap-3">
            <div>بیماری های خاص:</div>
               <input className="bg-white border-2 border-border-color rounded-lg w-80 h-10" type=""/>
           </div>
           <div className="flex flex-col gap-3">
            <div>داروهای خاص:</div>
               <input className="bg-white border-2 border-border-color rounded-lg w-80 h-10" type=""/>
           </div>
           <div className="flex justify-center items-center bg-secondary-blue text-pure-w rounded-3xl w-80 h-10 mt-8">ثبت اطلاعات</div>
         </div>
       </div>
    </>
  );
}
