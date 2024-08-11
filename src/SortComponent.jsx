import React, {
    useState,
} from "react";

const SortComponent = ({
    bots,
    setSortedBots,
}) => {
    const selectOptions = [
        "Health",
        "Damage",
        "Armor",
    ];
    const [
        selectValue,
        SetselectValue,
    ] = useState(
        selectOptions[0]
    );

    function handleChange(
        event
    ) {
        console.log(
            event.target.value
        );
        SetselectValue(
            event.target.value
        );

        handleSort(event.target.value);
    }
    //   function handleSort(parameter = "b") {
    //     const arr = [{a: 11, b: 3}, {a: 3, b: 4}, {a: 2, b: -3}]
    //     const arrSorted = arr.sort((a, b) => a[parameter] > b[parameter] ? 1 : -1);
    //     console.log(arrSorted);
    // }
    function handleSort(parameter) {
        const botsArrSorted =
        [...bots].sort((a, b) =>
                a[parameter] >
                    b[parameter]
                    ? 1
                    : -1
            );
        setSortedBots(botsArrSorted);
        console.log(botsArrSorted);
        console.log("l",bots);
    }

    return (
        <div>
            <div className="sort-container">
                <div className="sort-by">
                    Sort By :
                </div>
                <div className="select-container">
                    <select
                        className="select-box"
                        value={selectValue}
                        name=""
                        id=""
                        onChange={
                            handleChange
                        }>
                        {selectOptions.map(
                            (
                                option,
                                index
                            ) => {
                                return (
                                    <option
                                        key={index}
                                        value={option.toLowerCase()}>
                                        {option}
                                    </option>
                                );
                            }
                        )}
                    </select>
                </div>
                
            </div>
        </div>
    );
};

export default SortComponent;
