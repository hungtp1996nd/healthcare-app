import { Healths, Meals, BodyGraph, Dairy, Exercies, NewList } from "types";
import request from "../request"

export async function fetchMeals(type?: string | null) {
    if (type) return request.get<Meals[]>(`/meals?category=${type}`);
    return request.get<Meals[]>('/meals');
}

export async function fetchHealths() {
    return request.get<Healths>('/healths');
}

export async function fetchBodyGraph() {
    return request.get<BodyGraph>('/bodyGraph');
}

export async function fetchDaries() {
    return request.get<Dairy[]>('/diaries');
}

export async function fetchExercise() {
    return request.get<Exercies[]>('/exercies');
}

export async function fetchNewList() {
    return request.get<NewList[]>('/newList');
}