import classNames from "classnames"

import "./container.scss"

const Container = ({className, children, ...props}) => {
    return (
        <div className={classNames("container", className)} {...props}>
            { children }
        </div>
    )
}

export default Container