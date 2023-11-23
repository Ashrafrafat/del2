const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto w-4/12 text-center text-fuchsia-500 my-8">
        <p className="text-yellow-600">---{subHeading}---</p>
        <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>

        </div>
    );
};
export default SectionTitle;