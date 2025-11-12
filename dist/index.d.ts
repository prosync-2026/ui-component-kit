import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { Plugin as Plugin_2 } from 'vue';
import { PublicProps } from 'vue';

declare const __VLS_component: DefineComponent<ProButtonProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, PublicProps, Readonly<ProButtonProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    variant: "primary" | "secondary" | "dark" | "plain";
    size: "sm" | "md" | "lg";
    disabled: boolean;
    loading: boolean;
    fullWidth: boolean;
    iconOnly: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLButtonElement>;

declare const __VLS_component_2: DefineComponent<ProCardProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ProCardProps> & Readonly<{}>, {
    title: string;
    elevated: boolean;
    bordered: boolean;
    hoverable: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_3: DefineComponent<ProInputProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
    blur: (event: FocusEvent) => any;
    focus: (event: FocusEvent) => any;
}, string, PublicProps, Readonly<ProInputProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    disabled: boolean;
    type: "text" | "email" | "password" | "number" | "tel" | "url";
    modelValue: string | number;
    required: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        default?(_: {}): any;
        iconLeft?(_: {}): any;
        iconRight?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLButtonElement;
};

declare function __VLS_template_2(): {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_3(): {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_TemplateResult_2 = ReturnType<typeof __VLS_template_2>;

declare type __VLS_TemplateResult_3 = ReturnType<typeof __VLS_template_3>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const ProButton: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

export declare interface ProButtonProps {
    variant?: 'primary' | 'secondary' | 'dark' | 'plain';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    iconOnly?: boolean;
}

export declare const ProCard: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, __VLS_TemplateResult_2["slots"]>;

export declare interface ProCardProps {
    title?: string;
    elevated?: boolean;
    bordered?: boolean;
    hoverable?: boolean;
}

export declare const ProInput: __VLS_WithTemplateSlots_3<typeof __VLS_component_3, __VLS_TemplateResult_3["slots"]>;

export declare interface ProInputProps {
    modelValue?: string | number;
    label?: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
    disabled?: boolean;
    required?: boolean;
    error?: string;
    hint?: string;
    size?: 'sm' | 'md' | 'lg';
}

export declare const ProSelect: DefineComponent<ProSelectProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: any) => any;
    change: (event: any) => any;
}, string, PublicProps, Readonly<ProSelectProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    onChange?: ((event: any) => any) | undefined;
}>, {
    disabled: boolean;
    filter: boolean;
    placeholder: string;
    required: boolean;
    optionLabel: string;
    optionValue: string;
    showClear: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

export declare interface ProSelectProps {
    modelValue?: any;
    options: any[];
    label?: string;
    placeholder?: string;
    optionLabel?: string;
    optionValue?: string;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    hint?: string;
    filter?: boolean;
    showClear?: boolean;
}

declare const ProsyncUIComponents: Plugin_2;
export { ProsyncUIComponents }
export default ProsyncUIComponents;

export { }
