import classes from './AvailableItems.module.css';
import Card from '../UI/Card';
import DifferentItems from './DifferentItems/DifferentItems.js';
import i1 from "./ProductImages/cotton_shirt.webp";
import i2 from "./ProductImages/jeans.jpg";
import i3 from "./ProductImages/top.webp";
import i4 from "./ProductImages/kurti.webp";
import i5 from "./ProductImages/Tshirt.webp";
import i6 from "./ProductImages/collar_tshirt.avif";
import i7 from "./ProductImages/BB_cream.avif";
import i8 from "./ProductImages/eye_shadow.jpg";
import i9 from "./ProductImages/body_scrub.jpg";
import i10 from "./ProductImages/nivea_men.jpg";
import i11 from "./ProductImages/men_Facewash.webp";
import i12 from "./ProductImages/lip_crayon.webp";
import i13 from "./ProductImages/foundation.jpg";
import i14 from "./ProductImages/3_idol.jpg";
import i15 from "./ProductImages/resin_clock.webp";
import i16 from "./ProductImages/neon_lights.jpg";
import i17 from "./ProductImages/wall_shelves.jpg";
import i18 from "./ProductImages/vase.jpg";
const DUMMY_ITEMS = [
    {
        id: 'm1',
        imgUrl:`${i1}`,
        name: `Men's Shirt`,
        description: 'Tan Skin Color Pure Cotton',
        price: 22.99,
    },
    {
        id: 'm2',
        imgUrl:`${i2}`,
        name: `Women's Loose Fit Jeans`,
        description: 'Comfortable & Trendy!',
        price: 16.5,
    },
    {
        id: 'm3',
        imgUrl:`${i3}`,
        name: 'Crop Top',
        description: 'Fitted & Wrapped!',
        price: 11.5,
    },
    {
        id: 'm4',
        imgUrl:`${i4}`,

        name: 'Pure Cotton Kurti',
        description: ' Green & Pink Floral Printed Sequinned',
        price: 9.5,
    },
    {
        id: 'm5',
        imgUrl:`${i5}`,
        name: 'Oversized Tee',
        description: 'Dropped Shoulder',
        price: 7.3,
    },
    {
        id: 'm6',
        imgUrl:`${i6}`,
        name: 'Collar Tshirt',
        description: 'Polo T-Shirt with Logo Embroidery',
        price: 15.3,
    },
    {
        id: 'm7',
        imgUrl:`${i7}`,
        name: 'BB Cream',
        description: 'Maybelline New York Fit Me Fresh Tint With SPF 50 & Vitamin C',
        price: 15.3,
    },
    {
        id: 'm8',
        imgUrl:`${i8}`,
        name: 'Eye Shadow',
        description: 'L.A. Colors 24 Color Velvet Eyeshadow Palette',
        price: 15.3,
    },
    {
        id: 'm9',
        imgUrl:`${i9}`,
        name: 'Coffee Body Scrub',
        description: 'Coconut(100g) Natural & Vegan',
        price: 15.3,
    },
    {
        id: 'm10',
        imgUrl:`${i10}`,
        name: 'Nivea Men Creme',
        description: 'Dark Spot Reduction,Non Greasy Moisturizer,Cream with UV Protect',
        price: 15.3,
    },
    
    {
        id: 'm11',
        imgUrl:`${i11}`,
        name: 'Garnier Men Face Wash',
        description: 'Turbo Bright Anti-Pollution Double Action - Cleans Skin Deeply',
        price: 15.3,
    },
    {
        id: 'm12',
        imgUrl:`${i12}`,
        name: 'Ultime Pro Matte Lip Crayon',
        description: 'COLOR — Peach Me (08)',
        price: 15.3,
    },
    {
        id: 'm13',
        imgUrl:`${i13}`,
        name: '24h Dripper Invisible Waterproof Liquid Foundation',
        description: 'Included Blender,Highlighter,HD Face Cream',
        price: 26,
    },
    {
        id: 'm14',
        imgUrl:`${i14}`,
        name: 'Corsica Mystic',
        description: ' Set of 3 Metal Doll Figurines ',
        price: 26,
    },
    {
        id: 'm15',
        imgUrl:`${i15}`,
        name: 'Ticking Thunder',
        description: 'Resin Handmade,Clock Regular Size',
        price: 26,
    },
    {
        id: 'm16',
        imgUrl:`${i16}`,
        name: 'Custom Neon Sing Light',
        description: 'Led Sing For Home Decor,Wedding, Birthday, Anniversary (1 Alphabet 8x8 inch)',
        price: 26,
    },
    {
        id: 'm17',
        imgUrl:`${i17}`,
        name: 'Wall Shelves',
        description: 'Wooden Shelf Home Decor Items Rack (Set of 6) Size- Standard',
        price: 26,
    },
    {
        id: 'm18',
        imgUrl:`${i18}`,
        name: 'Porcelain Vase and T-Light Holder',
        description: 'Fantasy Collection with round shape',
        price: 26,
    },
];

const AvailableItems = () => {
    // function importAll(r) {
    //     let images = {};
    //     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    //     return images;
    //   }
    // const images = importAll(require.context('./ProductImages', false, /\.(png|jpe?g|svg)$/));


    const ItemList = DUMMY_ITEMS.map((item) =>
        <div className={classes.sameline}>
            <DifferentItems
                id={item.id}
                key={item.id}
                 name={item.name} 
                 description={item.description} 
                 price={item.price} 
                 image={item.imgUrl}
            />

        </div>


    );

    return (
        <section className={classes.items}>
            <Card>
                <ul >{ItemList}</ul>
            </Card>

        </section>
    )
}
export default AvailableItems;