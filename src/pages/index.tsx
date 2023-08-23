import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import  header  from '@/pictures/header.png'
import { Button } from '@/components/ui/button'
import { Cart, Carta, Facebook, Linkedin, Twitter } from '@/components/icons'
import Featured1 from '@/pictures/Featured1.png'
import Featured2 from '@/pictures/Featured2.png'
import Featured3 from '@/pictures/Featured3.png'
import Featured4 from '@/pictures/Featured4.png'
import event1 from '@/pictures/event1.png'
import event2 from '@/pictures/event2.png'
import event3 from '@/pictures/event3.png'
import hover1 from '@/pictures/hover1.png'
import hover2 from '@/pictures/hover2.png'
import hover3 from '@/pictures/hover3.png'
import hod1 from '@/pictures/hod1.png'
import { Input } from '@/components/ui/input'
import logo from '@/pictures/Logo.png'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='flex'>
      <div className='w-[50%] pl-[10%] pt-[8%]'>
        <p className='text-blue-700 text-lg font-extrabold pl-8 pb-5'>
          Sale 70%
        </p>
        <h4 className='text-6xl w-[80%] font-extrabold font-sans'>
        An Industrial Take on Streetwear
        </h4>
        <p className='text-lg font-semibold text-gray-600 w-[60%] pt-8'>
        Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
        </p>
        <Button className=' p-8 mt-6 ml-0 bg-black'><div className='text-white text-lg pr-2'>
          <Carta/>
          </div>
          <div className='text-white text-lg font-bold pl-2 border-gray-700'>Start <br/> Shopping
            </div></Button>
        <div className='flex mt-12'>
          <Image className='mr-3' alt='f1' src={Featured1}/>
          <Image className='mr-3' alt='f1' src={Featured2}/>
          <Image className='mr-3' alt='f1' src={Featured3}/>
          <Image className='mr-3' alt='f1' src={Featured4}/>

          </div>    

      </div>
      <div className='w-[50%] pt-[1%]'>
        <Image src={header} width={650} height={650} alt='larki1'/>


      </div>


    </div>
    <div className='mt-20 center flex-row justify-center text-center'>
      <p className='text-md text-blue-700 font-semibold pt-4 py-2'>PROMOTIONS</p>
      <h1 className='text-black font-bold text-4xl mb-4'>
        Our Promotion Events
      </h1>

    </div>
    <div className='flex'>
      <div className='w-[50%] pl-[120px]'>
        <div className='bg-gray-300 min-h-[201px] w-[85%] mt-10 flex -pb-14 mb-4'>
          <div className='w-[50%] pt-6 pl-6'>
            <p className='text-4xl font-bold'>GET UP TO 60%</p>
            <p className='text-2xl font-semibold'>For the summer season</p>

          </div>

          <div className='w-[50%] '>
            <Image className='pt-5 ' alt="hlo" src={event1} width={600} height={600}/>

          </div>

        </div>
        <div className='bg-black min-h-[201px] w-[85%] pt-6 pb-6 text-center'>
          <p className='text-white text-4xl font-bold py-3'>GET 30% Off</p>
          <p className='text-lg text-white font-semibold mt-2'>USE PROMO CODE</p>
          <p className='text-white px-4 py-3 mx-auto rounded-xl mt-2 bg-gray-700 w-[60%] text-center'>DINEWEEKENDSALE</p>

        </div>

      </div>
      <div className='w-[50%] flex pt-10'>
        <div className='bg-yellow-200 min-h-[300px] max-h-[420px] w-[40%] mx-4 '>
          <p className='text-black pt-7 pl-4'>Flex Sweatshirt</p>
          <div className='pl-4 flex'>
            <p className='text-black line-through pr-2'>$100.00</p>
            <p className='text-black font-bold pr-2'>$75.00</p>
          </div>
          <Image className='pt-0' alt="event2" src={event2}/>
        </div>
        <div className='bg-gray-400 min-h-[350px] max-h-[422px] w-[40%] '>
          <p className='text-black pt-6 pl-4'>Flex Push Button Bomber</p>
          <div className='pl-4 flex'>
            <p className='text-black line-through pr-2'>$225.00</p>
            <p className='text-black font-bold pr-2'>$190.00</p>
          </div>
          <Image className='pb-0' alt="event2" src={event3}/>

        </div>

      </div>
    </div>

    <div className='mt-20 center flex-row justify-center text-center'>
      <p className='text-md text-blue-700 font-semibold pt-4 py-2'>PRODUCTS</p>
      <h1 className='text-black font-bold text-4xl mb-4'>
      Check What We Have

      </h1>
      </div>

      <div className='flex'>
        <div className='w-[30%] flex-row'>
          <Image className='ml-[200px]' alt="hover1" src={hover1} width={300} height={300}/>
          <p className='ml-[200px] text-black mt-2 text-xl font-bold w-[120%]'>Brushed Raglan Sweatshirt</p>
          <p className='ml-[200px] text-black text-xl font-bold'>$195</p>

        </div>
        <div className='w-[30%] flex-row'>
          <Image className='ml-[100px]' width={300} height={300} alt="hover1" src={hover2}/>
          <p className='ml-[100px] text-black mt-2 text-xl font-bold'>Cameryn Sash Tie Dress</p>
          <p className='ml-[100px] text-black text-xl font-bold'>$545</p>
        </div>
        <div className='w-[30%] flex-row'> 
        <Image className='ml-[20px]' alt="hover1" src={hover3} width={300} height={300}/>
        <p className='text-black mt-2 text-xl font-bold ml-[20px]'>Felx Sweetshirt</p>
          <p className='ml-[20px] text-black text-xl font-bold'>$175</p>
        </div>
      </div>

      <div className='mt-[180px] mb-10'>
        <p className='text-black text-6xl font-bold ml-[50%] w-[40%] font-sans'>Unique and Authentic Vintage Designer Jewellery</p>
      </div>


      <div className='pl-20 flex'>

        <div className='w-[20%] flex-row'>
          <div>
            <p className='text-black text-2xl font-bold mt-2 mb-4'
            >Using Good Quality Materials</p>
            <p className='text-gray-800 font-semibold text-xl w-[80%] mb-12'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.

