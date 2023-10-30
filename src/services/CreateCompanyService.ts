import { getRepository } from "typeorm"

import { Company } from "../entities/Company";



type CompanyRequest = {
    nameClient: string;
    email: string;
    password: string;
    companyname: string;
    cnpj: number;
    cep: number;
    address: string;
    number: number;
    phone: number;
}

export class CreateCompanyService {
    async execute({ nameClient, email, password, companyname, cnpj, cep, address, number, phone }: CompanyRequest): Promise<Company | Error> {
        const repo = getRepository(Company);

        if (await repo.findOne({
            where: {
                nameClient,
                email,
                password,
                companyname,
                cnpj,
                cep,
                address,
                number,
                phone
            }
        })) {
            return new Error("Já existe uma empresa com essas informações no nosso banco de dados!")
        }

        const company = repo.create({
            nameClient,
            email,
            password,
            companyname,
            cnpj,
            cep,
            address,
            number,
            phone
        });
        await repo.save(company)
        return company;
    }
}



