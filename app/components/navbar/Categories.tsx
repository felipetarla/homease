'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Na Praia',
    icon: TbBeach,
  },
  {
    label: 'Luxo',
    icon: IoDiamond,
  }, 
  {
    label: 'Moderna',
    icon: MdOutlineVilla,
  },
  {
    label: 'No Interior',
    icon: TbMountain,
  },
  {
    label: 'Piscinas',
    icon: TbPool,
  },
  {
    label: 'Ilhas',
    icon: GiIsland,
  },
  {
    label: 'Lagos',
    icon: GiBoatFishing,
  },
  {
    label: 'Esquiar',
    icon: FaSkiing,
  },
  {
    label: 'Castelos',
    icon: GiCastle,
  },
  {
    label: 'Grutas',
    icon: GiCaveEntrance,
  },
  {
    label: 'Acampamentos',
    icon: GiForestCamp,
  },
  {
    label: 'Ártico',
    icon: BsSnow,
  },
  {
    label: 'Deserto',
    icon: GiCactus,
  },
  {
    label: 'Fazendas',
    icon: GiBarn,
  },
  {
    label: 'Celeiros',
    icon: GiWindmill,
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;