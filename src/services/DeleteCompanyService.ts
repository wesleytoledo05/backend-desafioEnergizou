import { getRepository } from "typeorm";
import { Company } from "../entities/Company";



export class DeleteCompanyService {
    async execute(id: string | any) {
        const repo = getRepository(Company)

        if (!(await repo.findOne({ where: { id } }))) {
            return new Error("Essa empresa não existe!")
        }

        await repo.delete(id)
    }
}