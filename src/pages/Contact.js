import { useEffect } from "react"

export default function Contact() {

    useEffect(function(){
        document.title='Contact'
    }, [])

    return (
        <section className="section">
            <h1 className="section-title">Contact Page</h1>
            <p className="section-decs">
                Kalian bisa menghubungi aku di
                <li>WhatsApp : 012312323131</li>
                <li>Facebook : facebook/dimaskenzo</li>
                <li>Instagram : instagram/dimas-kenzo</li>
             </p>
        </section>
    )
}