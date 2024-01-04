import Image from 'next/image';
import { MdLocationOn } from 'react-icons/md';

import { Input } from '@/components/ui/input';

const Hero = () => {
  return (
    <section className="relative">
      <div className="relative w-full h-48 md:h-64 lg:h-96 brightness-50">
        <Image src={'/image/office-food-2.jpeg'} alt={'hero image'} sizes="100%" fill className="object-cover" />
      </div>
      <h1 className="absolute top-6 left-8 text-white font-extrabold text-2xl md:text-4xl lg:text-7xl">
        Elevate Your Meetings,
        <br />
        Catering Excellence Delivered!
      </h1>
      <div className="absolute bottom-6 left-8 w-2/3 md:w-1/3">
        <div className="relative">
          <MdLocationOn size={24} color="gray" className="absolute top-3 left-3" />
          <Input className="pl-10 h-12" placeholder="Enter delivery address" disabled />
        </div>
      </div>
    </section>
  );
};

export default Hero;
