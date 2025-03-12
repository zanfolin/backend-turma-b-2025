/**
 * O programador deve criar um Controller para cada entidade
 * do banco de dados, por exemplo, se temos uma entidade
 * chamada Payment, devemos criar um PaymentController.
 */
import {z} from "zod";

const PaymentSchema = z.object({
    data: z.string().datetime({message: 'Data inválida'}),
    recibo: z.number({message: 'Recibo inválido'}).min(1,{message: 'Recibo inválido'}),
    valor: z.number({message: 'Valor inválido'}).min(0,{message: 'Valor inválido'}),
    observacao: z.string().optional(),
});

const PaymentController = {
    /**
     * Criar funções para cada operação que será realizada
     * com a entidade, por exemplo, criar, ler todos, ler apenas um, atualizar e
     * deletar.
     */

    async createPayment(req,res){
        try {
            const {data, recibo, valor, observacao} = req.body;
            PaymentSchema.parse({data, recibo, valor, observacao});
            return res.status(201).json({message: 'Payment created',
                                         data: {data, recibo, valor, observacao}});
        } catch (error) {
            if (error instanceof z.ZodError) {
                return res.status(400).json({message: "Validation error", details: error.errors});
            }

            return res.status(500).json({message: 'Internal server error'});
        }
    },

};

export default PaymentController;