import Navbar from "@/components/navbar"

export default function About() {
    return <h1>About</h1>
}

About.getLayout = function getLayout(page: any) {
    return (
        <>
            <Navbar/>
            <div style={{background: '#23123213', borderRadius: '20x'}}>
                {page}
            </div>
        </>
    )
}