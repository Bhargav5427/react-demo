import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios = () => {

    const [data, setData] = useState([])

    let api = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
            setData(res.data);
        })
    }

    useEffect(() => {
        api();
    }, []);


    return (
        <div className='row'>
            {
                data.map((val, ind) => {
                    return (
                        <div class="card" style={{ width: "18rem" }}>
                            <div class="card-body">
                                <h5 class="card-title">{val.title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{val.id}</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="card-link">Card link</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )



}

export default Axios