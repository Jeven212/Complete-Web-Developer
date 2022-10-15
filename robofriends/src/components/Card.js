import React from "react";
import "./Card.css";

const Card = ({ id, name, email }) => {
    return (
        <div className="card flex bg-light-green grow shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="RoboPic" />
            <div className="text">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

const CardList = ({ robots }) => {
    const cardArray = robots.map((robot, i) => {
        return <Card 
            key={robots[i].id} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}/>;
    });

    return (
        <div className="grid">
            {cardArray}
        </div>
    );
}

export {Card, CardList};