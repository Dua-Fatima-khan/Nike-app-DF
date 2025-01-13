"use client"
import * as React from "react"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Link from "next/link"
import { airMax } from "@/data/detail"

export function FeaturedCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full p-10"
    >
      <CarouselContent>
        {airMax.map((item) => (
          
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <Link href={""}>
            <div className="p-1 shadow-md rounded-xl bg-slate-100">
                 <Image src={item.img} alt={"shoes"} width={400} height={440}/>
            </div>
                <div className=" flex justify-between mx-2 mt-2">
                  <h1 className="font-semibold text-sm">{item.title}</h1>
                    <h2 className="font-semibold text-sm">{item.price}</h2>
                </div>
                <h3 className="ml-2 text-sm">{item.title2}</h3>
                </Link>
          </CarouselItem>
        ))}
        
      </CarouselContent>
      <div className="absolute  bottom-[390px] right-14 md:bottom-[450px] md:right-14 lg:bottom-[400px] xl:bottom-[500px]">
      <CarouselPrevious />
      <CarouselNext />
      </div>
   
    </Carousel>
  )
}