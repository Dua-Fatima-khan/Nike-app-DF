import Image from 'next/image';
import Link from 'next/link';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Button } from '@/components/ui/button';
import { IoIosThumbsDown, IoIosThumbsUp } from "react-icons/io";

export default function Help(){
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl font-medium leading-none text-center text-neutral-900">
        GET HELP
      </div>
      <div className="flex gap-5 justify-between px-4 py-5 mt-6 max-w-full text-base leading-relaxed text-center rounded-lg border border-solid border-neutral-500 text-neutral-500 w-[458px]">
        <input type='text' placeholder='What can we help you with?' className='w-full focus:outline-none'/>
        <FaMagnifyingGlass />
      </div>
      <div className="self-stretch p-7 mt-5 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start mt-1.5 w-full max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl font-medium leading-none text-neutral-900 max-md:max-w-full">
                WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
              </div>
              <div className="self-stretch mt-12 mr-12 text-base leading-loose text-neutral-900 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
              </div>
              <div className="flex flex-col items-start self-stretch px-8 mt-8 text-base leading-loose text-neutral-900 max-md:px-5 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro
                </div>
                <div className="self-stretch mt-3 text-base leading-loose max-md:max-w-full">
                  If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.
                </div>
                <div className="mt-3">Apple Pay</div>
              </div>
              <div className="self-stretch mt-2 text-base font-medium leading-7 text-neutral-900 max-md:mr-2.5 max-md:max-w-full">
                Nike Members
                <span> can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member,</span> join us <span>today.</span>
              </div>
              <div className="flex gap-4 mt-5 max-w-full text-base font-medium text-center text-white ">
              <Link href={"/joinus"}>  <Button className='rounded-full'>JOIN US</Button></Link>
              <Link href={"/"}>  <Button  className='rounded-full'>   SHOP NIKE</Button></Link>
              </div>
              <div className="mt-7 text-xl font-medium leading-tight text-neutral-900">
                FAQs
              </div>
              <div className="mt-5 text-base font-bold leading-7 text-neutral-900">
                Does my card need international purchases enabled?
              </div>
              <div className="self-stretch mt-2 mr-16 text-base leading-7 text-neutral-900 max-md:mr-2.5 max-md:max-w-full">
                Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
              </div>
              <div className="mt-8 text-base leading-loose text-neutral-900 max-md:max-w-full">
                Please note, some banks may charge <span className="font-medium underline">a small transaction fee</span> for international orders.
              </div>
              <div className="mt-9 text-base font-bold leading-7 text-neutral-900 max-md:max-w-full">
                Can I pay for my order with multiple methods?
                </div>
                <div className="mt-2 text-base leading-loose text-neutral-900 max-md:max-w-full">No, payment for Nike orders can&apos;t be split between multiple payment methods.</div>
            
              <div className="pr-6 mt-7 text-base font-bold leading-7 text-neutral-900 max-md:pr-5">
                What payment method is accepted for SNKRS orders?
              </div>
              <div className="mt-2 text-base leading-loose text-neutral-900 max-md:max-w-full">
                You can use any accepted credit card to pay for your SNKRS order.
              </div>
              <div className="mt-7 text-base font-bold leading-7 text-neutral-900">
                Why don&apos;t I see Apple Pay as an option?
              </div>
              <div className="self-stretch mt-2 text-base leading-7 text-neutral-900 max-md:max-w-full">
                To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account, and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.
              </div>
              <div className="mt-9 text-base leading-loose text-neutral-900">
                Was this answer helpful?
              </div>
              <div className="flex mt-1.5">
                <button tabIndex={0} role="button">
                <IoIosThumbsUp size={40}/>

                </button>
                <button tabIndex={0} role="button">
                <IoIosThumbsDown size={40}/>

                </button>
              </div>
              <div className="mt-4 text-base font-medium text-neutral-500">RELATED</div>
              <div className="flex flex-col mt-8 ml-8 text-base font-medium leading-loose text-neutral-900 max-md:ml-2.5">
                <Link href="#" passHref>
                WHAT ARE NIKE&apos;S DELIVERY OPTIONS?
                </Link>
                <Link href="#" passHref>
                 HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center pt-1.5 pb-40 pl-12 w-full text-base text-center bg-white bg-opacity-0 text-neutral-900 max-md:pb-24 max-md:mt-10">
              <div className="ml-6 text-3xl font-medium leading-none">CONTACT US</div>
              <Image
                loading="lazy"
                src="/help/contact.png"
                alt="phone icon"
                className="object-contain mt-10 ml-6 w-16 aspect-square"
                width={64}
                height={64}
              />
              <div className="flex flex-col items-center self-start px-px mt-7 w-full">
                <div className="font-medium">000 800 919 0566</div>
                <div className="max-w-full leading-7 w-[263px]">
                  Products & Orders: 24 hours a day, 7 days a week
                  <br />
                  Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
                </div>
              </div>
              <Image
                loading="lazy"
                src="/help/message.png"
                alt="email icon"
                className="object-contain mt-14 ml-6 w-16 aspect-square max-md:mt-10"
                width={64}
                height={64}
              />
              <div className="flex flex-col items-center px-0.5 mt-7 ml-6 text-base">
                <div className="font-medium leading-relaxed">24 hours a day</div>
                <div className="leading-loose">info@nike.com</div>
              </div>
              <Image
                loading="lazy"
                src="/help/email.png"
                alt="email icon"
                className="object-contain mt-14 ml-6 w-16 aspect-square max-md:mt-10"
                width={64}
                height={64}
              />
              <div className="flex flex-col items-center px-0.5 mt-7 ml-6 text-base">
                <div className="font-medium leading-relaxed">We&apos;ll reply within</div>
                <div className="leading-loose">five business hours</div>
              </div>
           
                <Link href={"/locate"}>
                <Image
                loading="lazy"
                src="/help/location.png"
                alt="email icon"
                className="object-contain mt-14 ml-6 w-16 aspect-square max-md:mt-10"
                width={64}
                height={64}
              /></Link>
              <div className="flex flex-col items-center px-0.5 mt-7 ml-6 text-base">
                <div className="font-medium leading-relaxed">STORE LOCATOR</div>
                <div className="leading-loose">Find Nike retail stores near you</div>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
