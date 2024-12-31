import { useState } from "react";
import { Checks } from "../components/Checks";

type UseChecksResult = [boolean, () => JSX.Element];

export const useChecks = (labels: string[]): UseChecksResult => {
  const [checkList, setCheckList] = useState([false, false, false]);

  const handleCheckClick = (index: number) => {
    setCheckList((checks) => checks.map((c, i) => (i === index ? !c : c)));
  };

  const isAllChecked = checkList.every((x) => x);

  const renderChecks = () => (
    <Checks labels={labels} checkList={checkList} onCheck={handleCheckClick} />
  );

  return [isAllChecked, renderChecks];
};
