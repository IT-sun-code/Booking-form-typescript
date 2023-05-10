export const formattedDate: string = new Date().toISOString().slice(0, 10);

export const currentDate: Date = new Date();
export const currentHour: number = currentDate.getHours();
export const currentMinute: number = currentDate.getMinutes();
