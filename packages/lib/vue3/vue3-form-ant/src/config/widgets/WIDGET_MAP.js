/**
 * Created by Liu.Jun on 2020/4/21 18:23.
 */

// widget 组件对应elementUi 配置表

import { h } from 'vue';
import widgetComponents from './index';
import { modelValueComponent } from '../utils';

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
        boolean: modelValueComponent('a-switch', {
            model: 'checked'
        }),
        string: modelValueComponent('a-input'),
        number: modelValueComponent('a-input-number'),
        integer: modelValueComponent('a-input-number'),
    },
    formats: {
        color: {
            setup(props, { attrs }) {
                return () => h(modelValueComponent('a-input'), {
                    type: 'color',
                    ...attrs,
                });
            }
        },
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
