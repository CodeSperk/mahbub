import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiNextjsLine } from 'react-icons/ri';
import { SiExpress, SiMongodb, SiTypescript } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

export interface IconConfig {
  id: string;
  viewBox: string;
  Icon: React.ComponentType;
  color: string;
  bounds: {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  };
}

const ICONS: IconConfig[] = [
  {
    id: 'react',
    viewBox: '0 0 24 24',
    Icon: FaReact,
    color: 'text-[#021733]',
    bounds: { minX: 95, maxX: 95, minY: 10, maxY: 20 }
  },
  {
    id: 'nextjs',
    viewBox: '0 0 24 24',
    Icon: RiNextjsLine,
    color: 'text-[#33153365]',
    bounds: { minX: 5, maxX: 5, minY: 80, maxY: 95 }
  },
  {
    id: 'typescript',
    viewBox: '0 0 24 24',
    Icon: SiTypescript,
    color: 'text-[#33153355]',
    bounds: { minX: 80, maxX: 80, minY: 70, maxY: 70 }
  },
  {
    id: 'express',
    viewBox: '0 0 24 24',
    Icon: SiExpress,
    color: 'text-[#422A4265]',
    bounds: { minX: 85, maxX: 95, minY: 95, maxY: 95 }
  },
  {
    id: 'javascript',
    viewBox: '0 0 24 24',
    Icon: IoLogoJavascript,
    color: 'text-[#02173390]',
    bounds: { minX: 5, maxX: 20, minY: 15, maxY: 15 }
  },
  {
    id: 'mongodb',
    viewBox: '0 0 24 24',
    Icon: SiMongodb,
    color: 'text-[#422A4265]',
    bounds: { minX: 70, maxX: 80, minY: 45, maxY: 45 }
  },
  {
    id: 'sql',
    viewBox: '0 0 24 24',
    Icon: TbSql,
    color: 'text-[#422A4265]',
    bounds: { minX: 85, maxX: 85, minY: 45, maxY: 45 }
  }
];

export default ICONS;
