import meals from './meals-data';
import styles from './Meals.module.css';
import Head from 'next/head';
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <title>Meals</title>
        </Head>
export default function Meals() {
    return (
        
        <div className="container">
            <h1 className="title__main">Meal Finder</h1>
        <div className="flex-box">
            <form id="submit" className="flex-box">
                <input type="text" id="search" placeholder="Search for meals or keywords"/>
                <button className="btn__search" type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>
            <button className="btn__random" id="random">
                <i className="fas fa-random"></i>
            </button>
        </div>
        <div id="result-heading" className="title__search"></div>
        <div id="meals" className="gallery"></div>
        <div id="single-meal"></div>
    </div>

    )
}
