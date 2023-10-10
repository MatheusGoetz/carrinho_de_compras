let valorTotal = 0;

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let qntdProduto = document.getElementById('quantidade').value;
    let calculoPreco =  valorProduto * qntdProduto;

    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + ` <section class="carrinho__produtos__produto">
    <span class="texto-azul">${qntdProduto}X</span> ${nomeProduto} <span class="texto-azul">${valorProduto}</span>
    </section>`
  
    valorTotal += calculoPreco

    let totalCarrinho = document.getElementById('valor-total');
    totalCarrinho.innerHTML = `<span class="texto-azul" id="valor-total">R$${valorTotal}</span>`
}

function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}
