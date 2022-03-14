import { useEffect } from "react"

export default function Profile() {

    useEffect(function () {
        document.title = 'Profile'
    }, [])

    return (
        <section className="section">
            <h1 className="section-title">Profile Page</h1>
            <p className="sectoin-desc">Selamat Datang di Website Berita Antariksa,
                Halo semua aku adalah seorang front end web developer</p>
        </section>
    )
}