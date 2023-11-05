import { getRepository } from "typeorm";
import { Company } from "../entities/Company";


export class GetCompanyService {
    async executeAll() {
        const repo = getRepository(Company)

        const companies = await repo.find()

        return companies
    }

    async executeById(id: string | any) {
        const repo = getRepository(Company)
        const company = await repo.findOne({ where: { id } })


        if (!company) {
            return new Error("Essa empresa não existe!")
        }

        return company
    }
    async executeByCnpj(cnpj: string) {
        const repo = getRepository(Company)
        const company = await repo.findOne({ where: { cnpj } })

        if (!company) {
            return new Error("Essa empresa não existe!")
        }

        return company
    }
}