const disposableLogic = () => {
    const afterTax = 46722
    const alaIntCost = parseInt(alaTotalCost.slice(1).split(",").join(""));
    const alaSum = afterTax - alaIntCost
    const alaFinalSum = commafy(alaSum)
}