</p>

          </div>
          <div>
          <div className='flex-row'>
            <p className='text-black text-2xl font-bold mt-2 mb-4'>Modern Fashion Design
</p>
            <p className='text-gray-800 font-semibold text-xl w-[80%] mb-12'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.

</p>

          </div>
          



          </div>
        </div>
        <div className='w-[20%] flex-row mx-10'>
          <div>
            <p className='text-black text-2xl font-bold mt-2 mb-4'
            >100% Handmade Products
            </p>
            <p className='text-gray-800 font-semibold text-xl w-[80%] mb-12'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.

</p>

          </div>
          <div>
          <div className='flex-row'>
            <p className='text-black text-2xl font-bold mt-2 mb-4'>Discount for Bulk Orders
</p>
            <p className='text-gray-800 font-semibold text-xl w-[80%] mb-12'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.

</p>

          </div>
          



          </div>
        </div>
        <div className='w-[22%] m-0  '>

      <Image alt='hod1' src={hod1} width={600}/>
        </div>
        <div className='w-[20%] ml-12'>

        <p className='text-gray-800 text-xl w-[100%] mb-12 mt-4'>
        This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
          
          </p>
          <Button className='px-8 py-2'>
          <div className='text-white text-lg mt-8 bg-black font-bold pl-6 py-1 px-6 border-gray-700'>See All<br/>Products
            </div></Button>

        </div>
        




      </div>


      <div className='mt-[170px] mb-[170px] text-center'>
        <p className='mt-4 text-black text-4xl font-bold'>Subscribe Our Newsletter</p>
        <p className='my-4 !mb-6 text-gray-700 text-xl'>Get the latest information and promo offers directly</p>
        <div className='flex'>
        <Input className='w-[25%] ml-[34%] py-4' placeholder='Input email address' />
        <Button className='bg-black text-white bold border-gray-400 mx-2'>Get Started</Button>
        </div>


      </div>

      <div className='flex ml-20'>
        <div className='w-[40%]'>
          <Image className='my-8' alt='abc' src={logo}/>
          <p className='w-[60%]  text-xl font-semibold text-gray-700 mb-10'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
          <div className='flex text-2xl my-4'>
          <div className='mx-3'>  <Facebook/></div>
            <div className='mx-3'><Linkedin/></div>
            <div className='mx-3'><Twitter/></div>
          </div>
        </div>
        <div className='flex-row w-[20%]'>
          <p className='mt-8 text-black text-2xl font-bold'>Company</p>
          <ul >
            <li className='text-xl text-gray-700 my-1 font-semibold'>About</li>
            <li className='text-xl text-gray-700 my-1 font-semibold'>Terms of Use</li>
            <li className='text-xl text-gray-700 my-1 font-semibold'>Privacy Policy</li>
            <li className='text-xl text-gray-700 my-1 font-semibold'>How it Works</li>
            <li className='text-xl text-gray-700 my-1 font-semibold'>Contact Us</li>
          </ul>
        </div>
        <div className='w-[20%]'>
          <p className='mt-8 text-black text-2xl font-bold'>
            Support
          </p>
          <ul>
            <li className='text-xl text-gray-700 my-1 font-semibold'>Support Center</li>
            <li className='text-xl text-gray-700 my-1 font-semibold'>24h Service</li>
            <li className='text-xl text-gray-700 my-1 font-semibold'>Quick Chat</li>
          </ul>
        </div>
        <div className='w-[20%]'>
          <p className='mt-8 text-black text-2xl font-bold'>Contact</p>
          <ul>
            <li className='text-xl text-gray-700 my-1 font-semibold'>Whatsapp</li>
            <li className='text-xl text-gray-700 my-1 font-semibold'>Support 24h</li>
          </ul>
        </div>
      </div>
      <div className='mt-[180px]'/>
      <hr className='w-full mx-auto p-[1px] my-4 bg-black'></hr>

      <div className='flex justify-between mx-[70px] py-4'>
        <p className='text-xl text-gray-700 my-1 font-semibold'>
        Copyright © 2022 Dine Market
        </p>
        <p className='text-xl text-gray-700 my-1 font-semibold'>
        Design by. <p className='font-bold text-black'>Weird Design Studio</p>


        </p>
        <p className='text-xl text-gray-700 my-1 font-semibold'>
        Code by. <p className='font-bold text-black'>shabrina12 on github</p>
        </p>

      </div>

    </>
  )
}
