import { Healths, Meals, BodyGraph } from "types";
import request from "../request"

export async function fetchMeals() {
    return request.get<Meals[]>('/meals');
}

export async function fetchHealths() {
    return request.get<Healths>('/healths');
}

export async function fetchBodyGraph() {
    return request.get<BodyGraph>('/bodyGraph');
}