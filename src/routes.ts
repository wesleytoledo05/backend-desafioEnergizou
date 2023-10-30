import { Router } from "express";
// import { ClientController } from "./controllers/ClientController";
import { CompanyController } from "./controllers/CreateCompanyController";
import { GetAllCompaniesController } from "./controllers/GetAllCompaniesController";
import { DeleteCompanyController } from "./controllers/DeleteCompanyController";
import { UpdateCompanyController } from "./controllers/UpdateCompanyController";

const routes = Router()

routes.post("/createcompany", new CompanyController().handle)
routes.get("/listcompanies", new GetAllCompaniesController().handle)
routes.delete("/deletecompany/:id", new DeleteCompanyController().handle)
routes.put("/altercompany/:id", new UpdateCompanyController().handle)

export { routes } 