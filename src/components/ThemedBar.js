import React from "react";
import ThemeContext from "../theme-context";

const ThemedBar = () => {
    return (
        <ThemeContext.Consumer>
            {
                theme => {
                    console.log(theme)
                    return (
                        <div className="alert mt-5" style={ {backgroudColor: theme.bgColor, color: theme.color } }
                        >
                            样式区域
                            <button className="{theme.classname}">
                                样式按钮
                            </button>
                    
                        </div>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
}

export default ThemedBar