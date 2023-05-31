import classes from './AvailableItems.module.css';
import Card from '../UI/Card';
import React, { useEffect, useState } from 'react'
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
import filteredlabel from '../Items/Items';
import ChangeHandler from '../Items/Items';
import * as axios from 'axios';

const DUMMY_ITEMS = [
    {
        id: 'm1',
        imgUrl: `${i1}`,
        name: `Men's Shirt`,
        description: 'Tan Skin Color Pure Cotton',
        price: 22.99,
        label: "Clothing"
    },
    {
        id: 'm2',
        imgUrl: `${i2}`,
        name: `Women's Loose Fit Jeans`,
        description: 'Comfortable & Trendy!',
        price: 16.5,
        label: "Clothing"
    },
    {
        id: 'm3',
        imgUrl: `${i3}`,
        name: 'Crop Top',
        description: 'Fitted & Wrapped!',
        price: 11.5,
        label: "Clothing"
    },
    {
        id: 'm4',
        imgUrl: `${i4}`,
        name: 'Pure Cotton Kurti',
        description: ' Green & Pink Floral Printed Sequinned',
        price: 9.5,
        label: "Clothing"
    },
    {
        id: 'm5',
        imgUrl: `${i5}`,
        name: 'Oversized Tee',
        description: 'Dropped Shoulder',
        price: 7.3,
        label: "Clothing"
    },
    {
        id: 'm6',
        imgUrl: `${i6}`,
        name: 'Collar Tshirt',
        description: 'Polo T-Shirt with Logo Embroidery',
        price: 15.3,
        label: "Clothing"
    },
    {
        id: 'm7',
        imgUrl: `${i7}`,
        name: 'BB Cream',
        description: 'Maybelline New York Fit Me Fresh Tint With SPF 50 & Vitamin C',
        price: 20.0,
        label: "Cosmetics and Body care"
    },
    {
        id: 'm8',
        imgUrl: `${i8}`,
        name: 'Eye Shadow',
        description: 'L.A. Colors 24 Color Velvet Eyeshadow Palette',
        price: 13.3,
        label: "Cosmetics and Body care"
    },
    {
        id: 'm9',
        imgUrl: `${i9}`,
        name: 'Coffee Body Scrub',
        description: 'Coconut(100g) Natural & Vegan',
        price: 15.3,
        label: "Cosmetics and Body care"
    },
    {
        id: 'm10',
        imgUrl: `${i10}`,
        name: 'Nivea Men Creme',
        description: 'Dark Spot Reduction,Non Greasy Moisturizer,Cream with UV Protect',
        price: 10.0,
        label: "Cosmetics and Body care"
    },

    {
        id: 'm11',
        imgUrl: `${i11}`,
        name: 'Garnier Men Face Wash',
        description: 'Turbo Bright Anti-Pollution Double Action - Cleans Skin Deeply',
        price: 8.1,
        label: "Cosmetics and Body care"
    },
    {
        id: 'm12',
        imgUrl: `${i12}`,
        name: 'Ultime Pro Matte Lip Crayon',
        description: 'COLOR — Peach Me (08)',
        price: 23.4,
        label: "Cosmetics and Body care"
    },
    {
        id: 'm13',
        imgUrl: `${i13}`,
        name: '24H Waterproof Liquid Foundation',
        description: 'Included Blender,Highlighter,HD Face Cream',
        price: 21.9,
        label: "Cosmetics and Body care"
    },
    {
        id: 'm14',
        imgUrl: `${i14}`,
        name: 'Corsica Mystic',
        description: ' Set of 3 Metal Doll Figurines ',
        price: 16.3,
        label: "Home Decor"
    },
    {
        id: 'm15',
        imgUrl: `${i15}`,
        name: 'Ticking Thunder',
        description: 'Resin Handmade,Clock Regular Size',
        price: 12.5,
        label: "Home Decor"
    },
    {
        id: 'm16',
        imgUrl: `${i16}`,
        name: 'Custom Neon Sing Light',
        description: 'Led Sing For Home Decor,Wedding, Birthday, Anniversary (1 Alphabet 8x8 inch)',
        price: 21.9,
        label: "Home Decor"
    },
    {
        id: 'm17',
        imgUrl: `${i17}`,
        name: 'Wall Shelves',
        description: 'Wooden Shelf Home Decor Items Rack (Set of 6) Size- Standard',
        price: 11.4,
        label: "Home Decor"
    },
    {
        id: 'm18',
        imgUrl: `${i18}`,
        name: 'Porcelain Vase and T-Light Holder',
        description: 'Fantasy Collection with round shape',
        price: 17,
        label: "Home Decor"
    },
];

const AvailableItems = (props) => {

    const productItems = DUMMY_ITEMS;

    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log("Use Effect called");
        axios.default.get("http://localhost:8001/products")
        .then((response) => {
            console.log(response.data);
            setProducts(response.data['products']);
        });
        
    }, []);


    const ItemList = products.map((item) => {
        if (props.selected == '') {
            return (<div className={classes.sameline}>
                <DifferentItems
                    // onChange={(event) => ChangeHandler(event.target.value)}
                    // value={filteredlabel}
                    id={item.id}
                    key={item.id}
                    image={item.imgUrl}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                />
            </div>)
        } else if (props.selected == item.label) {
            return (
                <div className={classes.sameline}>
                    <DifferentItems
                        // onChange={(event) => ChangeHandler(event.target.value)}
                        // value={filteredlabel}
                        id={item.id}
                        key={item.id}
                        image={item.imgUrl}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    />
                </div>
            )
        }
    });

    return (
        <section className={classes.items}>
            <Card >
                <ul >{ItemList}</ul>

            </Card>
        </section>
    )
}
export default AvailableItems;