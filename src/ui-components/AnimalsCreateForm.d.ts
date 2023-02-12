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
export declare type AnimalsCreateFormInputValues = {
    name?: string;
};
export declare type AnimalsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnimalsCreateFormOverridesProps = {
    AnimalsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnimalsCreateFormProps = React.PropsWithChildren<{
    overrides?: AnimalsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AnimalsCreateFormInputValues) => AnimalsCreateFormInputValues;
    onSuccess?: (fields: AnimalsCreateFormInputValues) => void;
    onError?: (fields: AnimalsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnimalsCreateFormInputValues) => AnimalsCreateFormInputValues;
    onValidate?: AnimalsCreateFormValidationValues;
} & React.CSSProperties>;
export default function AnimalsCreateForm(props: AnimalsCreateFormProps): React.ReactElement;
