import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public categorias = [
    { codigo: 1, nome: 'Pizzas'    },
    { codigo: 2, nome: 'Burguers'  },
    { codigo: 3, nome: 'Assados'   },
    { codigo: 4, nome: 'Cachorrão' }
  ]

  public slideOpts = {
    slidesPerView: 2
  }

  public produtos = [
    { codigo: 1, categoria: 3, descricao: 'Quem saúde quiser ter, mais fruta deve comer. Nenhuma dieta fará por você o que a alimentação saudável faz. Escolha bem seus alimentos e viva mais e melhor! A sua saúde é o que te proporciona realizar todos os seus planos.', nome: 'Croissant 3 queijos',         valor: 13.99, imagens: ['croi-1-1.jpg', 'croi-1-2.jpg'], visibled: false },
    { codigo: 3, categoria: 3, descricao: 'Quem saúde quiser ter, mais fruta deve comer. Nenhuma dieta fará por você o que a alimentação saudável faz. Escolha bem seus alimentos e viva mais e melhor! A sua saúde é o que te proporciona realizar todos os seus planos.', nome: 'Croissant presunto e queijo', valor: 12.99, imagens: ['croi-3-1.jpg', 'croi-3-2.jpg'], visibled: false },
    { codigo: 4, categoria: 3, descricao: 'Quem saúde quiser ter, mais fruta deve comer. Nenhuma dieta fará por você o que a alimentação saudável faz. Escolha bem seus alimentos e viva mais e melhor! A sua saúde é o que te proporciona realizar todos os seus planos.', nome: 'Coxinha de frango',           valor: 7.90, imagens: ['cox-1-1.jpg' , 'cox-1-2.jpg' ], visibled: false },
    { codigo: 6, categoria: 1, descricao: 'Quem saúde quiser ter, mais fruta deve comer. Nenhuma dieta fará por você o que a alimentação saudável faz. Escolha bem seus alimentos e viva mais e melhor! A sua saúde é o que te proporciona realizar todos os seus planos.', nome: 'Frango com catupiry',         valor: 30.90, imagens: ['piz-1-1.jpg' , 'piz-1-2.jpg' ], visibled: false },
    { codigo: 7, categoria: 1, descricao: 'Quem saúde quiser ter, mais fruta deve comer. Nenhuma dieta fará por você o que a alimentação saudável faz. Escolha bem seus alimentos e viva mais e melhor! A sua saúde é o que te proporciona realizar todos os seus planos.', nome: 'Strogonoff de frango',        valor: 45.90, imagens: ['piz-2-1.jpg' , 'piz-2-2.jpg' ], visibled: false },
    { codigo: 8, categoria: 1, descricao: 'Quem saúde quiser ter, mais fruta deve comer. Nenhuma dieta fará por você o que a alimentação saudável faz. Escolha bem seus alimentos e viva mais e melhor! A sua saúde é o que te proporciona realizar todos os seus planos.', nome: 'Strogonoff de carne',         valor: 40.90, imagens: ['piz-3-1.jpg' , 'piz-3-2.jpg' ], visibled: false },
    { codigo: 10, categoria: 2, descricao: 'Quem saúde quiser ter, mais fruta deve comer. Nenhuma dieta fará por você o que a alimentação saudável faz. Escolha bem seus alimentos e viva mais e melhor! A sua saúde é o que te proporciona realizar todos os seus planos.', nome: 'Hambúrguer de costela',      valor: 15.00, imagens: ['ham-1-1.jpg' , 'ham-1-2.jpg' ], visibled: false },
    { codigo: 11, categoria: 2, descricao: 'Quem saúde quiser ter, mais fruta deve comer. Nenhuma dieta fará por você o que a alimentação saudável faz. Escolha bem seus alimentos e viva mais e melhor! A sua saúde é o que te proporciona realizar todos os seus planos.', nome: 'Hambúrguer com cheddar',     valor: 20.99, imagens: ['ham-2-1.jpg' , 'ham-2-2.jpg' ], visibled: false },
    { codigo: 12, categoria: 2, descricao: 'Quem saúde quiser ter, mais fruta deve comer. Nenhuma dieta fará por você o que a alimentação saudável faz. Escolha bem seus alimentos e viva mais e melhor! A sua saúde é o que te proporciona realizar todos os seus planos.', nome: 'Hambúrguer americano',       valor: 25.99, imagens: ['ham-3-1.jpg' , 'ham-3-2.jpg' ], visibled: false },
    { codigo: 13, categoria: 4, descricao: 'Quem saúde quiser ter, mais fruta deve comer. Nenhuma dieta fará por você o que a alimentação saudável faz. Escolha bem seus alimentos e viva mais e melhor! A sua saúde é o que te proporciona realizar todos os seus planos.', nome: 'Simples',                    valor: 6.00, imagens: ['dog-1-1.jpg' , 'dog-1-2.jpg' ], visibled: false },
    { codigo: 14, categoria: 4, descricao: 'Quem saúde quiser ter, mais fruta deve comer. Nenhuma dieta fará por você o que a alimentação saudável faz. Escolha bem seus alimentos e viva mais e melhor! A sua saúde é o que te proporciona realizar todos os seus planos.', nome: 'Duplo',                      valor: 8.00, imagens: ['dog-2-1.jpg' , 'dog-2-2.jpg' ], visibled: false },
    { codigo: 17, categoria: 4, descricao: 'Quem saúde quiser ter, mais fruta deve comer. Nenhuma dieta fará por você o que a alimentação saudável faz. Escolha bem seus alimentos e viva mais e melhor! A sua saúde é o que te proporciona realizar todos os seus planos.', nome: 'Cachorrão de bacon',         valor: 12.00, imagens: ['dog-5-1.jpg' , 'dog-5-2.jpg' ], visibled: false }
  ]

  public pathImgs = '../../assets/img/';

  public selected = 0;

  constructor(private navCtrl: NavController) {
    this.setSelected(1);
  }

  public formataValor(valor) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  public setSelected(codigoCategoria) {
    this.selected = codigoCategoria;

    this.produtos.map(el => el.visibled = false);

    this.produtos
    .filter(el => el.categoria == this.selected)
    .map(el => el.visibled = true);
  }

  public goProduto(produto) {
    this.navCtrl.navigateForward('produto', {
      queryParams: { produto: produto }
    });
  }

}
