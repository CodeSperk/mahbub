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
    color: 'text-[#021733]',
    Icon: FaReact,
    bounds: { minX: 95, maxX: 95, minY: 10, maxY: 20 }    
  },
  {
    id: 'nextjs',
    viewBox: '0 0 24 24',
    Icon: RiNextjsLine,
    color: 'text-[#422A4265]',
    bounds: { minX: 90, maxX: 90, minY: 65, maxY: 65 }    
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
    bounds: { minX: 5, maxX: 15, minY: 15, maxY: 15 }
  },
  {
    id: 'typescript',
    viewBox: '0 0 24 24',
    Icon: SiTypescript,
    color: 'text-[#33153330]',
    bounds: { minX: 10, maxX: 10, minY: 90, maxY: 90 }
  },
  {
    id: 'mongodb',
    viewBox: '0 0 24 24',
    Icon: SiMongodb,
    color: 'text-[#422A4265]',
    bounds: { minX: 80, maxX: 80, minY: 55, maxY: 55 }
  },
  {
    id: 'sql',
    viewBox: '0 0 24 24',
    Icon: TbSql,
    color: 'text-[#422A4265]',
    bounds: { minX: 85, maxX: 85, minY: 50, maxY: 50 }
  }
];

export default ICONS;
