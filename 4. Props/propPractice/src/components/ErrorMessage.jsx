const ErrorMessage = ({ foodItems }) => {
          let items = [
            "Protein Powder",
            " Whey Protein",
            "Casein Protein",
            "Branched-Chain Amino Acids (BCAAs)",
            "Creatine Monohydrate",
          ];

    return <>
        {foodItems.length === 0 && <h3>I am still hungry.</h3>}
        </>
};
export default ErrorMessage;
