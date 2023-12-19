export const CustomPrevArrow = (props) => (
    <div
        className={'custom-prev-arrow'}
        onClick={props.onClick}
    >
        <i className="fa-solid fa-chevron-left"></i>
    </div>
);

export const CustomNextArrow = (props) => (
    <div
        className={'custom-next-arrow'}
        onClick={props.onClick}
    >
        <i className="fa-solid fa-chevron-right"></i>
    </div>
);
