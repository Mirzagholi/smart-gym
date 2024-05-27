import Image from 'next/Image';
/* eslint-disable-next-line */
export interface StoreProps {}

export default function Store(props: StoreProps) {
  return (
    
    <>
        
            <header className=" h-36 fixed right-0 left-0 -z-0">
                <Image width={700} height={700} className="bg-blue-dark fixed right-0 left-0 z-0" src={'/media/sell/tringle.svg'} alt=""/>
                <div className="flex items-center justify-between mx-8 py-4">
                   <div className="flex items-center gap-6 mt-12 mb-4">
                    <button className="z-10" ><Image width={10} height={10} src={"/media/sell/right.svg"} alt=""/></button>
                    <p className="text-white text-base  font-semibold z-10">فروشگاه</p>
                    </div>
                
                    <div className="flex items-center justify-center">
                    <Image  width={25} height={25}  className="mt-6 z-10" src="/media/sell/basket.svg" alt="" />
                    <Image width={18} height={18} className="absolute z-20 left-11 top-16" src="/media/sell/5.svg" alt="" />
                        </div>
                        </div>
            </header>
            <section className="flex flex-col items-center justify-center overflow-auto gap-16 bg-pure-w rounded-t-3xl absolute left-0 right-0 z-10 px-4 mt-28 ">
                <div className="w-full  h-12 flex justify-between items-center border rounded-2xl border-border-color  mt-6">
                    <div className="text-light-blue pr-5">جستجوی کالا</div>
                    <Image width={40} height={40} className="pl-5" src={"/media/sell/search.svg"} alt="" />
                </div>
                <div className="flex flex-col gap-24">
                    <div className="flex justify-center items-center gap-14">
                        <div className="flex flex-col justify-center items-center gap-2 w-20 h-6">
                            <Image width={110} height={110} src={"/media/sell/egg.svg"} alt="" />
                            <div className="text-sm">تخم مرغ پخته</div>
                        </div>
                        <div className=" flex flex-col justify-center items-center gap-2 w-20 h-6">
                            <Image width={110} height={110} src={"/media/sell/fries.svg"} alt="" />
                            <div className="text-sm">سیب زمینی</div>
                        </div>
                        <div className=" flex flex-col justify-center items-center gap-2 w-20 h-6">
                            <Image width={110} height={110} src={"/media/sell/coffee.svg"} alt="" />
                            <div className="text-sm">قهوه</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-14">
                        <div className="flex flex-col justify-center items-center gap-2 w-20 h-6">
                            <Image width={110} height={110} className="rounded-2xl" src={"/media/sell/whey.svg"} alt="" />
                            <div className="text-sm">مکمل WHEY</div>
                        </div>
                        <div className=" flex flex-col justify-center items-center gap-2 w-20 h-6">
                            <Image width={110} height={110} className="rounded-2xl" src={"/media/sell/water.svg"} alt="" />
                            <div className="text-sm">قمقمه</div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 w-20 h-6">
                            <Image width={110} height={110} className="rounded-2xl" src={"/media/sell/waterc.svg"} alt="" />
                            <div className="text-sm">قمقمه</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-14">
                        <div className="flex flex-col justify-center items-center gap-2 w-20 h-6">
                            <Image width={110} height={110} className="rounded-2xl" src={"/media/sell/towel.svg"} alt="" />
                            <div className="text-sm">حوله</div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 w-20 h-6">
                            <Image width={110} height={110} className="rounded-2xl" src={"/media/sell/peach.svg"} alt="" />
                            <div className="text-sm">هلو</div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 w-20 h-6">
                            <Image width={110} height={110} className="rounded-2xl" src={"/media/sell/berry.svg"} alt="" />
                            <div className="text-sm">توت فرنگی</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-14">
                        <div className="flex flex-col justify-center items-center gap-2 w-20 h-6">
                            <Image width={110} height={110} className="rounded-2xl" src={"/media/sell/avocado.svg"} alt="" />
                            <div className="text-sm">آواکادو</div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 w-20 h-6">
                            <Image width={110} height={110} className="rounded-2xl" src={"/media/sell/pineapple.svg"} alt="" />
                            <div className="text-sm">آناناس</div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 w-20 h-6">
                            <Image width={110} height={110} className="rounded-2xl" src={"/media/sell/pear.svg"} alt="" />
                            <div className="text-sm">گلابی</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-14">
                        <div className="flex flex-col justify-center items-center gap-2 w-20 h-6">
                            <Image width={110} height={110} className="rounded-2xl" src={"/media/sell/straw.svg"} alt="" />
                            <div className="text-sm">آواکادو</div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 w-20 h-6">
                            <Image width={110} height={110} className="rounded-2xl" src={"/media/sell/melon.svg"} alt=""/>
                            <div className="text-sm">آناناس</div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 w-20 h-6">
                            <Image width={110} height={110} className="rounded-2xl" src={"/media/sell/pome.svg"} alt=""/>
                            <div className="text-sm">گلابی</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-14 mb-44">
                        <div className="flex flex-col justify-center items-center gap-2 w-20 h-6">
                            <Image width={110} height={110} className="rounded-2xl" src={"/media/sell/avocado.svg"} alt=""/>
                            <div className="text-sm">آواکادو</div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 w-20 h-6">
                            <Image width={110} height={110} className="rounded-2xl" src={"/media/sell/pineapple.svg"} alt=""/>
                            <div className="text-sm">آناناس</div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 w-20 h-6">
                            <Image width={110} height={110} className="rounded-2xl" src={"/media/sell/pear.svg"} alt=""/>
                            <div className="text-sm">گلابی</div>
                        </div>
                    </div>
                </div>
            </section>
        
            </>  
    
    
  );
}
