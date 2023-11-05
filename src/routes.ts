import { Router } from "express";
import { CompanyController } from "./controllers/CompanyController";


const routes = Router()

routes.post("/createcompany", new CompanyController().create)
routes.get("/listcompanies/", new CompanyController().findAll)
routes.get("/findcompanies/:id", new CompanyController().findById)
routes.get("/findcompaniesbycnpj/:cnpj", new CompanyController().findByCnpj)
routes.delete("/deletecompany/:id", new CompanyController().delete)
routes.put("/updatecompany/", new CompanyController().update)
routes.put("/updatecompany/:id", new CompanyController().update)

export { routes } 