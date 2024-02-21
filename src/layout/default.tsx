import Navbar from "@/components/navbar";

export default function DefaultLayout(page: any) {
     return (
        <>
            <Navbar/>
            <div style={{background: '#23123213', borderRadius: '20x'}}>
                {page}
            </div>
        </>
    )
}