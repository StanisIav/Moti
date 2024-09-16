import "./BreadCrumbs.scss"

export default function BreadCrumbs() {
    return (
        <div className="st-breadcrumbs__container">
            <div className="st-breadcrumbs__part">
                <img className="st-breadcrumbs__part-img" src="/src/assets/icons/pc_icon.png"></img>
                <a href="#" className="stg-link st-breadcrumbs__part-text">Programming</a>
            </div>
            <span className="st-breadcrumbs__delimiter">/</span>
            <div className="st-breadcrumbs__part">
                <img className="st-breadcrumbs__part-img" src="/src/assets/icons/pc_icon.png"></img>
                <a href="#" className="stg-link st-breadcrumbs__part-text">React</a>
            </div>
        </div>
    )
}