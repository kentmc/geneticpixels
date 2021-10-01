import {Engine} from './engine';

export class StatsService {
  updateStats(engine: Engine) {
    document.getElementById("stat-organisms").innerHTML = engine.world.organisms.length.toString();
    document.getElementById("stat-food").innerHTML = engine.world.foodPositions.length.toString();
    document.getElementById("stat-oldest-ever").innerHTML = engine.stats.oldestOrganismAgeEver.toString();
    document.getElementById("stat-oldest-living").innerHTML = engine.stats.oldestOrganismAgeLiving.toString();
  }
}
