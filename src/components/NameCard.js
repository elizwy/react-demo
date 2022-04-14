import React from "react";
/**
 * react 中函数是纯函数,不可变更输入参数值. statelesss
 * @param props 
 * @returns 
 */
const NameCard = (props) => {
        const { name, number, isHuman, tags} = props
        return(
            <div className="alert alert-success">
                <h4 className="alert-heading">{name}</h4>
                <ul>
                    <li>电话:{number}</li>
                    <li>{isHuman ? "人类" : "外星人"}</li>
                    <p>
                        {
                            tags.map((tag,index)=>(
                                <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
                            ))
                        }
                    </p>
                </ul>
            </div>
        )
}

export default NameCard;