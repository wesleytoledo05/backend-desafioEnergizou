import { Request, Response } from "express"
import { GetCompanyService } from "../services/GetCompanyService"
import { CreateCompanyService } from "../services/CreateCompanyService";
import { DeleteCompanyService } from "../services/DeleteCompanyService";
import { UpdateCompanyService } from "../services/UpdateCompanyService";

export class CompanyController {
    async create(request: Request, response: Response) {
        const { nameClient, email, password, companyname, cnpj, cep, address, number, phone } = request.body

        const service = new CreateCompanyService();

        const result = await service.create({ nameClient, email, password, companyname, cnpj, cep, address, number, phone })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }



    async delete(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteCompanyService()

        const result = await service.execute(id)

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(204).json().end()
    }



    async findAll(request: Request, response: Response) {
        const service = new GetCompanyService();

        const companies = await service.executeAll();

        return response.json(companies);
    }



    async findById(request: Request, response: Response) {
        const { id } = request.params;
        const service = new GetCompanyService();

        const companies = await service.executeById(id);

        if (companies instanceof Error) {
            return response.status(400).json(companies.message)
        }
        return response.status(200).json(companies).end()
    }

    async findByCnpj(request: Request, response: Response) {
        const { cnpj } = request.params;
        const service = new GetCompanyService();

        const companies = await service.executeByCnpj(cnpj);

        if (companies instanceof Error) {
            return response.status(400).json(companies.message)
        }
        return response.status(200).json(companies).end()
    }



    async update(request: Request, response: Response) {
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