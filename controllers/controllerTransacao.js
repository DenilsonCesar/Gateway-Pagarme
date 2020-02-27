const pagarme = require('pagarme')

module.exports = {
    async store(req, res) {
        const {
            card_number, card_cvv, card_expiration_date,
            card_holder_name, email, cpf, phone_numbers, birthday
        } = req.body;
        try{
            pagarme.client.connect({ api_key: 'ak_test_TEEJ3ctb9WeVDzPGyA7uMVXeohrMwJ' })
            .then(client => client.transactions.create({
                "amount": 1990,
                "card_number": card_number,
                "card_cvv": card_cvv,
                "card_expiration_date": card_expiration_date,
                "card_holder_name": card_holder_name,
                "customer": {
                "external_id": "#3311",
                "name": card_holder_name,
                "type": "individual",
                "country": "br",
                "email": email,
                "documents": [
                    {
                    "type": "cpf",
                    "number": cpf
                    }
                ],
                "phone_numbers": [phone_numbers],
                "birthday": birthday
                },
                "billing": {
                "name": "Denilson",
                "address": {
                    "country": "br",
                    "state": "Ce",
                    "city": "Fortaleza",
                    "neighborhood": "Bom jardim",
                    "street": "Rua dom lustosa",
                    "street_number": "506",
                    "zipcode": "60543200"
                }
                },
                "shipping": {
                "name": "Neo Reeves",
                "fee": 1000,
                "delivery_date": "2000-12-21",
                "expedited": true,
                "address": {
                    "country": "br",
                    "state": "sp",
                    "city": "Cotia",
                    "neighborhood": "Rio Cotia",
                    "street": "Rua Matrix",
                    "street_number": "9999",
                    "zipcode": "06714360"
                }
                },
                "items": [
                {
                    "id": "r123",
                    "title": "Plano",
                    "unit_price": 1990,
                    "quantity": 1,
                    "tangible": true
                },
                ]
            }))
            .then(transaction => res.json(transaction))
        }catch(err){
            return res.status(400).send({error: 'Erro ao Buscar!'})
        }
    }
}