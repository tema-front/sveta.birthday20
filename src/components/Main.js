import { useState } from "react"
import { HappyBirthday } from "./HappyBirthday";
import { Welcome } from "./Welcome"

export const Main = () => {
    const  [isID, setIsID] = useState(false);

    const handleID = () => setIsID(true);

    return (
        <>
        {!isID ? <Welcome handleID={handleID} /> : <HappyBirthday />}
        </>
    )
}