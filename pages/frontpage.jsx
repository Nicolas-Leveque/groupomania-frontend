import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Frontpage() {
    const user = localStorage.getItem('user')
    const token = localStorage.getItem('token')
    return (
        <div>
            <Header/>
            <div>
                <p>
                    {user}
                    <br/>
                    {token}
                </p>
            </div>
            <Footer/>
        </div>
    )
}
