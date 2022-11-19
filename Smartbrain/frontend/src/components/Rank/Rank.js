import React from "react";

const Rank = (props) => {
    console.log(props.entries)
    return (
        <div>
            <div className="center white f3">
                {props.name + ", your current rank is ..."}
            </div>
            <div className="center white f1">
                {"#" + props.entries}
            </div>
        </div>
    );
}

export default Rank;