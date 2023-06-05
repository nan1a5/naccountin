import React from "react";
import './Tooltip.scss';

interface TooltipProps {
    children?: React.ReactNode;
    title: string;
}

const Tooltip: React.FC<TooltipProps> = (props) => {
    const { children, title } = props;

    const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {

    }
    const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
        
    }

    return (
        <div className="Tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
        </div>
    );
}