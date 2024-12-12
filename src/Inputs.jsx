import { useState, useEffect } from 'react';

function Inputs({setDetails}) {
    
    const [name, setName] = useState('');
    const [cardNum, setCardNum] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [cvc, setCvc] = useState('')



    const [error, setError] = useState({
        name: false,
        cardNum: false,
        month: false,
        year: false,
        cvc: false
    });

    function handleError() {
        const errors = {
            name: name.trim() === "",
            cardNum: cardNum.trim() === "",
            month: month.trim() === "",
            year: year.trim() === "",
            cvc: cvc.trim() === "",
        }

        setError(errors)

     

        setDetails({name, cardNum, month, year, cvc})

        document.getElementById('fullName').style.border = errors.name ? 
        "solid 1.5px red"
        : "solid 1.5px hsl(278, 75%, 30%)"

        document.getElementById('number').style.border = errors.cardNum ? 
        "solid 1.5px red"
        : "solid 1.5px hsl(278, 75%, 30%)"

        document.getElementById('month').style.border = errors.month ? 
        "solid 1.5px red"
        : "solid 1.5px hsl(278, 75%, 30%)"

        document.getElementById('year').style.border = errors.year ? 
        "solid 1.5px red"
        : "solid 1.5px hsl(278, 75%, 30%)"

        document.getElementById('cvc').style.border = errors.cvc ? 
        "solid 1.5px red"
        : "solid 1.5px hsl(278, 75%, 30%)"

        if(Object.values(error).some(e => e)) {
            return
        }

        
        
    }


    function handleCardNmber(e) {
        let inputCardNumber = e.target.value.replace(/\D/g, '')
        let formatCardNumber = ''

        if (inputCardNumber.length > 16) {
            inputCardNumber = inputCardNumber.slice(0, 16)
        }

        for(let i = 0; i < inputCardNumber.length; i+=4) {
            formatCardNumber += inputCardNumber.slice(i, i + 4) + ' '
        }
        
        setCardNum(formatCardNumber.trim())

    }


    function handleMonth(e) {
        const monthInput = e.target.value

        

        if (/^\d*$/.test(monthInput) && monthInput.length <= 2) {
            const numMonth = parseInt(monthInput, 10);
            if(numMonth > 12) {
                return
            } else {
                setMonth(monthInput)
            }

            
        }
    }

    function handleYear(e) {
        const yearInput = e.target.value

        if (/^\d*$/.test(yearInput) && yearInput.length <= 2) {
            setYear(yearInput);
        }
    }

    function handleCvc(e) {
        const cvcInput = e.target.value

        if (/^\d*$/.test(cvcInput) && cvcInput.length <= 3) {
            setCvc(cvcInput);
        }
    }


    return (
        <div className="input-wrapper">
            <div className="container">
                <label htmlFor="fullName">CARDHOLDER NAME</label>
                <input 
                    type="text" 
                    id="fullName" 
                    placeholder="e.g Jane Appleseed" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                {error.name && <p>Can't be blank</p>}

                <label htmlFor="number">CARD NUMBER</label>
                <input 
                    type="text" 
                    id="number" 
                    placeholder="e.g 1234 5678 9123 0000" 
                    onChange={handleCardNmber}
                    value={cardNum}
                />
                {error.cardNum && <p>Can't be blank</p>}

                <div className="inputs">
                    <div className="exp-date">
                        <label className="expDate" htmlFor="expDate">EXP. DATE (MM/YY)</label>
                        <input id="month" type="text" placeholder="MM"
                        onChange={handleMonth}
                        value={month}
                        />

                        <input id="year" type="text" placeholder="YY"
                        onChange={handleYear}
                        value={year}
                        />
                        {error.month && <p>Can't be blank</p>}
                    </div>
                    <div className="cvc-container">
                        <label htmlFor="cvc">CVC</label>
                        <input type="text" id="cvc" placeholder="e.g 123"
                        onChange={handleCvc}
                        value={cvc}
                        />
                        {error.cvc && <p>Can't be blank</p>}
                    </div>
                </div>
                <button id="submit" onClick={handleError}>Confirm</button>
            </div>
        </div>
    );
}

export default Inputs;
