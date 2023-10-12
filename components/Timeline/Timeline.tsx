import React from "react";

import "./Timeline.css";

interface TimelineProps {
    children: React.ReactNode;
}

export const Timeline: React.FC<TimelineProps> = ({ children }) => {
    return (
        <div className={"timeline"}>
            <ul>
                {React.Children.map(children, child => {
                    const element = React.cloneElement(child as React.ReactElement);

                    return (
                        <li style={element.props.style} className={"timeline-item"}>
                            <div className={"date"}>{element.props.children[0]}</div>
                            <div className={"title"}>{element.props.children[1]}</div>
                            <div className={"descr"}>{element.props.children[2]}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}