import { Request, Response } from "express"
import { UpdateCompanyService } from "../services/UpdateCompanyService";



export class UpdateCompanyController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { nameClient, email, password, companyname, cnpj, cep, address, number, phone } = request.body;

        const service = new UpdateCompanyService();

        const result = await service.execute({ id, nameClient, email, password, companyname, cnpj, cep, address, number, phone })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}