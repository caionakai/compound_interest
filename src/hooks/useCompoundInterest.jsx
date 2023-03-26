import { useSelector, useDispatch } from "react-redux";
import {
  setInterestRateFrequency,
  setPeriodFrequency,
  setInterestRate,
  setPeriod,
  setInitialValue,
  setMonthlyValue,
  setResults,
} from "../redux/slices/compoundInterestSlice";

const formatCurrency = (number) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(number);
};

function useCompoundInterest() {
  const dispatch = useDispatch();

  const interestRateFrequency = useSelector(
    (state) => state.compoundInterest.interestRateFrequency
  );

  const periodFrequency = useSelector(
    (state) => state.compoundInterest.periodFrequency
  );

  const interestRate = useSelector(
    (state) => state.compoundInterest.interestRate
  );

  const period = useSelector((state) => state.compoundInterest.period);

  const initialValue = useSelector(
    (state) => state.compoundInterest.initialValue
  );

  const monthlyValue = useSelector(
    (state) => state.compoundInterest.monthlyValue
  );

  const dispatchInterestRateFrequency = (value) => {
    dispatch(setInterestRateFrequency(value));
  };

  const dispatchPeriodFrequency = (value) => {
    dispatch(setPeriodFrequency(value));
  };

  const dispatchInterestRate = (value) => {
    dispatch(setInterestRate(value));
  };

  const dispatchPeriod = (value) => {
    dispatch(setPeriod(value));
  };

  const dispatchInitialValue = (value) => {
    dispatch(setInitialValue(value));
  };

  const dispatchMonthlyValue = (value) => {
    dispatch(setMonthlyValue(value));
  };

  const isFormInvalid = () => {
    if (!initialValue || !monthlyValue || !interestRate || !period) return true;
    return false;
  };

  const cleanCalculator = () => {
    dispatchInterestRateFrequency("yearly");
    dispatchPeriodFrequency("yearly");
    dispatchInterestRate("");
    dispatchPeriod("");
    dispatchInitialValue("");
    dispatchMonthlyValue("");
    dispatch(setResults({ total: "", totalInvested: "", interest: "" }));
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

    dispatch(
      setResults({
        total: formatCurrency(total),
        totalInvested: formatCurrency(totalInvested),
        interest: formatCurrency(interest),
      })
    );
  };

  return {
    interestRateFrequency,
    dispatchInterestRateFrequency,
    periodFrequency,
    dispatchPeriodFrequency,
    interestRate,
    dispatchInterestRate,
    period,
    dispatchPeriod,
    initialValue,
    dispatchInitialValue,
    monthlyValue,
    dispatchMonthlyValue,
    cleanCalculator,
    calculateInterest,
    isFormInvalid,
  };
}

export default useCompoundInterest;
