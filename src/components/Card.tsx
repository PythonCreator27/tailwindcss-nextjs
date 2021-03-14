const Card: React.FC<{ imgSrc: string; imgAlt: string; title: string }> = ({
    children,
    imgSrc,
    imgAlt,
    title
}) => {
    return (
        <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
            <div className="flex-shrink-0">
                <img src={imgSrc} alt={imgAlt} className="h-12 w-12" />
            </div>
            <div className="ml-6 pt-1">
                <h4 className="text-xl text-gray-900">{title}</h4>
                <p className="text-base text-gray-600">{children}</p>
            </div>
        </div>
    );
};

export default Card;
