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
}

export type BodyGraph = {
    labels: string[],
    datasets: BodyData[]
}
