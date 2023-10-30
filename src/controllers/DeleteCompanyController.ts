import { Request, Response } from "express"
import { DeleteCompanyService } from "../services/DeleteCompanyService";



export class DeleteCompanyController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteCompanyService()

        const result = await service.execute(id)

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(204).json().end()
    }
}