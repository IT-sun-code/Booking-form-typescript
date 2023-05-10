export interface IFormData {
  tower: string;
  floor: number;
  room: number;
  date: string;
  timeRange: string[];
  comment: string;
}

export const initialFormData: IFormData = {
  tower: "",
  floor: 3,
  room: 1,
  date: "",
  timeRange: ["", ""],
  comment: "Принесем хорошее настроение!",
};
