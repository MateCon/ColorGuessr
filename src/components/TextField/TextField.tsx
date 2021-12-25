import { FC } from "react";
import { useField, FieldAttributes } from "formik";
import { TextField as TextFieldTag } from "@material-ui/core";

const TextField: FC<FieldAttributes<{}>> = ({
	placeholder,
	type,
	...props
}) => {
	const [field, meta] = useField<{}>(props);
	const errorText = meta.error && meta.touched ? meta.error : "";

	return (
		<TextFieldTag
			placeholder={placeholder}
			{...field}
			helperText={errorText}
			error={!!errorText}
			type={type ? type : "text"}
		/>
	);
};

export default TextField;
