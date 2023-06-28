export type Meals = {
  title: string;
  img: string;
  date: string;
  category: string;
};

export type Healths = {
  primaryDate: string;
  percent: string;
};

type BodyData = {
  label?: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
};

export type BodyGraph = {
  labels: string[];
  datasets: BodyData[];
};

export type Dairy = {
  id: number;
  createdAt: number;
  content: string;
};

export type Exercies = {
  id: number;
  title: string;
  durationInMinutes: number;
  numberOfKcal: number;
};

export type NewList = {
  id: string;
  content: string;
  title: string;
  createdAt: number;
  image: string
}
