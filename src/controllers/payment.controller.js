/**
 * O programador deve criar um Controller para cada entidade
 * do banco de dados, por exemplo, se temos uma entidade
 * chamada Payment, devemos criar um PaymentController.
 */

const PaymentController = {
    /**
     * Criar funções para cada operação que será realizada
     * com a entidade, por exemplo, criar, ler todos, ler apenas um, atualizar e
     * deletar.
     */

    async createPayment(req,res){
        try {
            const {data, recibo, valor, observacao} = req.body;
            return res.status(201).json({message: 'Payment created',
                                         data: {data, recibo, valor, observacao}});
        } catch (error) {
            return res.status(500).json({message: 'Internal server error'});
        }
    },

};

export default PaymentController;