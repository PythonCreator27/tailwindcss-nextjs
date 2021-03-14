const MediaCard: React.FC<{
    title: string;
    desc: string;
    imgAlt: string;
    imgSrc: string;
}> = ({ title, desc, imgAlt, imgSrc }) => {
    return (
        <div className="flex-1 text-gray-700 text-center bg-gray-200 px-5 py-5 m-2 rounded">
            <div className="lg:flex lg:items-center">
                <div className="lg:flex-shrink-0">
                    <img className="rounded-lg lg:w-64" src={imgSrc} alt={imgAlt} />
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6">
                    <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
                        {title}
                    </div>
                    <a
                        href="#"
                        className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                    >
                        {desc}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MediaCard;
