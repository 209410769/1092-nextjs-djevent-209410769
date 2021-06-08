import Head from 'next/head'
import Navbar from '../Header/Navbar'
export default function Layout() {
    return (
        <div>
            <Head>
                <title>My portfolio</title>
                <meta name="description" content="Generated by creat next app"/>
            </Head>

            <Navbar />
        </div>
    )
}
