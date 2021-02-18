/**
 * Created by Liu.Jun on 2019/11/29 11:25.
 */

import {
    h, ref, onMounted, defineComponent
} from 'vue';
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
        form: defineComponent({
            inheritAttrs: false,
            setup(props, { attrs, slots }) {
                // 处理 labelPosition 参数和layout之间转换
                const labelPositionMap = {
                    top: {
                        labelAlign: 'left',
                        layout: 'vertical'
                    },
                    left: {
                        layout: 'horizontal',
                        labelAlign: 'left'
                    },
                    right: {
                        layout: 'horizontal',
                        labelAlign: 'right'
                    }
                };

                // 返回当前的 form ref
                const formRef = ref(null);
                if (attrs.getFormRef) {
                    onMounted(() => {
                        // form组件实例上附加一个 validate 方法
                        formRef.value.$$validate = (callBack) => {
                            formRef.value.validate().then((res) => {
                                callBack(true, res);
                            }).catch((err) => {
                                callBack(false, err.errorFields);
                            });
                        };
                        attrs.getFormRef(formRef.value);
                    });
                }

                return () => {
                    const {
                        // eslint-disable-next-line no-unused-vars
                        labelPosition, labelWidth, model, ...otherAttrs
                    } = attrs;

                    return h(vueUtils.resolveComponent('a-form'), {
                        ref: formRef,
                        model: model.value,
                        ...labelPositionMap[labelPosition || 'top'],
                        ...otherAttrs
                    }, slots);
                };
            }
        }),
        formItem: defineComponent({
            inheritAttrs: false,
            setup(props, { attrs, slots }) {
                const formItemRef = ref(null);

                onMounted(() => {
                    console.log(formItemRef.value.onFieldBlur);
                });
                return () => {
                    const { prop, ...originAttrs } = attrs;
                    return h(vueUtils.resolveComponent('a-form-item'), {
                        ...originAttrs,
                        ref: formItemRef,
                        name: prop
                    }, slots);
                };
            }
        }),
        button: 'a-button',
        popover: defineComponent({
            setup(props, { attrs, slots }) {
                const {
                    default: contentSlot,
                    reference: defaultSlot,
                } = slots;

                return () => h(vueUtils.resolveComponent('a-popover'), {
                    attrs
                }, {
                    default: defaultSlot,
                    content: contentSlot,
                });
            }
        }),

    },
    ICONS_MAP: {
        question: 'el-icon-question',
        moveUp: 'el-icon-caret-top',
        moveDown: 'el-icon-caret-bottom',
        close: 'el-icon-close',
        plus: 'el-icon-plus'
    },
    HELPERS: {
        // 是否mini显示 description
        isMiniDes(formProps) {
            return formProps && ['left', 'right'].includes(formProps.labelPosition);
        }
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
