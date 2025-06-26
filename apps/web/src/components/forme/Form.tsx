import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import Input from "../input/Input";
import Button_submit from "../submit_button/Submit_button";
import Switch from "../switch/Switch";
import type { RoomData } from "@repo/zodscema/RoomData";
const { fieldContext, formContext } = createFormHookContexts();

const { useAppForm } = createFormHook({
  fieldComponents: {
    Input,
  },
  formComponents: {
    Button_submit,
    Switch,
  },
  fieldContext,
  formContext,
});

const From = () => {
  const form = useAppForm({
    defaultValues: {
      name: "",
      add: {
        name: "",
      },
    },
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },

    validators: {
      onChange: (values) => {
        if (values.value.name.length < 3) {
          return {
            name: "Roomname must be at least 3 characters long",
          };
        }
      },
    },
  });
  return (
    <form className="flex flex-col  w-full max-w-fit p-4  shadow-md rounded-lg">
      <span className="text-xl font-mono">Room</span>
      <form.AppField
        name="name"
        children={(field) => <field.Input lable="Room name" />}
      />
      <form.AppField
        name="add.name"
        children={(field) => <field.Input lable="Add name" />}
      />
    </form>
  );
};

export default From;
