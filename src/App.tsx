import { useEffect, useState } from 'react'
import './App.css'
import InputForm from './input_form/InputForm';
import CalendarCard from './calendar_card/CalendarCard';

function App() {
  const [inputDate, setInputDate] = useState(new Date());
  const [outputDate, setOutputDate] = useState(new Date());
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setOutputDate(
      new Date(
        inputDate.getTime() 
        + ( Math.floor(duration * 3/4) + 1 )
        * 3600 * 24 * 1000
        )
    );
    console.log(new Date(inputDate.getTime() + duration * 3600 * 24 * 1000));
  }, [inputDate, duration]);
  
  return (
    <>
      <h1>Kalkulator daty kolejnej wizyty pacjenta</h1>
      <InputForm
        date={inputDate}
        setDate={newDate => setInputDate(newDate)}
        duration={duration}
        setDuration={newDuration => 
          setDuration(
            Number.isNaN(newDuration) ?
            0 : newDuration 
            )
        }
      />
      <div className = "row">
        <CalendarCard title="Data realizacji recepty" date={inputDate}/>
        <CalendarCard title="Data kolejnej wizyty pacjenta" fat date={outputDate}/>
      </div>
    </>
  );
}

export default App;
