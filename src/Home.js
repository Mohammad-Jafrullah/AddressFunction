import React, { useEffect, useState } from 'react';
import './Home.css';
import { useJsApiLoader, GoogleMap, LoadScript } from '@react-google-maps/api';

export default function Home() {

    //   *********************************************************************************

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAZdAWWSIwyoRVeOnMTctWYSsWI3wdMnEM",
    })

    // if(isLoaded){
    //     return <h1>Loading....</h1>;
    // }

    //   *********************************************************************************

    const getLocalData = () => {
        const data = localStorage.getItem("addresses");
        if (data) {
            return JSON.parse(data);
        }
        else {
            return [];
        }
    }

    const [address, setAddress] = useState("");
    const [data, setData] = useState(getLocalData());
    const [history, setHistory] = useState("");
    const [hight, setHight] = useState({ height: '150px' });
    const [isHover, setIsHover] = useState(false);
    const [city, setCity] = useState("India");
    const addressLink = "https://maps.google.com/maps?q=varanasi%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed";
    // const apiKey = "AIzaSyAZdAWWSIwyoRVeOnMTctWYSsWI3wdMnEM";

    // **************************************************

    const getAddress = (e) => {
        e.preventDefault();
        const dta = {
            id: new Date().getTime().toString(),
            address: address,
            classIcon: "fa-regular fa-bookmark"
        }
        // navigate({ state: { value: dta } })
        setData([...data, dta]);
        setCity(address);
        console.log(address);

        setAddress("");
    }

    //LocalStorage
    useEffect(() => {
        localStorage.setItem("addresses", JSON.stringify(data));
    }, [data]);

    //Delete Address

    const deletAddress = (id) => {
        const updatedItems = data.filter((element) => {
            return element.id !== id;
        })
        setData(updatedItems);
        localStorage.setItem("addresses", JSON.stringify(updatedItems));
    }

    //Write Address

    const writeAddress = (id) => {
        data.map((e) => {
            if (e.id === id) {
                setAddress(e.address);
            }
        })
    }

    // Input
    const handleFocus = () => {
        setHistory(
            <div className="history-home-box" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <h3>History</h3>
                {[...data].reverse().slice(0, 5).map((element) => {
                    return (
                        <>
                            <div className="history-home" key={element.id}>
                                <p><i className="fa-solid fa-location-dot"></i>{element.address}</p>
                                <div className="btns">
                                    <button onClick={() => writeAddress(element.id)}><i className="fa-solid fa-pen-to-square"></i></button>
                                    <button onClick={() => deletAddress(element.id)}><i className="fa-solid fa-trash-can"></i></button>
                                </div>
                            </div>
                            <hr />
                        </>
                    )
                })}
            </div>
        );
        { data.length === 0 ? setHight({ height: '150px' }) : setHight({ height: '600px' }) }
    }
    // *************************
    const handleBlur = () => {
        if (isHover === true) {
            setHistory(
                <div className="history-home-box" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    <h3>History</h3>
                    {[...data].reverse().slice(0, 5).map((element) => {
                        return (
                            <>
                                <div className="history-home" key={element.id}>
                                    <p><i className="fa-solid fa-location-dot"></i>{element.address}</p>
                                    <div className="btns">
                                        <button onClick={() => writeAddress(element.id)}><i className="fa-solid fa-pen-to-square"></i></button>
                                        <button onClick={() => deletAddress(element.id)}><i className="fa-solid fa-trash-can"></i></button>
                                    </div>
                                </div>
                                <hr />
                            </>
                        )
                    })}
                </div>
            );
            if (data.length === 0) {
                setHight({ height: '150px' });
            } else {
                setHight({ height: '600px' });
            }
        } else {
            setHistory("");
            setHight({ height: '150px' });
        }
    }

    // ********************************************************************

    useEffect(() => {
        deletAddress();
        writeAddress();
    }, [address]);

    return (
        <>
            <div className="home-main-body">
                <div className="search-box" style={hight}>
                    <form action="" onSubmit={getAddress}>
                        <input onFocus={handleFocus} onBlur={handleBlur} type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter Address' required />
                        <button type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                    {data.length === 0 ? (
                        <h1></h1>
                    ) : (
                        history
                    )}
                </div>
                <div className="show-map">
                    {isLoaded ? (
                        <>
                            {/* <GoogleMap
                                center={{ lat: 48.8584, lng: 2.2945 }}
                                zoom={15}
                                mapContainerStyle={{ width: '100%', height: '100%' }}
                            >
                                <></>
                            </GoogleMap> */}
                            <iframe src="https://maps.google.com/maps?q=noida%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width='100%' height='100%' allowFullscreen />
                        </>
                    ) : (
                        <div className="loading-animation-container">
                            <div className="loading-spinner"></div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
