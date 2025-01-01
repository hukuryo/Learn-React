type Props = {
  name: string;
  onClick: () => void;
};

export const TestComponent = (props: Props) => {
  console.log("Rendered");
  return <div onClick={props.onClick}>Hello {props.name}</div>;
};
