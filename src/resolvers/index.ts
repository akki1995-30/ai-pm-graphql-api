import { adminResolver } from "./admin.resolver";
import { authResolver } from "./auth.resolver";
import { projectResolver } from "./project.resolver";
import { taskResolver } from "./task.resolver";
import { teamResolver } from "./team.resolver";

export const resolvers = [

    adminResolver,
    authResolver,
    projectResolver,
    taskResolver,
    teamResolver

];