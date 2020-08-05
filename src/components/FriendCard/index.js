import React from "react";
import "./style.css";


function FriendCard(props) {


    return (
        <div className="card">
            <div className="img-container">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>NAME:</strong>{props.name}
                    </li>
                    <li>
                        <strong>OCCUPATION:</strong>{props.occupation}
                    </li>
                    <li>
                        <strong>LOCATION:</strong>{props.location}
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default FriendCard;