import { FunctionComponent } from "react";

type Props = {
  labels: string[];
  checkList: boolean[];
  onCheck: (index: number) => void;
};

export const Checks: FunctionComponent<Props> = ({
  labels,
  checkList,
  onCheck,
}) => {
  return (
    <ul>
      {labels.map((label, idx) => (
        <li key={idx}>
          <label>
            <input
              type="checkbox"
              checked={checkList[idx]}
              onClick={() => onCheck(idx)}
            />
            {label}
          </label>
        </li>
      ))}
    </ul>
  );
};
