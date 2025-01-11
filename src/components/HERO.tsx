
import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { FeaturedCarousel } from "./FeaturedCarousel"
import { GearCarousel1 } from "./GearCarousel1"
import { GearCarousel2 } from "./GearCarousel2"
import Navigation from "./Navigation"
export default function Hero(){
    return(
      <main>
        {/* top */}
        <section className="flex justify-center flex-col items-center bg-[#fafafa] m-4 ">
            <div className="flex justify-center flex-col items-center pb-4">
            <h3 className="text-xl text-black font-bold">Hello Nike App</h3>
         <p className="text-sm text-gray-600" >
         <span>Download the app to access everything Nike.</span>{" "}
           <Link href={"/"}> Get Your Great</Link>
        </p>
            </div>
            <Image src={"/Hero.png"} alt={"shoes"} width={1344} height={700}/>
            <div className="flex justify-center items-center flex-col p-10 text-center
            ">
                <p className="text-sm">First Look</p>
                <h2 className=" text-4xl font-bold uppercase">Nike Air Max Pulse</h2>
                <p  className="text-sm leading-5 w-full pt-3 pb-2 text-center
                lg:w-[60%]">
                Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                —designed to push you past your limits and help you go to the max.
           
                </p>
                <div className="flex justify-center items-center gap-3"><Button>Notify Me</Button>
                <Button>Shop Air Max</Button></div>
            </div>
        </section>
        {/* carousel */}
        <FeaturedCarousel/>
        {/* featured */}
        <section className="m-4">
      <div>
        <h1 className="font-semibold text-xl py-5">Featured</h1>
      </div>
      <div
        style={{
          backgroundImage: "url('/Featured.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
        }}
      ></div>
      <div className="flex justify-center items-center flex-col gap-3 p-10 text-center">
        <h2 className=" text-4xl font-bold uppercase"> STEP INTO WHAT FEELS GOOD</h2>
        <p className="text-sm leading-5 w-[60%] pt-3 pb-2 text-center">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <Button>Find Your Shoe</Button>
      </div>
    </section>
    {/* gearup carousel */}
    <section>
      <h1 className="font-semibold text-2xl mb-3 ml-2">Gear Up</h1>
      <div className="md:flex space-y-10 md:space-y-0 md:space-x-10">
        <GearCarousel1 />
        <GearCarousel2 />
      </div>
    </section>
    {/* don't miss */}
    <section className=" mx-3 my-20">
      <h1 className="font-semibold text-xl mb-3 ml-2">Don&apos;t Miss</h1>
      <Image src={"/DontMiss.png"} alt={"flight"} width={1344} height={700}/>
      <div className="flex flex-col justify-center items-center space-y-5 pt-10">
          <h1 className="font-semibold text-2xl md:text-4xl">FLIGHT ESSENTIALS</h1>
          <h2 className="text-[9px] md:text-sm">Your built-to-last,all-week wears—but with style only Jordan Brand can deliver.</h2>
          <Button className="rounded-full">Shop</Button>
      </div>
  </section>
  {/* essentials */}
  <section className="m-4" >
      <div>
        <h2 className="font-semibold text-xl py-5"> The Essentials</h2>
      </div>
      <div className="flex justify-evenly flex-wrap gap-5">
        {/* e1 */}
      <div className="relative">
      <Image width={300} height={300} alt="" src={"/essential/e1.png"} />
      <Button className="rounded-full text-black bg-white absolute left-5 bottom-5 hover:bg-white/80">Men&apos;s</Button>
      </div> {/* e2 */}
      <div className="relative">
      <Image width={300} height={300} alt="" src={"/essential/e2.png"} />
      <Button className="rounded-full text-black bg-white absolute left-5 bottom-5 hover:bg-white/80">Women&apos;s</Button>
      </div> {/* e3 */}
      <div className="relative">
      <Image width={300} height={300} alt="" src={"/essential/e3.png"} />
      <Button className="rounded-full text-black bg-white absolute left-5 bottom-5 hover:bg-white/80">Kid&apos;s</Button>
      </div>

      </div>
    </section>
    {/* Navigation */}
    <Navigation/>
      </main>
    )
    
}