import { Injectable } from '@angular/core';

@Injectable()
export class AsanaService {

  constructor() { }

  generateTaskNames(
    selectedList1: string[],
    selectedList2: string[],
    selectedList3: string[],
    selectedList4: string[]
  ): string[] {

    let names: string[] = []

    selectedList1 = selectedList1.length > 0 ? selectedList1 : [""]
    selectedList2 = selectedList2.length > 0 ? selectedList2 : [""]
    selectedList3 = selectedList3.length > 0 ? selectedList3 : [""]
    selectedList4 = selectedList4.length > 0 ? selectedList4 : [""]


    for(const word1 of selectedList1) {
      for(const word2 of selectedList2) {
        for(const word3 of selectedList3) {
          for(const word4 of selectedList4) {
            const words = word1 + word2 + word3 + word4
            if(words.length !== 0) {
              names.push(words)
            }
          }
        }
      }
    }
    return names
  }
}
