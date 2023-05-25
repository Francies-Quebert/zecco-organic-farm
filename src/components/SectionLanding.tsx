import { StaticImage } from 'gatsby-plugin-image';
import Button from './Button';

function SectionLanding() {
  return (
    <section id="section-1">
      <div className=" flex items-center lg:h-screen">
        {/* text  */}
        <div className="w-[40%] h-full relative z-10">
          <div className="absolute w-full h-full left-[20%] flex flex-col justify-center">
            <h1 className="font-Gilroy text-7xl">You deserve better</h1>
            <h1 className="font-Gilroy-light text-5xl w-[410px] pt-3">
              Consider this a taste intervention.
            </h1>
            {/* button */}
            <Button
              name="LEARN MORE"
              containerClassname="mt-6"
              btnClassname="font-Interstate font-semibold"
            />
          </div>
        </div>
        {/* image  */}
        <div className="min-w-[60%] max-w-[60%] w-[60%] bg-[#F1F7EA] relative min-h-screen max-h-[1075px] z-0">
          <StaticImage
            src="../../static/images/dish.png"
            alt="Dish"
            className="relative bg-transparent w-[90%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[0%]"
            quality={60}
          />
        </div>
      </div>
    </section>
  );
}

export default SectionLanding;
