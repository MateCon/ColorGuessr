import { FC, useEffect, useState } from 'react';
import "./DisplayRound.scss";

interface Props {
    round: number;
}

const DisplayRound: FC<Props> = ({ round }) => {
    const [bitArr, setBitArr] = useState<Array<boolean>>([false, false, false, false, false]);

    useEffect(() => {
        const arr = [];
        for (let i = 0; i < 5; i++) {
            if (i < round) arr.push(true);
            else arr.push(false);
        }
        setBitArr(arr);
    }, [round, setBitArr]);

    return (
        <div className="display-round">
            {bitArr.map((bit, i) => (
                <div key={i} className={bit ? "fill" : ""} />
            ))}
        </div>
    )
}

export default DisplayRound;