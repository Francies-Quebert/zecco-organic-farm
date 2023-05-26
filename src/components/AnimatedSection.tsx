import React from 'react';
import { useIntersectionObserver } from '@react-hooks-library/core';
import { StaticImage } from 'gatsby-plugin-image';
import { useRef } from 'react';
import Button from './Button';

const AnimatedSection = () => {
  const inner = useRef(null);

  const { inView } = useIntersectionObserver(
    inner,
    { threshold: 0.3 },
    () => {},
  );

  return (
    <section
      id="section-2"
      ref={inner}
      className="container flex mx-auto mt-24"
    >
      <div>
        <StaticImage
          src="../../static/images/vegetable.png"
          alt={'vegetable'}
          className={`${inView ? 'animate-wiggle ' : ''}`}
        />
      </div>
      <div className="flex flex-col justify-center pl-44">
        <div className="font-Gilroy-light text-4xl max-w-[320px]">
          We make it easy for you to cook delicious dinners
        </div>
        <div className="color-[##131505]  max-w-[405px] mt-[10px] font-Interstate font-thin opacity-75">
          Simply choose your recipes from a weekly menu and we’ll deliver
          freshly picked vegetables, pre-portioned ingredients and step-by-step
          recipes direct to your door ready for you to cook.
        </div>
        <Button name="SHOP NOW" containerClassname="mt-6" />
      </div>
    </section>
  );
};

export default AnimatedSection;
