import BreadCrumbs from '/src/components/BreadCrumbs/BreadCrumbs'
import AccountControl from '/src/components/AccountControl/AccountControl'
import "./Header.scss"

export default function Header() {
    return (
        <div className='st-header__container'>
            <BreadCrumbs></BreadCrumbs>
            <AccountControl></AccountControl>
        </div> 
    )
}