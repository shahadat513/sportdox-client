import Lottie from "lottie-react";
import SharedTitle from "./SharedTitle";

import shopping from '../../public/shopping.json'
import Delivery from '../../public/Delivery.json'
import Quality from '../../public/Quality.json'
import Rivision from '../../public/Rivision.json'
import Version from '../../public/Version.json'


const OurServices = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto">
                <SharedTitle
                    title={"Our Services"}
                ></SharedTitle>
                <div className='mb-20 '>
            <div className='flex flex-wrap gap-10 justify-center '>
                <div className='bg-blue-100 rounded-xl '>
                <Lottie animationData={shopping} className='w-52 '/>
                    <h1 className='text-lg text-center pb-4 mt-2 font-medium'>Best Shopping</h1>
                    
                </div>
                <div className='bg-blue-100 rounded-xl '>
                    <Lottie animationData={Quality} className='w-52 '/>
                    <h1 className='text-lg text-center pb-4 mt-2 font-medium'>Best Quality</h1>
                </div>
                <div className='bg-blue-100 rounded-xl '>
                    <Lottie animationData={Rivision} className='w-52 '/>
                    <h1 className='text-lg text-center pt-12 pb-4 mt-2 font-medium'>Delivery</h1>
                </div>
                <div className='bg-blue-100 rounded-xl '>
                    <Lottie animationData={Delivery} className='w-52 '/>
                    <h1 className='text-lg text-center pb-4 mt-2 font-medium'>Return Policy</h1>
                </div>
                <div className='bg-blue-100 rounded-xl '>
                    <Lottie animationData={Version} className='w-52 '/>
                    <h1 className='text-lg mt-2 text-center pb-4 font-medium'>Cash On Delivery</h1>
                </div>
           </div>
        </div>
            </div>
        </div>
    );
}

export default OurServices;
