export interface IProduto{
  id?: number;  // indica que o atributo é opcional
  nome: string;
  validade: Date;
  preco: number;
  promocao: boolean;
  foto: string;
}
