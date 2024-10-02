'use client';

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import Container from "../Container";
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property is close to the WindMills!'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is Modern!'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the Countryside!'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property has a Pool!'
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is on a Island!'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is close to a Lake!'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has Skiing activities!'
    },
    {
        label: 'Castle',
        icon: GiCastle,
        description: 'This property is in a Castle!'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property has Camping activities!'
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property is on Arctic area!'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'This property is under a Cave!'
    },
    {
        label: 'Dessert',
        icon: GiCactus,
        description: 'This property is on Dessert!'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'This property is in the Barn!'
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This property is Luxurious!'
    },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const mainPage = pathname === '/';

    if(!mainPage){
        return null;
    }

    return (
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {
                    categories.map(item=> <CategoryBox key={item.label} label={item.label} selected={category === item.label} icon={item.icon} />)
                }
            </div>
        </Container>
    );
};

export default Categories;