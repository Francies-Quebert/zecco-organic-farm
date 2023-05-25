import { StaticImage } from 'gatsby-plugin-image';
import SectionTitle from './SectionTitle'
import { Swiper, SwiperSlide, useSwiper, SwiperClass } from "swiper/react";
import { graphql, useStaticQuery } from 'gatsby';
import RecipeCard, { IRecipeCard } from './RecipeCard';
import { useRef } from 'react';
import { forwardRef } from 'react';


function updateStyle(ref: any, swiper: SwiperClass) {
    if (ref.current) {
        if (swiper.activeIndex == 0) {
            ref.current.classList.add('opacity-30', 'pointer-events-none');
        }
        ref.current.classList.remove('opacity-30', 'pointer-events-none')
    }
}

const SwiperButtonNext = forwardRef(function SwiperButtonNext({ children }: any, ref) {
    const swiper = useSwiper();
    return <button onClick={() => {
        swiper.slideNext()
        updateStyle(ref, swiper)
    }}>{children}</button>;
});

const SwiperButtonPrev = forwardRef(function ({ children }: any, ref) {
    const swiper = useSwiper();
    const className = `${swiper.activeIndex == 0 ? 'opacity-30 pointer-events-none' : ''}`
    return <button className='mr-11' onClick={() => {
        swiper.slidePrev()
        updateStyle(ref, swiper)
    }}>
        <div ref={ref as any} className={className}>{children}</div>
    </button>;
})


function SectionCarousel() {
    const prevBtn = useRef<HTMLDivElement | null>(null)
    const data: {
        allContentfulLatestRecipes: {
            nodes: IRecipeCard[]
        }
    } = useStaticQuery(graphql`
      query {
        allContentfulLatestRecipes {
            nodes {
                name
                price
                image {
                gatsbyImageData(width: 110, height: 110,layout: CONSTRAINED)
                }
        }}
      }
    `);

    const { nodes } = data.allContentfulLatestRecipes

    return (
        <section id='carousel' className='max-w-[1070px] mx-auto relative mt-24 mb-32'>

            <div>
                <SectionTitle title='Latest recipes' className='absolute top-0 left-0' />
                <Swiper

                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                    wrapperClass='mt-[100px]'
                >
                    <div className='absolute right-0 top-[25px]'>
                        <SwiperButtonPrev ref={prevBtn}><StaticImage src='../../static/images/next.png' className='rotate-180' alt='prev' /></SwiperButtonPrev>
                        <SwiperButtonNext ref={prevBtn}><StaticImage src='../../static/images/next.png' alt='next' /></SwiperButtonNext>
                    </div>
                    {nodes.map(({ image, name, price }: IRecipeCard, index) => <SwiperSlide key={index}><RecipeCard image={image} name={name} price={price} /></SwiperSlide>)}
                </Swiper>
            </div>
        </section>
    )
}

export default SectionCarousel