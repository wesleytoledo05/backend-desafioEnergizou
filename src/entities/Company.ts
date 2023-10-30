import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("companies")
export class Company {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nameClient: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    companyname?: string;

    @Column()
    cnpj: number;

    @Column()
    cep: number;

    @Column()
    address: string;

    @Column()
    number: number;

    @Column()
    phone: number;


}