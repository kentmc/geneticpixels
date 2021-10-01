import {Engine} from './engine';
import {StatsService} from './stats-service';
import {HIGHLIGHT_CONFIG} from './config/highlight-config';
import {WORLD_CONFIG} from './config/world-config';

const fps = 60;
const worldEngine = new Engine('world-canvas', WORLD_CONFIG);
const highlightEngine = new Engine('highlight-canvas', HIGHLIGHT_CONFIG);
const statsService = new StatsService();
const reproductionDnaInput: HTMLTextAreaElement = document.getElementById("reproduction-dna-input") as HTMLTextAreaElement;
const initialDnaInput: HTMLTextAreaElement = document.getElementById("initial-dna-input") as HTMLTextAreaElement;

setInterval(() => {
  worldEngine.tick();
  highlightEngine.forceSetAllDNAInExistence(worldEngine.reproductionDNA);
  highlightEngine.tick();
  statsService.updateStats(worldEngine);
  reproductionDnaInput.value = worldEngine.reproductionDNA;
}, 1);


// reset World when clicking reset
const resetButton = document.getElementById("reset-button") as HTMLButtonElement;
resetButton.addEventListener("click", () => {
  worldEngine.setReproductionDna(initialDnaInput.value);
  worldEngine.reset();
});

// set value of config input elements and update config when changing values
const inputElements: HTMLCollectionOf<Element> = document.getElementsByClassName("input-setting");
for (let i = 0; i < inputElements.length; i++) {
  const element: HTMLInputElement = inputElements.item(i) as HTMLInputElement;
  const configName = element.id.split("config-input-")[1];
  element.value = WORLD_CONFIG[configName];
  element.addEventListener("input", (event: InputEvent) => {
    WORLD_CONFIG[configName] = (event.target as HTMLInputElement).value;
    HIGHLIGHT_CONFIG[configName] = (event.target as HTMLInputElement).value;
    HIGHLIGHT_CONFIG["maxOrganisms"] = 1; // make sure we always keep maxOrganisms=1 for highlight
  });
}


