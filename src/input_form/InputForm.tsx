import DatePicker from "react-datepicker";
import "./InputForm.css";
import "react-datepicker/dist/react-datepicker.css";

interface InputFormProps {
  date: Date;
  setDate: (newDate: Date) => void;
  duration: number;
  setDuration: (newDuration: number) => void;
}

export default function InputForm(props: InputFormProps) {
  return (
    <div className="InputForm">
      <p>Data realizacji recepty</p>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={props.date} 
        onChange={newDate => props.setDate(newDate ?? new Date())} 
      />
      <p>Ilość dni kuracji</p>
      <input
        type="number"
        min="0"
        onChange={(e) => {
          props.setDuration(Number.parseInt(e.target.value));
        }}
      />
    </div>
  );
}
