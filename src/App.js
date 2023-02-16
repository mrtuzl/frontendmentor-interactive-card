
import './App.css';
import cardLogo from './card-logo.svg';
import complete from './icon-complete.svg';
import { useState } from 'react';
import React from 'react';


export function ThankYou({setSubmit}) {

  function onClickContinue() {
    setSubmit(false)
    window.location.reload(false);
    return(<App
           
    />);
    
  }
  return (
    <div className='complete'> 
    <img src={complete} alt='complete'/>
    <h1> THANK YOU!</h1>
    <p> We've added your card details </p> 
    <button onClick={onClickContinue} className="button"> Continue</button>
    </div>
  );
}



function App() {

  const [name, setName] = useState("JANE APPLESEED");
  const [cardNumber, setCardNumber] = useState("1234 5678 9123 0000");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvc, setCvc] = useState("000");
  const [numberError, setNumberError] = useState();
  const [nameError, setNameError] = useState();
  const [dateError, setDateError] = useState();
  const [cvcError, setCvcError] = useState();
  const [submit, setSubmit] = useState(false);

  function onChangeNumber(e) {

    setCardNumber(e.target.value)
    if (cardNumber.length === 15) {
      setNumberError(false)
    }
    else {
      setNumberError(true)
    }
  
  }

  function onChangeName(e) {
    setName(e.target.value)
    if (name.length <= 5) {
      setNameError(true)
    }
    else{
      setNameError(false)
    }
  }

function onChangeMonth(e) {
    setMonth(e.target.value)
    if (month.length === 2) {
      setDateError(true)
    }
    else{
      setDateError(false)
    }
  }

  function onChangeYear(e) {
    setYear(e.target.value)
    if (year.length === 2) {
      setDateError(true)
    }
    else{
      setDateError(false)
    }
  }

  function onChangeCvc(e) {
    setCvc(e.target.value)
    if (cvc.length !== 2) {
      setCvcError(true)
    }
    else{
      setCvcError(false)
    }
  }


  function handleSubmit(e) {
    e.preventDefault();
    if (nameError === false && numberError === false && dateError === false && cvcError === false) {
      setSubmit(true)
    }
  }

  return (
    <>
        <main className='container'> 
              <section className='cards'>
                    <div className='front-card'> 
                      <div> <img src={cardLogo} alt="logo"/> </div>
                      <div className='card-number'> {cardNumber
                                                    .replace(/\s/g, "")
                                                    .replace(/(\d{4})/g, "$1 ")
                                                    .trim()}
                      </div>
                      <div className='card-bottom'> 
                        <div className='card-name'> {name.toUpperCase()} </div>
                        <div className='month-year'> <span> {month} </span> / <span> {year} </span></div>
                      </div> 
                    </div>
                    <div className='back-card'> 
                    <span> {cvc} </span>
                    </div>
              </section>

              

               {  submit 
               ? <ThankYou setSubmit={setSubmit}/>
               : <section className='form'>  
               <form onSubmit={handleSubmit}> 

                 <label> CARDHOLDER NAME </label>
                 <input 
                 className={` ${nameError ? "warning" : ""}`}
                 type="text"
                 name="name"
                 placeholder="e.g. Jane Appleseed"
                 maxLength="28"
                 onChange={onChangeName}
                 /> 
                 <p className={`hide ${nameError ? "show" : ""}`}> Can't be blank</p>

                 <label> CARD NUMBER </label>
                 <input 
                  className={` ${numberError ? "warning" : ""}`}
                 type="text"
                 name="number"
                 placeholder="e.g. 1234 5678 9123 0000"
                 maxLength={16}
                 onChange={onChangeNumber}
                 
                
                 /> 
                 <p className={`hide ${numberError ? "show" : ""}`}> Wrong format </p>

                 <div className='form-bottom'> 
                   <div className='bottom-left'> 
                   <label> EXP. DATE (MM/YY)</label>
                   <div className='date'> 
                   <input 
                    className={` ${dateError ? "warning" : ""}`}
                    type="text"
                    name="number"
                    placeholder="MM"
                    maxLength={2}
                    onChange={onChangeMonth}
                    /> 
         
                   <input 
                    className={` ${dateError ? "warning" : ""}`}
                    type="text"
                    name="number"
                    placeholder="YY"
                    maxLength={2}
                    onChange={onChangeYear}
                
                    /> 
                       
                   </div>
                   <p className={`hide ${dateError ? "show" : ""}`}> Can't be blank</p>
             
                   </div>

                   <div className='bottom-right'> 
           
                   <div className='cvc'> 
                   <label> CVC </label>
                 <input 
                  className={` ${cvcError ? "warning" : ""}`}
                 type="text"
                 name="number"
                 placeholder="e.g. 123"
                 maxLength={3}
                 onChange={onChangeCvc}
                 /> 
              
                 </div>
                 <p className={`hide ${cvcError ? "show" : ""}`}> Can't be blank</p>
                   </div>
                 </div>

                <button className='button'> Confirm </button>
               </form>
             </section>}
        </main>
    </>
  );
}

export default App;





// const [name, setName] = useState("");
// const [number, setNumber] = useState("");

// function onChangeName(event) {
// event.preventDefault();
// setName(event.target.value);
// }

// function onChangeNumber(event) {
// event.preventDefault();
// setNumber(event.target.value);
// }


// <form> 
// <input
// type="text"
// placeholder='e.g Mert Uzel'
// name="name"
// onChange={onChangeName}
// /> 

// <input
// type="number"
// placeholder='e.g 2424 5555 2322 8754'
// name="number"
// onChange={onChangeNumber}
// />
// </form>