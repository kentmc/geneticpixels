import {Config} from './config';

export class DNACreator {

  public static createDNA(parentDNA: string, config: Config): string {
    if (!parentDNA) {
      return this.randomDNA(config);
    }
    let dna = parentDNA;
    while (dna.length < config.dnaLength){
      dna += "0";
    }
    dna = this.mutateDNA(dna, config);
    if (Math.random() < config.dnaCutAndReplaceRate) {
      dna = this.cutAndReplaceDNA(dna);
    }
    return dna;
  }

  private static randomDNA(config: Config): string {
    let dna = '';
    for (let i = 0; i < config.dnaLength; i++) {
      dna += Math.floor(Math.random() * 4);
    }
    return dna;
  }

  private static mutateDNA(dna: string, config: Config): string {
    let newDNA = '';
    for (let i = 0; i < dna.length; i++) {
      if (Math.random() < config.dnaMutationRate) {
        newDNA += Math.floor(Math.random() * 4);
      } else {
        newDNA += dna[i];
      }
    }
    return newDNA;
  }

  private static cutAndReplaceDNA(dna: string): string {
    let start = Math.floor(Math.random() * dna.length);
    let end = Math.floor(Math.random() * dna.length);
    if (start > end) {
      const temp = start;
      start = end;
      end = temp;
    }
    let replacement = '';
    for (let i = start; i < end; i++) {
      replacement += '' + Math.floor(Math.random() * 4);
    }
    return dna.substring(0, start) + replacement + dna.substring(end, dna.length);
  }

}
