import Image from 'next/image';
import { MdLocationOn } from 'react-icons/md';

import Container from '@/components/layout/Container';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CountrySelector from '@/components/CountrySelector';
import { availableCountries } from '@/constants';

export default function Home() {
  return (
    <Container>
      {/* Hero */}
      <section className="relative">
        <div className="relative w-full h-48 md:h-64 lg:h-96 brightness-50">
          <Image src={'/image/office-food-2.jpeg'} alt={'hero image'} sizes="100%" fill className="object-cover" />
        </div>
        <h1 className="absolute top-6 left-4 text-white font-extrabold text-2xl md:text-4xl lg:text-7xl">
          Elevate Your Meetings,
          <br />
          Catering Excellence Delivered!
        </h1>
        <div className="absolute bottom-6 left-4 w-2/3 md:w-1/3">
          <div className="relative">
            <MdLocationOn size={24} color="gray" className="absolute top-3 left-3" />
            <Input className="pl-10 h-12" placeholder="Enter delivery address" />
          </div>
        </div>
      </section>

      {/* Select Country */}
      <section className="bg-secondary p-8 space-y-8">
        <h2 className="text-2xl lg:text-4xl font-extrabold">Explore Foodely countries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
          {availableCountries.map((country) => (
            <CountrySelector key={country.value} name={country.label} flag={country.flag} />
          ))}
        </div>
      </section>

      {/* About Foodely */}
      <section className="flex w-full">
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

      {/* Appeal Service */}
      <section className="flex flex-col items-center justify-around py-16 bg-secondary gap-4 p-4">
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

      {/* Foodely App */}
      <section className="flex w-full">
        <div className="relative w-full h-[600px] hidden md:block">
          <Image src={'/image/foodely-app.jpeg'} alt={'office catering'} sizes="100%" fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-around w-full py-16 px-4 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-extrabold">
            Easy order, <br /> Great moment
          </h2>
          <p className="text-xl">
            Elevate your workplace gatherings with our office catering app. Seamless, sophisticated, and savory – we
            bring culinary excellence to your meetings and events. Delight your team with a menu that sparks creativity
            and fuels success. Elevate your office experience with just a tap!
          </p>
          <div className="flex justify-end">
            <Button className="w-max font-bold">Get App</Button>
          </div>
        </div>
      </section>

      <section className="h-20"></section>
    </Container>
  );
}
