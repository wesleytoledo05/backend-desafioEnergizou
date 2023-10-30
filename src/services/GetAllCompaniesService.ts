import { getRepository } from "typeorm";
import { Company } from "../entities/Company";


export class GetAllCompaniesService {
    async execute() {
        const repo = getRepository(Company)

        const companies = await repo.find()

        return companies
    }
}