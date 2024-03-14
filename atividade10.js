var produtoEmbalado = {
    nome: "Laptop HP",
    categoria: " Eletrônico",
    peso: 1.5,
    preco: 3500.00
}

console.log(`O produto${produtoEmbalado.nome}, da categoria${produtoEmbalado.categoria}, pesando ${produtoEmbalado.peso} kg, está á venda por R$ ${produtoEmbalado.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} `)