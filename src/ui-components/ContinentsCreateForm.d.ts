/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContinentsCreateFormInputValues = {
    name?: string;
};
export declare type ContinentsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContinentsCreateFormOverridesProps = {
    ContinentsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContinentsCreateFormProps = React.PropsWithChildren<{
    overrides?: ContinentsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContinentsCreateFormInputValues) => ContinentsCreateFormInputValues;
    onSuccess?: (fields: ContinentsCreateFormInputValues) => void;
    onError?: (fields: ContinentsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContinentsCreateFormInputValues) => ContinentsCreateFormInputValues;
    onValidate?: ContinentsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContinentsCreateForm(props: ContinentsCreateFormProps): React.ReactElement;
