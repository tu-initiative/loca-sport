export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

export const Button = (props: ButtonProps) => {
  return <button {...props} />;
};
