/**
 * Created by Liu.Jun on 2019/11/29 11:25.
 */

import { h } from 'vue';
import createVue3Core, { fieldProps, SchemaField } from '@lljj/vue3-form-core';

import i18n from '@lljj/vjsf-utils/i18n';
import * as vueUtils from '@lljj/vjsf-utils/vue3Utils';
import * as formUtils from '@lljj/vjsf-utils/formUtils';
import * as schemaValidate from '@lljj/vjsf-utils/schema/validate';
import getDefaultFormState from '@lljj/vjsf-utils/schema/getDefaultFormState';
import WIDGET_MAP from './config/widgets/WIDGET_MAP.js';

import './style.css';

const globalOptions = {
    WIDGET_MAP,
    COMPONENT_MAP: {
        form: 'a-form',
        // formItem: 'a-form-item',
        formItem: {
            setup(props, { attrs, slots }) {
                return () => {
                    const { prop, ...originAttrs } = attrs;

                    return h(vueUtils.resolveComponent('a-form-item'), {
                        ...originAttrs,
                        name: prop
                    }, slots);
                };
            }
        },
        button: 'a-button',
        popover: {
            setup(props, { attrs, slots }) {
                return () => h(vueUtils.resolveComponent('a-popover'), {
                }, slots);
            }
        },

    },
    ICONS_MAP: {
        question: 'el-icon-question',
        moveUp: 'el-icon-caret-top',
        moveDown: 'el-icon-caret-bottom',
        close: 'el-icon-close',
        plus: 'el-icon-plus'
    }
};

const JsonSchemaForm = createVue3Core(globalOptions);

export default JsonSchemaForm;

export {
    globalOptions,
    SchemaField,
    getDefaultFormState,
    fieldProps,
    vueUtils,
    formUtils,
    schemaValidate,
    i18n
};
