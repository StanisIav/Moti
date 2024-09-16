import "./SideBar.scss"

export default function SideBar() {
    return (
        <>
           <div className="st-sidebar__container">
                <div className="st-sidebar__header">
                    <img src="/src/assets/icons/double-arrow-left.png" className="st-sidebar__header-img"/>
                </div>
                <ul className="st-sidebar__list">
                    <li className="st-sidebar__list-item">
                        <img src="/src/assets/icons/pc_icon.png" className="st-sidebar__item-img" />
                        <span className="st-sidebar__item-text">Test page</span>
                        <img src="/src/assets/icons/plus-icon.svg" className="st-sidebar__icon-plus"/>
                    </li>
                    <li className="st-sidebar__list-item">
                        <img src="/src/assets/icons/pc_icon.png" className="st-sidebar__item-img"></img>
                        <span className="st-sidebar__item-text">Test page</span>
                        <img src="/src/assets/icons/plus-icon.svg" className="st-sidebar__icon-plus"/>
                        <ul className="st-sidebar__list">
                            <li className="st-sidebar__list-item">
                                <img src="/src/assets/icons/pc_icon.png" className="st-sidebar__item-img"></img>
                                <span className="st-sidebar__item-text">Test page</span>
                                <img src="/src/assets/icons/plus-icon.svg" className="st-sidebar__icon-plus"/>
                            </li>        
                            <li className="st-sidebar__list-item">
                                <img src="/src/assets/icons/pc_icon.png" className="st-sidebar__item-img"></img>
                                <span className="st-sidebar__item-text">Test page</span>
                                <img src="/src/assets/icons/plus-icon.svg" className="st-sidebar__icon-plus"/>
                            </li>
                        </ul>
                    </li>
                    <li className="st-sidebar__list-item">
                        <img src="/src/assets/icons/pc_icon.png" className="st-sidebar__item-img"></img>
                        <span className="st-sidebar__item-text">Test page</span>
                        <img src="/src/assets/icons/plus-icon.svg" className="st-sidebar__icon-plus"/>
                    </li>
                    <li className="st-sidebar__list-item">
                        <img src="/src/assets/icons/pc_icon.png" className="st-sidebar__item-img"></img>
                        <span className="st-sidebar__item-text">Test page</span>
                        <img src="/src/assets/icons/plus-icon.svg" className="st-sidebar__icon-plus"/>
                    </li>
                    <li className="st-sidebar__list-item">
                        <img src="/src/assets/icons/pc_icon.png" className="st-sidebar__item-img"></img>
                        <span className="st-sidebar__item-text">Test page</span>
                        <img src="/src/assets/icons/plus-icon.svg" className="st-sidebar__icon-plus"/>
                        <ul className="st-sidebar__list">
                            <li className="st-sidebar__list-item">
                                <img src="/src/assets/icons/pc_icon.png" className="st-sidebar__item-img"></img>
                                <span className="st-sidebar__item-text">Test page</span>
                                <img src="/src/assets/icons/plus-icon.svg" className="st-sidebar__icon-plus"/>
                            </li>
                        </ul>
                    </li>
                </ul>
           </div>
        </>
    )
}