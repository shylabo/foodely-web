import Image from 'next/image';

import { Button } from '@/components/ui/button';

const AboutFoodely = () => {
  return (
    <>
      <section className="flex w-full bg-secondary">
        <div className="flex flex-col justify-around w-full py-16 px-4 space-y-4">
          <h2 className="text-2xl font-extrabold">What is Foodely?</h2>
          <h3 className="text-4xl lg:text-6xl font-extrabold">Delivered.</h3>
          <p className="text-xl">
            Elevate your office experience with our exquisite catering service. From power lunches to team celebrations,
            we serve up a delightful blend of flavors, freshness, and efficiency, ensuring every bite fuels success and
            fosters connections in the workplace."
          </p>
          <Button className="w-max font-bold">Order now</Button>
        </div>
        <div className="relative w-full h-[600px] hidden md:block">
          <Image src={'/image/office-1.jpeg'} alt={'office catering'} sizes="100%" fill className="object-cover" />
        </div>
      </section>

      <section className="flex flex-col items-center justify-around py-16 gap-4 p-4">
        <h2 className="text-2xl lg:text-4xl font-bold text-center">
          Catering Convenience, Right at Your Office Doorstep
        </h2>
        <p className="w-full lg:w-1/2 text-xl leading-relaxed text-center">
          Transform your office gatherings into memorable experiences with our catering application. Indulge in a fusion
          of flavors that inspire creativity and foster connection. Elevate your team's spirit with a feast that goes
          beyond just meals – it's a recipe for success delivered right to your office. Upgrade your office catering
          experience today!
        </p>
      </section>
    </>
  );
};

export default AboutFoodely;
