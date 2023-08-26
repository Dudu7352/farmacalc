import "./CalendarCard.css";
import FunctionalContent from "./FunctionalContent/FunctionalContent";

interface CalendarCardProps {
	title: string;
  date: Date;
	fat?: boolean;
}

export default function CalendarCard(props: CalendarCardProps) {
  return (
    <div 
			className="CalendarCard"
		>
      <header>
				<p>
					{props.title}
				</p>
			</header>
			<div className="contents">
				<FunctionalContent date={props.date} fat={props.fat}/>
			</div>
    </div>
  );
}
