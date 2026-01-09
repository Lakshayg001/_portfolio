import TextRotator from "./TextRotator";

const HeroTexts = () => {
    // Get the name parts
    const nameParts = "Lakshay Goel".split(" ");
    const firstName = "Lakshay"
    const middleName = ""
    const lastName = "Goel";

    return (
        <>
            <h3 className="font-poppins text-2xl max-sm:text-xl">My Name is</h3>
            <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl ">
                {firstName} {middleName} <br /> {lastName} .
            </h1>
            <TextRotator />
        </>
    );
};
export default HeroTexts;
