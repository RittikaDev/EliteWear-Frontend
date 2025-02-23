import { Button } from "@/components/ui/button";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import cupImg from "@/assets/cup-with-headphone.png";
import NMContainer from "@/components/ui/core/NMContainer";
import Banner from "@/assets/hero_section/banner.jpg";
import Slider1 from "@/assets/hero_section/slider1.jpg";
import Slider2 from "@/assets/hero_section/slider2.jpg";
import Slider3 from "@/assets/hero_section/slider3.jpg";
import Slider4 from "@/assets/hero_section/slider4.jpg";
import Slider5 from "@/assets/hero_section/slider5.jpg";
import Slider6 from "@/assets/hero_section/slider6.jpg";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const HeroSection = () => {
	const images = [Slider1, Slider2, Slider3, Slider4, Slider5, Slider6];

	return (
		<NMContainer>
			{/* <div
        className={`${styles.banner} border-2 border-white rounded-3xl  mt-10`}
      >
        <div className="grid grid-cols-2 items-center gap-4">
          <div className="pl-12">
            <h1 className="text-4xl font-bold leading-normal">
              Don&apos;t Miss Out on <br /> These Unbeatable Black <br /> Friday
              Deals!
            </h1>
            <p className="my-5">
              Save big this Black Friday with unbeatable deals on tech, home
              essentials, fashion, and more! Limited stock.
            </p>
            <Button size="lg" className="mr-5 rounded-full">
              Buy Now
            </Button>
            <Button
              size="lg"
              className="rounded-full bg-white text-black hover:bg-gray-100"
            >
              All Products
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <Image src={cupImg} alt="cup with headphone" />
          </div>
        </div>
      </div> */}

			<section className="flex h-screen w-full">
				{/* Left Section */}
				<div className="w-1/2 bg-white flex flex-col px-12 py-8 relative">
					{/* Background Text (Elite Wear) */}
					<div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-rose-200 text-9xl font-extrabold opacity-20 tracking-wide select-none">
						ELITE WEAR
					</div>

					{/* Category Section */}
					<div className="mt-60 relative z-10 text-base/8 right-0 text-right">
						<h3 className="text-lg text-gray-700 font-semibold">PARTY WEAR</h3>
						<ul className="mt-2 text-gray-500 space-y-2">
							<li className="hover:text-black cursor-pointer">DENIM</li>
							<li className="hover:text-black cursor-pointer">DRESS</li>
							<li className="hover:text-black cursor-pointer">CASUAL OUTFIT</li>
						</ul>
					</div>

					{/* Image Slider (Bottom Left) */}
					<div className="absolute bottom-32 -left-10 w-full">
						<Carousel className="w-full max-w-lg">
							<CarouselContent className="-ml-1 flex">
								{images.map((image, index) => (
									<CarouselItem
										key={index}
										className="pl-1 md:basis-1/2 lg:basis-1/4 flex justify-center"
									>
										<Image
											src={image}
											alt="Fashion Model"
											width={150}
											height={200}
											className="rounded-md object-cover h-[200px] w-auto"
										/>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
					</div>
				</div>

				{/* Right Section */}
				<div className="w-1/2 relative">
					<Image
						src={Banner}
						alt="Fashion Model"
						layout="fill"
						objectFit="cover"
						className="absolute inset-0"
					/>
					<div className="absolute bottom-10 text-white bg-black bg-opacity-50 p-6 rounded-sm">
						<h2 className="text-3xl font-light">
							Fashion is nothing but a <span className="font-bold">Choice</span>
							.
						</h2>
					</div>

					<div className="absolute bottom-10 right-10 flex flex-col items-center">
						<Separator
							orientation="vertical"
							className="h-96 border-l-2 border-white mb-2"
						/>
						<button className="bg-white p-4 rounded-full shadow-lg w-16 h-16 flex items-center justify-center">
							↓
						</button>
					</div>
				</div>
			</section>
		</NMContainer>
	);
};

export default HeroSection;
