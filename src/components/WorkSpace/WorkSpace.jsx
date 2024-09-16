import WorkSpaceElement from '/src/components/WorkSpaceElement/WorkSpaceElement'
import TextElement from '/src/components/TextElement/TextElement'
import "./WorkSpace.scss"

export default function WorkSpace() {
    return (
        <div className="st-work-space__block">
            <div className="st-work-space__container">
                <div className=''></div>
                <div className=''>
                    <div className='st-work-space__head-container'>
                        <img src="/src/assets/icons/work-space-icon.png" className="st-work-space__img"></img>
                        <div className="st-work-space__choose-emoji"></div>
                        <p className="st-work-space__title stg-h1">Title</p>
                    </div>
                </div>
                <div className=''></div>
                <div className=''></div>
                <div className=''>
                    <div className="st-work-space__elements-wrap">
                        <WorkSpaceElement>
                            <TextElement></TextElement>
                        </WorkSpaceElement>
                        <WorkSpaceElement>
                            <TextElement></TextElement>
                        </WorkSpaceElement>
                    </div>
                </div>
                <div className=''></div>
            </div>
        </div>
    )
}