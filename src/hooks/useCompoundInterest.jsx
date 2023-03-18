import { useState } from "react";

const formatCurrency = (number) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(number);
};

function useCompoundInterest() {
  const [interestRateFrequency, setInterestRateFrequency] = useState("yearly");
  const [periodFrequency, setPeriodFrequency] = useState("yearly");

  const [interestRate, setInterestRate] = useState("");
  const [period, setPeriod] = useState("");
  const [initialValue, setInitialValue] = useState("");
  const [monthlyValue, setMonthlyValue] = useState("");

  const cleanCalculator = () => {
    setInterestRateFrequency("yearly");
    setPeriodFrequency("yearly");
    setInterestRate("");
    setPeriod("");
    setInitialValue("");
    setMonthlyValue("");
    setResults({ total: "", totalInvested: "", interest: "" });
  };

  const calculateInterest = () => {
    let numberOfTimesInterestCompounds = 12;
    let t = period;
    let r = interestRate;
    if (periodFrequency === "monthly") {
      t = period / 12;
    }
    // if interest rate is by month, then multiply by 12
    if (interestRateFrequency === "monthly") {
      r *= 12;
    }
    const nT = t * numberOfTimesInterestCompounds;
    const decimalInterestRate = r / 100;
    const rN = decimalInterestRate / numberOfTimesInterestCompounds;
    const calcInterest = Math.pow(1 + rN, nT);

    const total = parseFloat(
      initialValue * calcInterest + (monthlyValue * (calcInterest - 1)) / rN
    ).toFixed(2);

    const totalInvested = parseFloat(initialValue + monthlyValue * nT).toFixed(
      2
    );
    const interest = parseFloat(total - totalInvested).toFixed(2);

    return {
      total: formatCurrency(total),
      totalInvested: formatCurrency(totalInvested),
      interest: formatCurrency(interest),
    };
  };

  return {
    interestRateFrequency,
    setInterestRateFrequency,
    periodFrequency,
    setPeriodFrequency,
    interestRate,
    setInterestRate,
    period,
    setPeriod,
    initialValue,
    setInitialValue,
    monthlyValue,
    setMonthlyValue,
    cleanCalculator,
    calculateInterest,
  };
}

export default useCompoundInterest;
