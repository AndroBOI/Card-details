function Card({details}) {
    return(
        <div className="card-wrapper">
            <div className="card">
                <div className="icon-wrapper">
                <svg className="icon" width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>

                </div>
                <div className="userNumber">{details.cardNum || "0000 0000 0000 0000"}</div>
                <div className="footer">
                    <div className="userName">{details.name || "NAME"}</div>
                    <div className="date">
                    {`${details.month ? (details.month.length === 1 ? "0" + details.month : details.month) : "00"}/${details.year || "00"}`}
                    </div>
                </div>
            </div>
            <div className="place-holder">
                <div className="userCvc">{details.cvc || "000"}</div>
            </div>
        </div>
    )
}

export default Card