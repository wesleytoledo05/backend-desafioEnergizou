import { getRepository } from "typeorm";
import { Company } from "../entities/Company";
import { response } from "express";

type CompanyUpdateRequest = {
    id: string;
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


export class UpdateCompanyService {
    async execute({ id, nameClient, email, password, companyname, cnpj, cep, address, number, phone }: CompanyUpdateRequest) {
        const repo = getRepository(Company);

        const company = await repo.findOne({ where: { id } });

        if (!company) {
            return new Error("Essa empresa não existe em nosso banco de dados!")
        }
        company.nameClient = nameClient ? nameClient : company.nameClient;
        company.email = email ? email : company.email;
        company.password = password ? password : company.password;
        company.companyname = companyname ? companyname : company.companyname;
        company.cnpj = cnpj ? cnpj : company.cnpj;
        company.cep = cep ? cep : company.cep;
        company.address = address ? address : company.address;
        company.number = number ? number : company.number;
        company.phone = phone ? phone : company.phone;


        await repo.save(company);

        return company;
    }
}