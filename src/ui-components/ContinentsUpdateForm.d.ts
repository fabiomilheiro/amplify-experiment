/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Continents } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContinentsUpdateFormInputValues = {
    name?: string;
};
export declare type ContinentsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContinentsUpdateFormOverridesProps = {
    ContinentsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContinentsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContinentsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    continents?: Continents;
    onSubmit?: (fields: ContinentsUpdateFormInputValues) => ContinentsUpdateFormInputValues;
    onSuccess?: (fields: ContinentsUpdateFormInputValues) => void;
    onError?: (fields: ContinentsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContinentsUpdateFormInputValues) => ContinentsUpdateFormInputValues;
    onValidate?: ContinentsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContinentsUpdateForm(props: ContinentsUpdateFormProps): React.ReactElement;
