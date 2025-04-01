import { Component } from '@angular/core';

/**
 * Componente em Angular para o Exercício 01
 * Este componente permite contar o número de vogais em uma palavra fornecida pelo usuário
 */

/**
 * Novo envio para avaliação e pull request!
 */

@Component({
  selector: 'app-exercicio01',
  templateUrl: './exercicio01.component.html',
  styleUrls: ['./exercicio01.component.css', '../app.component.css']
})

export class Exercicio01Component {
  /**
   * A palavra inserida pelo usuário
  */
  userWord: string = '';

  /**
   * O número de vogais da palavra
   */

  numVowels: number | undefined;
 
  
  
  /**
   * Função para contar o número de vogais da palavra inserida pelo usuário
  */
 countVowels(): void {
    /**
   * Expressão para normalizar a palavra
   */
    const normalizeWord = this.userWord.normalize('NFD');

    /**
   * Expressão para normalizar a palavra
   */
    const normalizeWord = this.userWord.normalize('NFD');

    /**
     * Expessão redular para encontrar todas as vogais na palavra
     */
    const vowels = normalizeWord.match(/[aeiou]/gi);

    /**
     * Atribui o número de vogais à variável numVowels
     */
    this.numVowels = vowels ? vowels.length : 0;
  }
}
