import React from "react";
import { Input, TextArea } from "ui/Inputs";
import { ErrorText } from "ui/Texts";
import { ErrorMessage, useField } from "formik";
import { useSelector } from "react-redux";

export const FormInput = props => {
  const [field, meta, helpers] = useField(props.name);
  const theme = useSelector(state => state.theme);
  return (
    <>
      <Input
        onChangeText={text => helpers.setValue(text)}
        onBlur={() => helpers.setTouched(props.name)}
        placeholder={props.placeholder}
        autoCapitalize="none"
        value={field.value}
        style={{
          borderBottomColor:
            meta.error && meta.touched ? theme.error : theme.onSurface
        }}
        placeholderTextColor={
          meta.error && meta.touched ? theme.darkError : theme.onSurface
        }
        {...props}
      />
      <ErrorMessage component={ErrorText} name={props.name} />
    </>
  );
};

export const FormTextArea = props => {
  const [field, meta, helpers] = useField(props.name);
  const theme = useSelector(state => state.theme);
  return (
    <>
      <TextArea
        onChangeText={text => helpers.setValue(text)}
        onBlur={() => helpers.setTouched(props.name)}
        placeholder={props.placeholder}
        value={field.value}
        style={{
          borderBottomColor:
            meta.error && meta.touched ? theme.error : theme.onSurface
        }}
        placeholderTextColor={
          meta.error && meta.touched ? theme.darkError : theme.onSurface
        }
        {...props}
      />
      <ErrorMessage component={ErrorText} name={props.name} />
    </>
  );
};
