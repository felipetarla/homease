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
    description: 'Esta propriedade fica perto da praia!',
  },
  {
    label: 'Luxo',
    icon: IoDiamond,
    description: 'Esta propriedade é de extremo luxo!',
  }, 
  {
    label: 'Moderna',
    icon: MdOutlineVilla,
    description: 'Esta propriedade é moderna!',
  },
  {
    label: 'No Interior',
    icon: TbMountain,
    description: 'Esta propriedade é no Interior!',
  },
  {
    label: 'Piscinas',
    icon: TbPool,
    description: 'Esta propriedade possui uma bela piscina!',
  },
  {
    label: 'Ilhas',
    icon: GiIsland,
    description: 'Esta propriedade fica em uma ilha!',
  },
  {
    label: 'Lagos',
    icon: GiBoatFishing,
    description: 'Esta propriedade fica perto de um lago!',
  },
  {
    label: 'Esquiar',
    icon: FaSkiing,
    description: 'Esta propriedade fica perto de atividades de esqui!',
  },
  {
    label: 'Castelos',
    icon: GiCastle,
    description: 'Esta propriedade é um antigo castelo!',
  },
  {
    label: 'Grutas',
    icon: GiCaveEntrance,
    description: 'Esta propriedade fica perto de uma gruta!',
  },
  {
    label: 'Acampamentos',
    icon: GiForestCamp,
    description: 'Esta propriedade oferece atividades de acampamento!',
  },
  {
    label: 'Ártico',
    icon: BsSnow,
    description: 'Esta propriedade está no ártico!',
  },
  {
    label: 'Deserto',
    icon: GiCactus,
    description: 'Esta propriedade está no deserto!',
  },
  {
    label: 'Fazendas',
    icon: GiBarn,
    description: 'Esta propriedade é um grande Hotel Fazenda!',
  },
  {
    label: 'Celeiros',
    icon: GiWindmill,
    description: 'Esta propriedade está em um celeiro!',

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