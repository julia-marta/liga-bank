import FormWrapper from "../form-wrapper/form-wrapper";
import FormFieldset from "../form-fieldset/form-fieldset";
import FormCalendar from "../form-calendar/form-calendar";
import Button from "../button/button";
import Icon from "../icon/icon";
import {CONVERTER_FIELDS} from "../../const";

const ConverterForm = () => {

  return (
    <form className="converter__form form">
      <FormWrapper>
        {CONVERTER_FIELDS.map((item, i) => (
          <FormFieldset key ={i + 1} type={item.type} label={item.label} base={item.currency} />
        ))}
        <Icon name={`arrows`} width={56} height={36} />
      </FormWrapper>
      <FormWrapper>
        <FormCalendar />
        <Button type={`submit`} name={`form__to-save`} label={`Сохранить результат`} />
      </FormWrapper>
    </form>
  );
};

export default ConverterForm;