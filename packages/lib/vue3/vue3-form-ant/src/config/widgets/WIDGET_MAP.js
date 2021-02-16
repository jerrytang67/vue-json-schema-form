/**
 * Created by Liu.Jun on 2020/4/21 18:23.
 */

// widget 组件对应elementUi 配置表

import { defineComponent, h } from 'vue';
import { resolveComponent } from '@lljj/vjsf-utils/vue3Utils';
import widgetComponents from './index';

const {
    CheckboxesWidget,
    RadioWidget,
    SelectWidget,
    TimePickerWidget,
    DatePickerWidget,
    DateTimePickerWidget
} = widgetComponents;

export default {
    types: {
        boolean: 'el-switch',
        string: defineComponent({
            setup(props, { attrs, slots }) {
                return () => {
                    // 太任性antdv 就要用 value
                    const {
                        modelValue: value,
                        'onUpdate:modelValue': onUpdateValue,
                        ...otherAttrs
                    } = attrs;

                    return h(resolveComponent('a-input'), {
                        value,
                        'onUpdate:value': onUpdateValue,
                        ...otherAttrs,
                        ...props
                    }, slots);
                };
            }
            // 'a-input'
        }),
        number: 'el-input-number',
        integer: 'el-input-number',
    },
    formats: {
        color: 'el-color-picker',
        time: TimePickerWidget, // 20:20:39+00:00
        date: DatePickerWidget, // 2018-11-13
        'date-time': DateTimePickerWidget, // 2018-11-13T20:20:39+00:00
    },
    common: {
        select: SelectWidget,
        radioGroup: RadioWidget,
        checkboxGroup: CheckboxesWidget,
    },
    widgetComponents
};
