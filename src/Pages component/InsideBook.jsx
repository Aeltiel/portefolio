import { useState, useEffect } from "react"

function InsideBook({data}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [])

    if (loading) {
        return (<div></div>)
    } else {
        return (
                <div className="inside__Container">
                    {data}
                </div>
        )
    }

}
export default InsideBook