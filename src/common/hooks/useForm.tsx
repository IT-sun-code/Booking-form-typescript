import { useState } from "react";
import { dateFormat, timeFormat } from "../constants/formats";
import { initialFormData, IFormData } from "../constants/initialFormData";
import dayjs, { Dayjs } from "dayjs";
import { EventValue } from "rc-picker/lib/interface";

interface IUseFormData {
  handleFormFinish: () => void;
  handleSelectChange: (value: string | number, type: string) => void;
  disabledDate: (current: Dayjs) => boolean;
  handleDateChange: (value: Dayjs | null, type: string) => void;
  disabledRange: () => { disabledMinutes: () => number[] };
  handleRangeChange: (
    value: [EventValue<Dayjs>, EventValue<Dayjs>] | null,
    type: string
  ) => void;
}

export const useFormData = (): IUseFormData => {
  const [formData, setFormData] = useState<IFormData>(initialFormData);

  const handleFormFinish = (): void => {
    const formDataString = JSON.stringify(formData);
    localStorage.setItem("formData", formDataString);
    console.log(formDataString);
  };

  const handleSelectChange = (value: string | number, type: string) => {
    value && setFormData((prevState) => ({ ...prevState, [type]: value }));
  };

  const disabledDate = (current: Dayjs) => {
    return current < dayjs().startOf("day");
  };

  const handleDateChange = (value: Dayjs | null, type: string) => {
    if (value) {
      const valueData = value.format(dateFormat);
      setFormData((prevState) => ({ ...prevState, [type]: valueData }));
    }
  };

  const disabledRange = (): { disabledMinutes: () => number[] } => {
    const disabledMinutes: number[] = [...Array(60).keys()].filter(
      (minute) => minute !== 0 && minute % 15 !== 0
    );
    return {
      disabledMinutes: () => disabledMinutes,
    };
  };

  const handleRangeChange = (
    value: [EventValue<Dayjs>, EventValue<Dayjs>] | null,
    type: string
  ): void => {
    if (value) {
      const formattedValues: (string | null)[] = value.map((val) =>
        val ? val.format(timeFormat) : null
      );
      setFormData((prevState) => ({ ...prevState, [type]: formattedValues }));
    }
  };

  return {
    handleFormFinish,
    handleSelectChange,
    disabledDate,
    handleDateChange,
    disabledRange,
    handleRangeChange,
  };
};
