import "./AccountControl.scss"

export default function AccountControl() {
    return (
        <div className="st-account-control__container">
            <div className="st-account-control__avatar">
                <img src="/src/assets/icons/MotiAccountAvatar.png" className="st-account-control__avatar-img"/>
                <span className="st-account-control__avatar-name">Станіслав Костенецький</span>
                <img src="/src/assets/icons/small-arrow-down.svg" className="st-account-control__arrow-down"/>
            </div>
            <div className="st-account-control__modal-container">
                <button className="st-account-control__modal-btn stg-btn_big">
                    <img src="/src/assets/icons/small-arrow-down.svg" className=""/>
                    <span>Settings</span>
                </button>
                <button className="st-account-control__modal-btn stg-btn_big">
                    <img src="/src/assets/icons/small-arrow-down.svg" className=""/>
                    <span>Login</span>
                </button>
            </div>
        </div>
    )
}