/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Animals } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AnimalsUpdateFormInputValues = {
    name?: string;
};
export declare type AnimalsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnimalsUpdateFormOverridesProps = {
    AnimalsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnimalsUpdateFormProps = React.PropsWithChildren<{
    overrides?: AnimalsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    animals?: Animals;
    onSubmit?: (fields: AnimalsUpdateFormInputValues) => AnimalsUpdateFormInputValues;
    onSuccess?: (fields: AnimalsUpdateFormInputValues) => void;
    onError?: (fields: AnimalsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnimalsUpdateFormInputValues) => AnimalsUpdateFormInputValues;
    onValidate?: AnimalsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AnimalsUpdateForm(props: AnimalsUpdateFormProps): React.ReactElement;
