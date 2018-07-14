import { RoutingService } from "./services/routing.service";

export function initalizeRoutes(routing: RoutingService){
    return () => routing.configureRoutes();
}