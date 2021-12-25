import { FC, useEffect, useState } from 'react';
import "./DisplayRound.scss";

interface Props {
    round: number;
}

const DisplayRound: FC<Props> = ({ round }) => {
    const [bitArr, setBitArr] = useState<Array<boolean>>(new Array(5).fill(false));

    useEffect(() => {
        const arr = new Array(5).fill(false);
        for (let i = 0; i < round; i++)
            arr[i] = true;
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