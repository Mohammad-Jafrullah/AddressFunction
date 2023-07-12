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

    // ********************************************************************

    const [allData, setAllData] = useState(getLocalData());
    const [hight, setHight] = useState({ height: '800px' });
    const [saveAdd, setSaveAdd] = useState([]);

    useEffect(() => {
        if (allData.length > 6) {
            setHight({ height: `${allData.length / 7 * 800}px` });
        }
        else {
            setHight({ height: `800px` });
        }
    }, [allData]);

    return (
        <>
            <div className="history-main-body" style={hight}>
                {[...allData].reverse().map((element) => {
                    if (element.classIcon === "fa-solid fa-bookmark") {
                        return (
                            <div className="history-box">
                                <div className="icon-add">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <p>{element.address}</p>
                                </div>
                            </div>
                        )
                    }
                    else{
                        return null;
                    }
                })}
            </div>
        </>
    )
}
