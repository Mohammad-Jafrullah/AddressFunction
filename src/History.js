import React, { useState, useEffect } from 'react';
import './History.css';
import { useLocation } from 'react-router-dom';

export default function History(props) {
    const getLocalData = () => {
        const data = localStorage.getItem("addresses");
        if (data) {
            return JSON.parse(data);
        }
        else {
            return [];
        }
    }



    const location = useLocation();
    const [allData, setAllData] = useState(getLocalData());
    const [hight, setHight] = useState({ height: '800px' });
    const [save, setSave] = useState("save");

    useEffect(() => {
        if (allData.length > 6) {
            setHight({ height: `${allData.length / 7 * 800}px` });
        }
        else {
            setHight({ height: `800px` });
        }
    }, [allData]);

    //Delete Address

    const deletAddress = (id) => {
        const updatedItems = allData.filter((element) => {
            return element.id !== id;
        })
        setAllData(updatedItems);
        localStorage.setItem("addresses", JSON.stringify(updatedItems));
        console.log(location);
    }

    //Save Address

    const saveAddress = (index) => {
        const updatedArray = allData.map((element, i) => {
            if (element.id === index) {
                if (element.classIcon === "fa-regular fa-bookmark") {
                    return { ...element, classIcon: "fa-solid fa-bookmark" };
                } else {
                    return { ...element, classIcon: "fa-regular fa-bookmark" };
                }
            }
            return element;
        });

        setAllData(updatedArray);
        localStorage.setItem("addresses",JSON.stringify(updatedArray));
    };


    return (
        <>
            <div className="history-main-body" style={hight}>
                {[...allData].reverse().map((element) => {
                    return (
                        <div className="history-box">
                            <div className="icon-add">
                                <i className="fa-solid fa-location-dot"></i>
                                <p>{element.address}</p>
                            </div>
                            <div className="btns">
                                <button onClick={() => saveAddress(element.id)}><i className={element.classIcon}></i></button>
                                <button onClick={() => deletAddress(element.id)}><i className="fa-solid fa-trash-can"></i></button>
                            </div>
                        </div>
                    )
                })}
                {allData.length === 0 ? (
                    <h1></h1>
                ) : (
                    <button className='clear' onClick={() => {
                        setAllData([]);
                        localStorage.setItem("addresses", JSON.stringify([]));
                    }}
                    >Clear All</button>
                )}
            </div>
        </>
    )
}
