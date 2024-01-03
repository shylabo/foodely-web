import Image from 'next/image';

import { Button } from '@/components/ui/button';

const FoodelyApp = () => {
  return (
    <section className="flex w-full bg-secondary">
      <div className="relative w-full h-[600px] hidden md:block">
        <Image src={'/image/foodely-app.jpeg'} alt={'office catering'} sizes="100%" fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-around w-full py-16 px-4 space-y-4">
        <h2 className="text-4xl lg:text-6xl font-extrabold">
          Easy order, <br /> Great moment
        </h2>
        <p className="text-xl">
          Elevate your workplace gatherings with our office catering app. Seamless, sophisticated, and savory – we bring
          culinary excellence to your meetings and events. Delight your team with a menu that sparks creativity and
          fuels success. Elevate your office experience with just a tap!
        </p>
        <div className="flex justify-end">
          <Button className="w-max font-bold">Get App</Button>
        </div>
      </div>
    </section>
  );
};

export default FoodelyApp;
