
import { IGatsbyImageData, getImage, GatsbyImage, ImageDataLike, StaticImage } from 'gatsby-plugin-image';

export interface IRecipeCard {
    image: ImageDataLike
    name: string
    price: string
}
function RecipeCard({ image, name, price }: IRecipeCard) {


    const recipeImage = getImage(image);

    return (
        <div className='flex card-recipe'>
            <div className='w-[110px] h-[110px] relative'>
                <GatsbyImage image={recipeImage as IGatsbyImageData} alt={name} className='rounded-full absolute w-full h-full -right-6 -top-4' />
            </div>
            <div className='z-30 mb-1 shadow-md w-[180px] h-[90px] pl-7 pr-5 font-Raleway text-sm flex flex-col justify-between py-2 '>
                <div>{name}</div>
                <div className='text-primary font-bold'>{price}</div>
                <StaticImage className='absolute right-[53px] bottom-[29px]' src='../../static/images/cart.svg' alt='cart' width={12} height={12}/>
            </div>
        </div>
    )
}

export default RecipeCard