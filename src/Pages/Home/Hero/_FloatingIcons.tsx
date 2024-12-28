"use client"
import React, { useEffect, useState } from 'react';
import ICONS from '../_helpers/__iconConfig';

interface Position {
  x: number;
  y: number;
  dx: number;
  dy: number;
}

const FloatingIcons: React.FC = () => {
  const [positions, setPositions] = useState<Position[]>(
    ICONS.map(icon => ({
      x: (icon.bounds.minX + icon.bounds.maxX) / 2,
      y: (icon.bounds.minY + icon.bounds.maxY) / 2,
      dx: 0.075,
      dy: 0.075
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(prevPositions =>
        prevPositions.map((pos, index) => {
          const bounds = ICONS[index].bounds;
          let newX = pos.x + pos.dx;
          let newY = pos.y + pos.dy;
          let newDx = pos.dx;
          let newDy = pos.dy;

          if (newX <= bounds.minX || newX >= bounds.maxX) newDx *= -1;
          if (newY <= bounds.minY || newY >= bounds.maxY) newDy *= -1;

          newX = Math.max(bounds.minX, Math.min(bounds.maxX, newX));
          newY = Math.max(bounds.minY, Math.min(bounds.maxY, newY));

          return {
            x: newX,
            y: newY,
            dx: newDx,
            dy: newDy
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {ICONS.map((icon, index) => (
        <div 
          key={icon.id}
          className="absolute w-24 h-24 md:w-32 md:h-32 transition-all duration-300 ease-linear"
          style={{ 
            left: `${positions[index].x}%`, 
            top: `${positions[index].y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <svg viewBox={icon.viewBox} className={`w-full h-full ${icon.color}`}>
            <icon.Icon />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
