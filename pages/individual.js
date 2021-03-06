import React from 'react';
import Testimonial from "/src/components/Testimonial";
import AppStore from "/src/components/AppStore";

const Individuals = (props) => {
  return (
    <>
          <div className="bg-green-01  text-center">
          
          <div className="container flex flex-col justify-center items-center text-center space-y-7 relative min-h-[80vh]">
            
            <h1 className="text-5xl font-black">Never run out of clean clothes</h1>
            <p className="font-semibold text-xl">Choose free time over stress. Select a laundry plan that suits <br /> your lifestyle and budget.</p>

            <AppStore type="lg" />

           <img src="/assets/svgs/Path-1.svg" alt="path 1" className="absolute sm:bottom-[100px] bottom-[30px] left-[5%]" />
           <img src="/assets/svgs/times.svg" alt="path times" className="absolute sm:top-[100px] sm:right-[200px] top-10 right-10" />
           <img src="/assets/svgs/Path-4.svg" alt="path 4" className="absolute sm:top-[70px] sm:left-[100px] top-10 left-10" />
           <img src="/assets/svgs/Path-5.svg" alt="path 5" className="absolute top-[60px] left-[90px]" />
           <img src="/assets/svgs/Path-6.svg" alt="path 6" className="absolute top-[50px] left-2/4" />

          </div>

      </div>

    <section className="py-12 relative">
        <div className="container grid lg:grid-cols-2 gap-12 relative">
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-10 order-1">
               <h1 className="text-4xl font-black">Instant Pickup</h1>

               <p className="font-medium text-xl">In a rush? Get your laundry picked up in under 30 minutes. No delays or disruption to your day.</p>

               <div>
                <button className="btn">Get the App</button>
              </div>
            </div>

            <div className="flex justify-center relative order-2">
              <img src="/assets/images/mockup/UpComingorders.png" className="z-40 relative" alt='svg' />

              <img src="/assets/svgs/ellipse-1.svg" className="absolute top-[20%] z-10" alt='svg' />

            </div>


            <div className="rounded-full bg-yellow-900 absolute w-32 h-32 bottom-5 -left-20 opacity-30"></div>
            <div className="rounded-full bg-green-800 absolute w-10 h-10 -bottom-12  opacity-20"></div>
        </div>

         <div className="rounded flex bg-white absolute z-50 bottom-1/4 right-0 shadow-sm w-3/4 sm:w-2/5 lg:w-3/12 space-x-5 p-3">
                <img src="/assets/svgs/motorcycle.svg" alt="path 6" className="" />
                <aside className="space-y-2">
                   <h1 className="font-bold">Your rider is on his way</h1>
                   <div className="text-sm">Dear customer, your rider  will arrive soon please be on stand-by.</div>
                </aside>
          </div>
    </section>



     <section className="py-12 relative">
        <div className="container grid lg:grid-cols-2 gap-12 relative">

            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-10 order-1 lg:order-2">
               <h1 className="text-4xl font-black">Laundry subscriptions</h1>

               <p className="font-medium text-xl">Save up to 20% when you subscribe one of <br />our laundry plans. Pick a plan, set your<br /> preferences and pay monthly.</p>

               <div>
                <button className="btn">Get the App</button>
              </div>
            </div>

            <div className="flex justify-center relative order-2 lg:order-1">
              <img src="/assets/images/mockup/PhoneMockup.png" alt='svg' className="z-40 relative" />

              <img src="/assets/svgs/ellipse-2.svg" alt='svg' className="absolute top-[20%] z-10" />
            </div>


            <div className="rounded-full bg-yellow-900 absolute w-32 h-32 bottom-5 -right-20 opacity-30"></div>
            <div className="rounded-full bg-green-800 absolute w-10 h-10 -bottom-12  -right-20  opacity-20"></div>
        </div>

         <div className="rounded flex bg-white absolute z-50 bottom-1/4 left-0 shadow-sm w-3/4 sm:w-2/5 lg:w-3/12 space-x-5 p-3">
                <img src="/assets/svgs/checked.svg" alt="Checked alt" className="" />
                <aside className="space-y-2">
                   <h1 className="font-bold">Payment successful</h1>
                   <div className="text-sm">Your subscription to Basic plan is successful.</div>
                </aside>
              </div>
    </section>


      <section className="py-12 relative">
        <div className="container grid lg:grid-cols-2 gap-12 relative">
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-10 order-1 ">
               <h1 className="text-4xl font-black">Real time tracking</h1>

               <p className="font-medium text-xl">
               Track your laundry order progress from pickup, through cleaning to delivery, get real-time updates and notifications.<br />
               Be sure of when to expect your delivery.</p>
               <div>
                <button className="btn">Get the App</button>
              </div>
            </div>

            <div className="flex justify-center relative lg:order-2 order-2">
              <img src="/assets/images/mockup/realTimeTrackin.png" alt='svg' className="z-40 relative" />

              <img src="/assets/svgs/ellipse-3.svg" alt='svg' className="absolute top-[20%] z-10" />
            </div>


            <div className="rounded-full bg-yellow-900 absolute w-32 h-32 bottom-5 -left-20 opacity-30"></div>
            <div className="rounded-full bg-green-800 absolute w-10 h-10 -bottom-12  -left-20  opacity-20"></div>
        </div>

         <div className="rounded flex bg-white absolute z-50 bottom-1/4 right-0 shadow-sm w-3/4 sm:w-2/5 lg:w-3/12 space-x-5 p-3">
                <img src="/assets/svgs/checked.svg" alt="Checked alt" className="" />
                <aside className="space-y-2">
                   <h1 className="font-bold">Laundry Pick up</h1>
                   <div className="text-sm">Your laundry pick up has been scheduled successfully.</div>
                </aside>
              </div>
    </section>



     <section className="py-12 relative">
        <div className="container grid lg:grid-cols-2 gap-12 relative">
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-10 order-1 lg:order-2">
               <h1 className="text-4xl font-black">In-app chat</h1>

               <p className="font-medium text-xl">Send request, additional preferences or share feedback to our support team in-app. Receive instant personalised responses and support every time. 
              </p>
               <div>
                <button className="btn">Get the App</button>
              </div>
            </div>

            <div className="flex justify-center relative order-2 lg:order-1">
              <img src="/assets/images/mockup/Inappchat.png" alt='svg' className="z-40 relative" />

              <img src="/assets/svgs/ellipse-4.svg" alt='svg' className="absolute top-[20%] z-10" />
            </div>


           {/* <div className="rounded-full bg-yellow-900 absolute w-32 h-32 bottom-5 -left-20 opacity-30"></div>
            <div className="rounded-full bg-green-800 absolute w-10 h-10 -bottom-12  -left-20  opacity-20"></div>*/}
        </div>

         <div className="rounded flex bg-white absolute z-50 bottom-1/4 left-0 shadow-sm w-3/4 sm:w-2/5 lg:w-3/12 space-x-5 p-3">
                <img src="/assets/svgs/message.svg" alt="message alt" className="" />
                <aside className="space-y-2">
                   <h1 className="font-bold">How can i help?</h1>
                   <div className="text-sm">Our support team are always on stand-by to get your needs sorted out. </div>
                </aside>
          </div>
    </section>



    <section className="py-12 relative">
        <div className="container grid lg:grid-cols-2 gap-12 relative">
            <div className="space-y-5 lg:order-1 order-2 text-center lg:text-left">

              <div className="flex flex-col items-center sm:flex-row sm:justify-center lg:justify-center lg:flex-col lg:items-start lg:space-y-5">

                <button className="rounded-full px-5 py-2 text-green-200 bg-green-300 sm:order-2 lg:order-1">Coming Soon</button>
                <h1 className="text-4xl font-black sm:order-1 lg:order-2 mr-3">Community</h1>

              </div>

               <p className="font-medium text-xl">
              Create or join team, add your friends and neighbours to pay less on every laundry order. More teammates, more discount. 
              </p> 
              </div>

          
            <div className="rounded-full bg-yellow-900 absolute w-32 h-32 -top-10 -right-20 opacity-30"></div>
            <div className="rounded-full bg-green-800 absolute w-10 h-10 top-28  right-0  opacity-20"></div>
        </div>
    </section>




    <Testimonial />



     <section className="pt-12 relative">

     <img src="/assets/images/background.png" alt='svg' className="absolute bottom-0 h-fit" />

        <div className="container grid lg:grid-cols-2 gap-12 relative">
            <div className="flex flex-col justify-center  text-center lg:text-left items-center lg:items-start order-1 space-y-10">
               <div className="space-y-3">
                <h1 className="text-5xl font-black text-green-900">Download the app</h1>
                <p className="text-xl">Get a free laundry bag on your first in-app order.</p>
               </div>


               
                <div className="space-y-3">
                  <h2 className="text-yellow-900">Get the App</h2>

                  <AppStore type="lg" />
                </div>
            </div>

            <div className="flex justify-center items-end relative order-2 ">
              <img src="/assets/images/mockup/PhoneMockup2.png" alt='svg' className="z-40 relative top-62" />

            </div>

        </div>


    </section>





     <div className="bg-green-900 py-12">

    </div>
    </>
  )
}

export default Individuals;
