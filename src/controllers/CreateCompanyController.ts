import { Request, Response } from "express"
import { CreateCompanyService } from "../services/CreateCompanyService"


export class CompanyController {
    async handle(request: Request, response: Response) {
        const { nameClient, email, password, companyname, cnpj, cep, address, number, phone } = request.body

        const service = new CreateCompanyService();

        const result = await service.execute({ nameClient, email, password, companyname, cnpj, cep, address, number, phone })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}
