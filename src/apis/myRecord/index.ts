import { Healths, Meals, BodyGraph, Dairy, Exercies, NewList } from "types";
import request from "../request"

export async function fetchMeals(size: number, type?: string | null) {
    if (type) return request.get<Meals[]>(`/meals?category=${type}&_limit=${size}`);
    return request.get<Meals[]>(`/meals?_limit=${size}`);
}

export async function fetchHealths() {
    return request.get<Healths>('/healths');
}

export async function fetchBodyGraph() {
    return request.get<BodyGraph>('/bodyGraph');
}

export async function fetchDaries(size: number) {
    return request.get<Dairy[]>(`/diaries?_limit=${size}`);
}

export async function fetchExercise() {
    return request.get<Exercies[]>('/exercies');
}

export async function fetchNewList(size: number) {
    return request.get<NewList[]>(`/newList?_limit=${size}`);
}