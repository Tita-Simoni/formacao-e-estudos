import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

/**
 * Componente Angular para o Exercício 02 e para o Exercício 03
 * Este componente gerencia uma lista de pessoas com informações sobre elas
 */

/**
 * Novo pull request para avaliação
 */

interface Pessoa {
  id: number;
  name: string;
  bio: string;
}

@Component({
  selector: 'app-exercicio02',
  templateUrl: './exercicio02.component.html',
  styleUrls: ['../app.component.css', './exercicio02.component.css']
})

export class Exercicio02Component {
  /**
   * Lista de pessoas com informações como ID, nome e biografia.
   */
  list: Pessoa[] = [
    {
      id: 1, 
      name: "Ada Lovelace", 
      bio : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"
    },
    {
      id : 2, 
      name: "Alan Turing", 
      bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"
    },
    {
      id : 3, 
      name: "Nikola Tesla", 
      bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."
    },
    {
      id : 4, 
      name: "Nicolau Copérnico", 
      bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
    }
  ];    

  id: number = 0;
  showAll: boolean = false;
  showUpdateFields: boolean = false;
  newName: string = '';
  newBio: string = '';
  result: string = '';

  // Funções com o paradgima funcional:

  /**
   * Obtém a biografia de uma pessoa com base no ID.
   * @param id - o ID da pessoa
   * @returns - retorna a biografia da pessoa correspondente ao ID ou então "ID não encontrado"
   */
  getBioFunctional(id: number): string {
    const item = this.list.find(item => item.id === id);
    return item ? item.bio: "ID não encontrado";
  }

  /**
   * Obtém o nome de uma pessoa com base no ID.
   * @param id - o ID da pessoa
   * @returns - retorna o nome da pessoa correspondente ao ID ou então "ID não encontrado"
   */
  getNameFunctional(id: number): string {
    const item = this.list.find(item=> item.id===id);
    return item ? item.name: "ID não encontrado";
  }

  /**
   * Exclui uma pessoa da lista com base no ID
   * @param list - a lista de pessoas
   * @param id - o ID da pessoa
   * @returns - retorna a lista de pessoas após a exclusão
   */
  deleteItemFunctional(list: Pessoa[], id: number): Pessoa[] {
    return list.filter(item => item.id !== id);
  }

  /**
   * Atualiza uma propriedade de uma pessoa na lista com base no ID
   * @param list - a lista de pessoas
   * @param id - o ID da pessoa
   * @param prop - a propriedade a ser atualizada - 'name' ou 'bio'
   * @param value - o novo valor da propriedade
   * @returns - retorna a lista de pessoas após a atualização
   */
  updateItemFunctional(list: Pessoa[], id: number, prop: string, value: string): Pessoa[] {
    return list.map(item => {
      if (item.id === id) {
        return { ...item, [prop]: value };
      }
      return item;
    });
  }

  /**
   * Executa uma ação com base na opção escolhida pelo usuário
   * @param option - a opção escolhida
   * @param event - o evento associado à ação
   */
  executeAction(option: string, event: Event): void {
    console.log('this.id:', this.id);
    const id = this.id;

    if (option === 'showAll') {
      this.showAll = true;
      this.showUpdateFields = false;
    } else if (option === 'updateItemFields') {
      this.showAll = false;
      this.showUpdateFields = true;
    } else if (option === 'findBio') {
      const bio = this.getBioFunctional(id);
      this.result = bio ? `Bio encontrada: ${bio}` : "ID não encontrado";
    } else if (option === 'findName') {
      const bio = this.getNameFunctional(id);
      this.result = bio ? `Nome encontrado: ${bio}` : "ID não encontrado";
    } else if (option === 'deleteItem') {
      this.list = this.deleteItemFunctional(this.list, id);
      this.result = `Pessoa com ID ${id} excluída com sucesso da lista.`;
    } else if (option === 'updateItem') {
        this.showUpdateFields = true;      //      let name = (<HTMLInputElement>event.target).value; // Nome do input que foi alterado
        this.list = this.updateItemFunctional(this.list, id, 'name', this.newName);
        this.list = this.updateItemFunctional(this.list, id, 'bio', this.newBio);
    }
  }

  /**
   * Atualiza uma pessoa na lista com base nos campos de entrada
   */
  updateItem(): void {
    const id = this.id;
    const newName = this.newName;
    const newBio = this.newBio;

    if (newName !== null && newName !== '') {
        this.list = this.updateItemFunctional(this.list, id, 'name', newName);
    }
    
    if (newBio !== null && newBio !== '') {
        this.list = this.updateItemFunctional(this.list, id, 'bio', newBio);
    }

    this.showAll = false;
    this.showUpdateFields = false;
  }

  

//   // Funções com o paradigma imperativo:

//   /**
//    * Obtém a biografia de uma pessoa com base no ID, de forma imperativa 
//    * @param list - a lista de pessoas
//    * @param id - o ID da pessoa
//    * @returns - retorna a biografia da pessoa correspondente ao ID ou então "ID não encontrado"
//    */
//   getBioImperative(list: Array<any>, id: number): string {
//     for (let i = 0; i < list.length; i++) {
//       if (list[i].id === id) {
//         return list[i].bio;
//       }
//     }
//     return "ID não encontrado";
//   }

//   /**
//    * Obtém o nome de uma pessoa com base no ID, de forma imperativa 
//    * @param list - a lista de pessoas
//    * @param id - o ID da pessoa
//    * @returns - retorna o nome da pessoa correspondente ao ID ou então "ID não encontrado"
//    */
//   getNameImperative(list: Array<any>, id: number): string {
//     for (let i = 0; i < list.length; i++) {
//       if (list[i].id === id) {
//         return list[i].name;
//       }
//     }
//     return "ID não encontrado";
//   }

//   /**
//    * Exclui uma pessoa da lista com base no ID de forma imperativa
//    * @param list - a lista de pessoas
//    * @param id - o ID da pessoa a ser excluída
//    */
//   deleteItemImperative(list: Array<any>, id: number): void {
//     for (let i = 0; i < list.length; i++) {
//       if (list[i].id === id) {
//         list.splice(i, 1);
//         return
//       }
//     }
//   }

//   /**
//    * Atualiza uma propriedade de uma pessoa na lista, com base no ID, de forma imperativa
//    * @param list - a lista de pessoas
//    * @param id - o ID da pessoa a ser atualizada
//    * @param prop - a propriedade a ser atualizada - 'name' ou 'bio'
//    * @param value - o novo valor da propriedade
//    */
//   updateItemImperative(list: Array<any>, id: number, prop: string, value: string): void {
//     for (let i = 0; i <= list.length-1; ++i){
//       if (list[i].id === id) {
//         list[i][prop] = value;
//         return
//       }
//     }
//   }
}
