/**
 * Created by Liu.Jun on 2021/2/21 9:38 下午.
 */

import { defineComponent, h } from 'vue';
import { resolveComponent } from '@lljj/vjsf-utils/vue3Utils';

// 转换antdv 非moduleValue的v-model组件
export const modelValueComponent = (component, {
    model = 'value'
} = {}) => defineComponent({
    inheritAttrs: false,
    setup(props, { attrs, slots }) {
        return () => {
            const {
                modelValue: value,
                'onUpdate:modelValue': onUpdateValue,
                ...otherAttrs
            } = attrs;

            // eg: 'a-input'
            return h(resolveComponent(component), {
                [model]: value,
                [`onUpdate:${model}`]: onUpdateValue,
                ...otherAttrs
            }, slots);
        };
    }
});
