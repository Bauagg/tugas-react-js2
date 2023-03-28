import React, { useState } from 'react';
import './module.css';
import Loging from './loging';



const Header = () => {
    const [log, setLog] = useState(false)

    const newLog = () => {
        setLog(true)
    }

    if (log) {
        return (
            <div>
                <Loging />
            </div>
        )
    }

    return (
        <div className="container-1">
            <div className="header">
                <h1>Tugas Eduwork</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br></br>id necessitatibus repellendus iure
                    cumque corrupti distinctio<br></br>consequatur hic optio eius cum veritatis ipsam libero
                    nam,<br></br>molestiasmaiores laborum beatae suscipit? </p>
                <button type="submit" className="btn-1" onClick={newLog}>Masuk</button>
                <button type="submit" className="btn-1">Daftar</button>
            </div>

            <div className="Form-search">
                <div className="input-group">
                    <input type="search" className="form-control" placeholder="search" aria-label="Username" aria-describedby="basic-addon" />
                    <button type="submit" className="btn-sum">Submit</button>
                </div>
            </div>
        </div>
    )
}
export default Header;