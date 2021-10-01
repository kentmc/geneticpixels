import {Config} from './config';
import {Organism} from './organism';
import {World} from './world';
import {Stats} from './stats';
import {DNACreator} from './dna-creator';

export class Engine {
  private context: CanvasRenderingContext2D;

  config: Config;
  world: World;
  stats: Stats;
  reproductionDNA: string;

  constructor(canvasId: string, config: Config) {
    this.config = config;
    this.world = new World(this.config.mapWidth, this.config.mapHeight);
    this.stats = new Stats();

    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.context = this.initContext(canvas);
  }

  private initContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
    let context = canvas.getContext("2d");
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    return context;
  }

  private drawOrganisms(): void {
    this.world.organisms.forEach(organism => {
      const opacity = 1 - (organism.hunger / this.config.maxHunger);
      this.context.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
      this.context.fillRect(organism.xPos-1, organism.yPos-1, 3, 3);
    });
  }

  private drawFood(): void {
    this.context.fillStyle = 'rgba(100, 255, 100)';
    this.world.foodPositions.forEach(food => {
      this.context.fillRect(food.x, food.y, 1, 1);
    });
  }

  private killTooHungryOrganisms(): void {
    this.world.organisms = this.world.organisms.filter(organism => organism.hunger < this.config.maxHunger);
  }

  private drawOldestOrganismHighlight(): void {
    if (this.stats.oldestOrganism) {
      const opacity = 1 - (this.stats.oldestOrganism.hunger / this.config.maxHunger);
      this.context.fillStyle = "rgba(255, 0, 0, " + opacity + ")";
      this.context.fillRect(this.stats.oldestOrganism.xPos - 2, this.stats.oldestOrganism.yPos - 2, 5, 5);
    }
  }

  private makeOrganismsLiveOneTick(): void {
    this.stats.oldestOrganismAgeLiving = 0;
    this.world.organisms.forEach(organism => {
      organism.move();
      organism.eatNearbyFood();
    });
  }


  private letOrganismsEatIfAtFood(): void {
    this.world.organisms.forEach(organism => {
      organism.eatNearbyFood();
    });
  }

  private updateStats(): void {
    this.stats.oldestOrganismAgeLiving = 0;
    this.world.organisms.forEach(organism => {
      if (organism.age > this.stats.oldestOrganismAgeLiving) {
        this.stats.oldestOrganismAgeLiving = organism.age;
      }
      if (organism.age > this.stats.oldestOrganismAgeEver) {
        this.stats.oldestOrganismAgeEver = organism.age;
      }
    });
  }


  private updateReproductionDNAIfBetterExists(): void {
    this.stats.oldestOrganismAgeLiving = 0;
    this.world.organisms.forEach(organism => {
      if (organism.age > this.stats.oldestOrganismAgeEver) {
        this.reproductionDNA = organism.dna;
      }
    });
  }

  private redraw(): void {
    this.clearCanvas();
    this.drawFood();
    this.drawOrganisms();
    this.drawOldestOrganismHighlight();
  }

  private clearCanvas() {
    this.context.clearRect(0, 0, this.config.mapWidth, this.config.mapHeight);
  }

  private spawnOrganismsIfNeeded() {
    while (this.world.organisms.length < this.config.maxOrganisms) {
      const dna = DNACreator.createDNA(this.reproductionDNA, this.config);
      const organism = new Organism(this.config, this.world, dna);
      this.world.organisms.push(organism);
    }
  }

  private createFoodIfNeeded() {
    while (this.world.foodPositions.length < this.config.maxFood) {
      const x = Math.floor(Math.random() * this.config.mapWidth);
      const y = Math.floor(Math.random() * this.config.mapHeight);
      if (!this.world.foodMap[x][y]) {
        this.world.foodPositions.push({x, y});
        this.world.foodMap[x][y] = true;
      }
    }
    while (this.world.foodPositions.length > this.config.maxFood) {
      const food = this.world.foodPositions.pop();
      this.world.foodMap[food.x][food.y] = false;
    }
  }

  public tick(): void {
    this.spawnOrganismsIfNeeded();
    this.createFoodIfNeeded();
    this.makeOrganismsLiveOneTick();
    this.letOrganismsEatIfAtFood();
    this.killTooHungryOrganisms();
    this.updateReproductionDNAIfBetterExists();
    this.updateStats();
    this.redraw();
  }

  public setReproductionDna(reproductionDNA: string){
    this.reproductionDNA = reproductionDNA;
  }

  public reset(){
    this.stats = new Stats();
    this.world.reset();
  }

  public forceSetAllDNAInExistence(dna: string) {
    this.reproductionDNA = dna;
    this.world.forceSetAllDNAInExistence(dna);
  }

}
