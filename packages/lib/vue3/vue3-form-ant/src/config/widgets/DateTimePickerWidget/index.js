/**
 * Created by Liu.Jun on 2021/2/23 10:21 下午.
 */

import { h } from 'vue';
import { resolveComponent } from '@lljj/vjsf-utils/vue3Utils';
import { modelValueComponent } from '../../utils';

const baseComponent = {
    name: 'DatePickerWidget',
    inheritAttrs: false,
    setup(props, { attrs }) {
        return () => {
            const { isNumberValue, isRange, ...otherAttrs } = attrs;
            return h(resolveComponent(isRange ? 'a-range-picker' : 'a-date-picker'), {
                valueFormat: isNumberValue ? 'x' : 'YYYY-MM-DDTHH:mm:ss[Z]',
                showTime: true,
                ...otherAttrs
            });
        };
    }
};

const moduleValeComponent = modelValueComponent(baseComponent, {
    model: 'value'
});

export default moduleValeComponent;
