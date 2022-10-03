import Squares from "./Squares";
import EqualAndCircle from "./EqualAndCircle";

export default function Main(){
    return(
        <main>
            <div className={'squaresAndEAC'}>
                <Squares/>
                <EqualAndCircle/>
            </div>
            <div className={'rectangle'}>
                <p>ABC</p>
            </div>
        </main>
    )
}