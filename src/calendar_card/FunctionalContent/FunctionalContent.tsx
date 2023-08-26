import { fmtDate } from "../../utils";
import "./FunctionalContent.css";

interface FunctionalContentProps {
  date: Date;
  fat?: boolean;
}

export default function FunctionalContent(props: FunctionalContentProps) {
  
  return (
    <div className="FunctionalContent">
      <p
        className={props.fat?"fat":""}
      >{
        fmtDate(props.date, "-")
      }</p>
    </div>
  );
}