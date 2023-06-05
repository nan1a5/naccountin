import React from "react";
import './Progress.scss';

interface ProgressProps {
    percent: number;
    width?: string;
}

const Progress: React.FC<ProgressProps> = (props) => {
    const { percent, width="100%" } = props;
    // 鼠标hover时在光标处显示百分比
    // const [showPercent, setShowPercent] = useState(false);
    const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {

    }

    return (
        <div className="Progress" style={{width}}>
            <div className="progress_bx" onMouseEnter={handleMouseEnter}>
                <div className="progress" style={{ width: `${percent}%` }}></div>
            </div>
            {/* <div className="progress_num">{percent}%</div> */}
        </div>
    );
}

export default Progress;