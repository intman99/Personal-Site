import React from "react";
import Projects from "./Projects";

function Entry(entry){
    return (
    <Projects
        key = {entry.id}
        title = {entry.title}
        components = {entry.components}
        text = {entry.text}
    />
    )
};

export default Entry;