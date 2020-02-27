const pagarme = require('pagarme');

module.exports = {
    async store(req, res) {
        try{
            pagarme.client.connect({ api_key: 'ak_test_TEEJ3ctb9WeVDzPGyA7uMVXeohrMwJ' })
            .then(client => client.transactions.create({
                amount: 1990,
                payment_method: 'boleto',
                postback_url: 'http://requestb.in/pkt7pgpk',
                customer: {
                    type: 'individual',
                    country: 'br',
                    name: 'Aardvark Silva',
                    email: "aardvark.silva@pagar.me",
                    documents: [
                        {
                        type: 'cpf',
                        number: '00000000000',
                        },
                    ],
                },
            }))
            .then(transaction => res.json(transaction))
        }catch(error){
            console.log(error)
            return res.status(400).send({error: 'Erro ao Buscar!'})
        }
    }
}

