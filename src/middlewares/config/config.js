import { environment } from "../../config/config";
import { DEVELOPMENT } from "../misc/consts";

export const URL_API = environment === DEVELOPMENT ?"http://localhost:8080":"https://artificialintelligence-api.fly.dev"
