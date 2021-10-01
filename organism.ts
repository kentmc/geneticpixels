import {Config} from './config';
import {World} from './world';

export class Organism {

  dna: string = '';
  xPos: number;
  yPos: number;
  age = 0;
  hunger = 0;
  programCounter = 0;
  config: Config;
  lastWallHit = 0; // 0, 1, 2, 3, 4 : none, left, right, top, bottom
  world: World;

  constructor(config: Config, world: World, dna: string) {

    this.config = config;
    this.world = world;
    this.dna = dna;

    this.xPos = Math.floor(Math.random() * config.mapWidth);
    this.yPos = Math.floor(Math.random() * config.mapHeight);
  }

  move() {
    this.hunger++;
    this.age++;
    this.programCounter = 0;

    while (this.programCounter < this.dna.length) {
      this.processInstruction();
    }
  }

  private processInstruction() {
    if (this.programCounter >= this.dna.length) {
      return;
    }
    switch (this.dna[this.programCounter]) {
      case '0':
        this.programCounter++;
        this.processMove();
        return;
      case '1':
        this.programCounter++;
        this.processIfThen();
        return;
      case '2':
        this.programCounter++;
        this.processLeap();
        return;
      case '3':
        this.programCounter++;
        return;
      default:
        this.programCounter++;
    }
  }

  private processLeap() {
    const num = this.processInteger(3); // 4^3 = 64
    this.programCounter += num;
  }

  private processIfThen() {
    if (this.programCounter >= this.dna.length) {
      return;
    }
    // number of instructions to leap forward if else condition is met
    const jumpForwardElse: number = this.processInteger(3); // max value = 4^3 = 64
    if (this.processPredicate()) {
      this.processInstruction();
    } else {
      this.programCounter += jumpForwardElse;
    }
  }

  private processPredicate(): boolean {
    if (this.programCounter >= this.dna.length) {
      return false;
    }
    switch (this.dna[this.programCounter]) {
      case '0':
        this.programCounter++;
        return this.processFoodVisiblePredicate();
      case '1':
        this.programCounter++;
        return this.processRandomPredicate();
      case '2':
        this.programCounter++;
        return this.processLastHitWallPredicate();
      case '3':
        this.programCounter++;
        return this.processFoodVisiblePredicate();
    }
  }

  private processRandomPredicate(): boolean {
    if (this.programCounter >= this.dna.length) {
      return false;
    }
    switch (this.dna[this.programCounter]) {
      case '0':
        this.programCounter++;
        return Math.random() < 0.5;
      case '1':
        this.programCounter++;
        return Math.random() < 0.25;
      case '2':
        this.programCounter++;
        return Math.random() < 0.125;
      case '3':
        this.programCounter++;
        return Math.random() < 0.0625;
    }
  }

  private processLastHitWallPredicate(): boolean {
    if (this.programCounter >= this.dna.length) {
      return false;
    }
    switch (this.dna[this.programCounter]) {
      case '0':
        this.programCounter++;
        return this.lastWallHit === 1;
      case '1':
        this.programCounter++;
        return this.lastWallHit === 2;
      case '2':
        this.programCounter++;
        return this.lastWallHit === 3;
      case '3':
        this.programCounter++;
        return this.lastWallHit === 4;
    }
  }


  private processFoodVisiblePredicate(): boolean {
    if (this.programCounter >= this.dna.length) {
      return false;
    }

    const lineOfSight = this.config.lineOfSight;

    switch (this.dna[this.programCounter]) {
      case '0':
        this.programCounter++;
        for (let i = 1; i <= lineOfSight; i++) {
          if (this.xPos - i > 0 && this.world.foodMap[this.xPos - i][this.yPos]) {
            return true;
          }
        }
        break;
      case '1':
        this.programCounter++;
        for (let i = 1; i <= lineOfSight; i++) {
          if (this.xPos + i < this.config.mapWidth && this.world.foodMap[this.xPos + i][this.yPos]) {
            return true;
          }
        }
        break;
      case '2':
        this.programCounter++;
        for (let i = 1; i <= lineOfSight; i++) {
          if (this.yPos - i > 0 && this.world.foodMap[this.xPos][this.yPos - i]) {
            return true;
          }
        }
        break;
      case '3':
        this.programCounter++;
        for (let i = 1; i <= lineOfSight; i++) {
          if (this.yPos + i < this.config.mapHeight && this.world.foodMap[this.xPos][this.yPos + i]) {
            return true;
          }
        }
        break;
    }
  }

  private processInteger(dnaLength): number {
    let val = 0;
    for (let i = 0; i < dnaLength; i++) { // 4^5 = 1024
      if (this.programCounter >= this.dna.length) {
        return val;
      }
      switch (this.dna[this.programCounter]) {
        // no case '0' sine that means adding 0, which would do nothing
        case '1':
          val += Math.pow(4, i);
          break;
        case '2':
          val += 2 * Math.pow(4, i);
          break;
        case '3':
          val += 3 * Math.pow(4, i);
          break;
      }
      this.programCounter++;
    }
    return val;
  }

  private processMove() {
    if (this.programCounter >= this.dna.length) {
      return;
    }
    switch (this.dna[this.programCounter]) {
      case '0':
        this.xPos++;
        this.programCounter++;
        break;
      case '1':
        this.xPos--;
        this.programCounter++;
        break;
      case '2':
        this.yPos++;
        this.programCounter++;
        break;
      case '3':
        this.yPos--;
        this.programCounter++;
        break;
    }

    if (this.xPos < 0) {
      this.xPos = 0;
      this.lastWallHit = 1;
    }
    if (this.xPos >= this.config.mapWidth) {
      this.xPos = this.config.mapWidth - 1;
      this.lastWallHit = 2;
    }
    if (this.yPos < 0) {
      this.yPos = 0;
      this.lastWallHit = 3;
    }
    if (this.yPos >= this.config.mapHeight) {
      this.yPos = this.config.mapHeight - 1;
      this.lastWallHit = 4;
    }

    this.programCounter = 999999999; // hack to not allow doing anything after a move instruction
  }

  eatNearbyFood(): void {
    if (this.world.removeFoodIfPresent(this.xPos, this.yPos)) {
      this.hunger = 0;
    }
  }
}
