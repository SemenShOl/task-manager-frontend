import React, {
  ReactNode,
  FC,
  ReactPortal,
  JSXElementConstructor,
  ReactElement,
} from "react";
import { useForm } from "react-hook-form";
import { JsxElement } from "typescript";
export type FormProps = {
  children: ReactNode[];
  onSubmit: () => void;
  defaultValues: string[];
};

export const Form: FC<FormProps> = ({ defaultValues, children, onSubmit }) => {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child: any) => {
        return child?.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
              },
            })
          : child;
      })}
    </form>
  );
};
