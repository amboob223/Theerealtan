import React from "react";
import Blogbod from "./blogbod"
import { data } from "./BlogData";
import "../blog.css"

function Blog4() {
    return (<div>
        <Blogbod
            title={data[3].title}
            author={data[3].author}
            date={data[3].date}
            body={data[3].body}
            path={data[3].path}
        />
    </div>)
}

export default Blog4;