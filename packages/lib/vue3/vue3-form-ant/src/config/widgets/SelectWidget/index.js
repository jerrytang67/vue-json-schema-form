/**
 * Created by Liu.Jun on 2021/2/23 10:21 下午.
 */

import { h } from 'vue';
import { resolveComponent } from '@lljj/vjsf-utils/vue3Utils';
import { modelValueComponent } from '../../utils';

const baseComponent = {
    name: 'SelectWidget',
    props: {
        enumOptions: {
            default: () => [],
            type: [Array]
        }
    },
    setup(props, { attrs }) {
        return () => h(resolveComponent('a-select'), {
            // mode: attrs.multiple ? 'multiple' : 'default',
            ...attrs,
        }, {
            default() {
                return props.enumOptions.map((item, index) => h(resolveComponent('a-select-option'), {
                    key: index,
                    value: item.value
                }, {
                    default: () => item.label
                }));
            }
        });
    }
};

const moduleValeComponent = modelValueComponent(baseComponent, {
    model: 'value'
});

export default moduleValeComponent;
