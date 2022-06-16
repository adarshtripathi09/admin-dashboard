import React from 'react';
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
import { useParams } from 'react-router-dom';

const Trash = () => {
    const { idd } = useParams()
    return (
        <>
            <div className="main-wrapper">
                <div className="main-content">
                    <Header />
                    <main>
                        <Sidebar />
                    </main>
                </div>
            </div>
        </>

    )
}

export default Trash;