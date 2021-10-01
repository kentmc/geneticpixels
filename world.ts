import {Organism} from './organism';
import {Position} from './position';

export class World {
  organisms: Organism[];
  foodMap: boolean[][];
  foodPositions: Position[];
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.reset();
  }

  initEmptyFoodMap(width, height) {
    for (let i = 0; i < width; i++) {
      const row = [];
      this.foodMap.push(row);
      for (let j = 0; j < height; j++) {
        row.push(false);
      }
    }
  }

  removeFoodIfPresent(xPos: number, yPos: number) {
    if (this.foodMap[xPos][yPos]) {
      this.foodPositions = this.foodPositions.filter(position => position.x !== xPos || position.y !== yPos);
      this.foodMap[xPos][yPos] = false;
      return true;
    }
    return false;
  }

  reset() {
    this.organisms = [];
    this.foodMap = [];
    this.foodPositions = [];
    this.initEmptyFoodMap(this.width, this.height);
  }

  forceSetAllDNAInExistence(dna: string) {
    this.organisms.forEach(o => o.dna = dna);
  }
}
