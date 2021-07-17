/** @license @ttwork/vue3-form-element (c) 2020-2021 JerryTang License: Apache-2.0 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('@ttwork/vue3-form-core'), require('@ttwork/vjsf-utils/i18n'), require('@ttwork/vjsf-utils/vue3Utils'), require('@ttwork/vjsf-utils/formUtils'), require('@ttwork/vjsf-utils/schema/validate'), require('@ttwork/vjsf-utils/schema/getDefaultFormState'), require('@ttwork/vjsf-utils/utils')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue', '@ttwork/vue3-form-core', '@ttwork/vjsf-utils/i18n', '@ttwork/vjsf-utils/vue3Utils', '@ttwork/vjsf-utils/formUtils', '@ttwork/vjsf-utils/schema/validate', '@ttwork/vjsf-utils/schema/getDefaultFormState', '@ttwork/vjsf-utils/utils'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.vue3FormElement = {}, global.Vue, global.createVue3Core, global.i18n, global.vueUtils, global.formUtils, global.validate, global.getDefaultFormState, global.utils));
}(this, (function (exports, vue, createVue3Core, i18n, vueUtils, formUtils, validate, getDefaultFormState, utils) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var createVue3Core__default = /*#__PURE__*/_interopDefaultLegacy(createVue3Core);
    var i18n__default = /*#__PURE__*/_interopDefaultLegacy(i18n);
    var vueUtils__namespace = /*#__PURE__*/_interopNamespace(vueUtils);
    var formUtils__namespace = /*#__PURE__*/_interopNamespace(formUtils);
    var validate__namespace = /*#__PURE__*/_interopNamespace(validate);
    var getDefaultFormState__default = /*#__PURE__*/_interopDefaultLegacy(getDefaultFormState);

    var script = {
      name: 'CheckboxesWidget',
      props: {
        enumOptions: {
          default: () => [],
          type: [Array]
        }
      }
    };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_el_checkbox = vue.resolveComponent("el-checkbox");

      const _component_el_checkbox_group = vue.resolveComponent("el-checkbox-group");

      return vue.openBlock(), vue.createBlock(_component_el_checkbox_group, _ctx.$attrs, {
        default: vue.withCtx(() => [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.enumOptions, (item, index) => {
          return vue.openBlock(), vue.createBlock(_component_el_checkbox, {
            key: index,
            label: item.value
          }, {
            default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(item.label), 1
            /* TEXT */
            )]),
            _: 2
            /* DYNAMIC */

          }, 1032
          /* PROPS, DYNAMIC_SLOTS */
          , ["label"]);
        }), 128
        /* KEYED_FRAGMENT */
        ))]),
        _: 1
        /* STABLE */

      }, 16
      /* FULL_PROPS */
      );
    }

    script.render = render;
    script.__file = "src/config/widgets/CheckboxesWidget/index.vue";

    var script$1 = {
      name: 'RadioWidget',
      props: {
        enumOptions: {
          default: () => [],
          type: [Array]
        }
      }
    };

    function render$1(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_el_radio = vue.resolveComponent("el-radio");

      const _component_el_radio_group = vue.resolveComponent("el-radio-group");

      return vue.openBlock(), vue.createBlock(_component_el_radio_group, _ctx.$attrs, {
        default: vue.withCtx(() => [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.enumOptions, (item, index) => {
          return vue.openBlock(), vue.createBlock(_component_el_radio, {
            key: index,
            label: item.value
          }, {
            default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(item.label), 1
            /* TEXT */
            )]),
            _: 2
            /* DYNAMIC */

          }, 1032
          /* PROPS, DYNAMIC_SLOTS */
          , ["label"]);
        }), 128
        /* KEYED_FRAGMENT */
        ))]),
        _: 1
        /* STABLE */

      }, 16
      /* FULL_PROPS */
      );
    }

    script$1.render = render$1;
    script$1.__file = "src/config/widgets/RadioWidget/index.vue";

    var script$2 = {
      name: "SelectWidget",
      props: {
        enumOptions: {
          default: () => [],
          type: [Array]
        }
      }
    };

    function render$2(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_el_option = vue.resolveComponent("el-option");

      const _component_el_select = vue.resolveComponent("el-select");

      return vue.openBlock(), vue.createBlock(_component_el_select, _ctx.$attrs, {
        default: vue.withCtx(() => [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.enumOptions, (item, index) => {
          return vue.openBlock(), vue.createBlock(_component_el_option, {
            key: index,
            label: item.label,
            value: item.value
          }, null, 8
          /* PROPS */
          , ["label", "value"]);
        }), 128
        /* KEYED_FRAGMENT */
        ))]),
        _: 1
        /* STABLE */

      }, 16
      /* FULL_PROPS */
      );
    }

    script$2.render = render$2;
    script$2.__file = "src/config/widgets/SelectWidget/index.vue";

    /**
     * Created by Liu.Jun on 2020/7/22 13:21.
     */

    function isEmptyValue(value) {
      return value === null || value === '' || Array.isArray(value) && value.every(item => item === '');
    }

    const formatDateStr = dateString => {
      const {
        year,
        month,
        day
      } = utils.parseDateString(dateString, false);
      return `${year}-${month}-${day}`;
    };

    var DatePickerWidget = {
      name: 'DatePickerWidget',
      inheritAttrs: false,

      setup(props, {
        attrs,
        slots
      }) {
        return () => {
          const {
            isNumberValue,
            isRange,
            ...otherProps
          } = attrs || {};
          return vue.h(vueUtils.resolveComponent('el-date-picker'), {
            type: isRange ? 'daterange' : 'date',
            ...otherProps,
            'onUpdate:modelValue': val => {
              let trueVal;

              if (isRange) {
                trueVal = isEmptyValue(val) ? [] : val.map(item => isNumberValue ? new Date(item).valueOf() : formatDateStr(item));
              } else {
                trueVal = isEmptyValue(val) ? undefined : isNumberValue ? new Date(val).valueOf() : formatDateStr(val);
              }

              attrs['onUpdate:modelValue'].apply(attrs, [trueVal]);
            }
          }, slots);
        };
      }

    };

    /**
     * Created by Liu.Jun on 2020/7/22 13:21.
     */
    var DateTimePickerWidget = {
      name: 'DateTimePickerWidget',
      inheritAttrs: false,

      setup(props, {
        attrs,
        slots
      }) {
        const trueValue = (isRange, isNumberValue, val) => {
          if (isRange) {
            return val === null ? [] : val.map(item => new Date(item)[isNumberValue ? 'valueOf' : 'toISOString']());
          }

          return val === null ? undefined : new Date(val)[isNumberValue ? 'valueOf' : 'toISOString']();
        };

        return () => {
          const {
            isNumberValue,
            isRange,
            ...otherProps
          } = attrs || {};
          return vue.h(vueUtils.resolveComponent('el-date-picker'), {
            type: isRange ? 'datetimerange' : 'datetime',
            ...otherProps,
            'onUpdate:modelValue': val => {
              const trueVal = trueValue(isRange, isNumberValue, val);
              attrs['onUpdate:modelValue'].apply(attrs, [trueVal]);
            }
          }, slots);
        };
      }

    };

    /**
     * Created by Liu.Jun on 2020/7/22 13:22.
     */

    const formatTimeStr = dateString => {
      const {
        hour,
        minute,
        second
      } = utils.parseDateString(dateString, true);
      return `${hour}:${minute}:${second}`;
    };

    const formatTimeObj = timeStr => {
      if (timeStr instanceof Date) {
        return timeStr;
      } // 取当前时间 改时分秒


      if (typeof timeStr === 'string') {
        const [hours, minutes, seconds] = timeStr.split(':');
        const curTime = new Date();
        curTime.setHours(+hours);
        curTime.setMinutes(+minutes);
        curTime.setSeconds(+seconds);
        return curTime;
      } // 其它格式清空


      return undefined;
    };

    var TimePickerWidget = {
      name: 'TimePickerWidget',
      inheritAttrs: false,
      props: {
        modelValue: {
          default: null,
          type: null
        }
      },

      setup(props, {
        attrs,
        slots
      }) {
        // hack element plus timePicker 变为object类型
        const originValue = vue.ref(formatTimeObj(props.modelValue)); // 不需要响应式

        let formatValue = props.modelValue; // 如果外部修改了值

        vue.watch(() => props.modelValue, newVal => {
          if (newVal !== formatValue) {
            // 更新内部值
            originValue.value = formatTimeObj(newVal);
          }
        });
        return () => vue.h(vueUtils.resolveComponent('el-time-picker'), { ...attrs,
          modelValue: originValue.value,
          'onUpdate:modelValue': val => {
            originValue.value = val; // 更新并缓存内部 timeStr

            formatValue = val === null ? undefined : formatTimeStr(val); // 更新外部的值

            attrs['onUpdate:modelValue'].apply(attrs, [formatValue]);
          }
        }, slots);
      }

    };

    /**
     * Created by Liu.Jun on 2020/11/26 10:01 下午.
     */
    // https://run.mocky.io/v3/518d7af7-204f-45ab-9628-a6e121dab8ca

    var UploadWidget = {
      name: 'UploadWidget',
      props: {
        modelValue: {
          default: null,
          type: [String, Array]
        },
        responseFileUrl: {
          default: () => res => res ? res.url || res.data && res.data.url : '',
          type: [Function]
        },
        btnText: {
          type: String,
          default: '点击上传'
        },
        // 传入 VNode
        slots: {
          type: null,
          default: null
        }
      },

      setup(props, {
        attrs,
        emit
      }) {
        // 设置默认 fileList
        const curModelValue = props.modelValue;
        const isArrayValue = Array.isArray(curModelValue);

        const defaultFileList = attrs.fileList || (() => {
          if (isArrayValue) {
            return curModelValue.map((item, index) => ({
              name: `已上传文件（${index + 1}）`,
              url: item
            }));
          }

          if (curModelValue) {
            return [{
              name: '已上传文件',
              url: curModelValue
            }];
          }

          return [];
        })(); // fileList


        const fileListRef = vue.ref(defaultFileList);

        const getUrl = fileItem => fileItem && (fileItem.response && props.responseFileUrl(fileItem.response) || fileItem.url) || '';

        const emitValue = emitFileList => {
          // v-model
          let curValue;

          if (isArrayValue) {
            curValue = emitFileList.length ? emitFileList.reduce((pre, item) => {
              const url = getUrl(item);
              if (url) pre.push(url);
              return pre;
            }, []) : [];
          } else {
            const fileItem = emitFileList[emitFileList.length - 1];
            curValue = getUrl(fileItem);
          }

          emit('update:modelValue', curValue);
        };

        const globalProperties = vue.getCurrentInstance().appContext.config.globalProperties;
        return () => {
          const data = {
            fileList: fileListRef.value,
            'on-exceed': () => {
              if (globalProperties.$message) {
                globalProperties.$message.warning('超出文件上传数');
              }
            },
            'on-error': () => {
              if (globalProperties.$message) {
                globalProperties.$message.error('文件上传失败');
              }
            },
            'on-preview': file => {
              const url = getUrl(file);
              if (url) utils.openNewPage(url);
            },
            ...attrs,
            'on-remove': (file, fileList) => {
              emitValue(fileList);

              if (attrs['on-remove']) {
                attrs['on-remove'](file, fileList);
              }
            },
            'on-success': (response, file, fileList) => {
              emitValue(fileList); // 用户注册的 onSuccess

              if (attrs['on-success']) {
                attrs['on-success'](response, file, fileList);
              }
            }
          };
          if (!isArrayValue) data.limit = 1;
          const childVNode = {
            default: () => vue.h(vueUtils.resolveComponent('el-button'), {
              type: 'primary'
            }, {
              default: () => props.btnText
            }),
            ...(props.slots || {})
          };
          return vue.h(vueUtils.resolveComponent('el-upload'), data, childVNode);
        };
      }

    };

    /**
     * Created by Liu.Jun on 2020/5/17 10:41 下午.
     */
    const widgetComponents = {
      CheckboxesWidget: script,
      RadioWidget: script$1,
      SelectWidget: script$2,
      TimePickerWidget,
      DatePickerWidget,
      DateTimePickerWidget,
      UploadWidget
    };

    /**
     * Created by Liu.Jun on 2020/4/21 18:23.
     */
    const {
      CheckboxesWidget,
      RadioWidget,
      SelectWidget,
      TimePickerWidget: TimePickerWidget$1,
      DatePickerWidget: DatePickerWidget$1,
      DateTimePickerWidget: DateTimePickerWidget$1
    } = widgetComponents;
    var WIDGET_MAP = {
      types: {
        boolean: 'el-switch',
        string: 'el-input',
        number: 'el-input-number',
        integer: 'el-input-number'
      },
      formats: {
        color: 'el-color-picker',
        time: TimePickerWidget$1,
        // 20:20:39+00:00
        date: DatePickerWidget$1,
        // 2018-11-13
        'date-time': DateTimePickerWidget$1 // 2018-11-13T20:20:39+00:00

      },
      common: {
        select: SelectWidget,
        radioGroup: RadioWidget,
        checkboxGroup: CheckboxesWidget
      },
      widgetComponents
    };

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z = ".genFromComponent.el-form--label-top .el-form-item__label{line-height:26px;padding-bottom:6px;font-size:14px}.genFromComponent .el-checkbox,.genFromComponent .el-color-picker{vertical-align:top}";
    styleInject(css_248z);

    /**
     * Created by Liu.Jun on 2019/11/29 11:25.
     */
    const globalOptions = {
      WIDGET_MAP,
      COMPONENT_MAP: {
        form: vue.defineComponent({
          inheritAttrs: false,

          setup(props, {
            attrs,
            slots
          }) {
            const formRef = vue.ref(null);

            if (attrs.setFormRef) {
              vue.onMounted(() => {
                attrs.setFormRef(formRef.value);
              });
            }

            return () => {
              // eslint-disable-next-line no-unused-vars
              const {
                setFormRef,
                ...otherAttrs
              } = attrs;
              return vue.h(vueUtils.resolveComponent('el-form'), {
                ref: formRef,
                ...otherAttrs
              }, slots);
            };
          }

        }),
        formItem: 'el-form-item',
        button: 'el-button',
        popover: 'el-popover'
      },
      HELPERS: {
        // 是否mini显示 description
        isMiniDes(formProps) {
          return formProps && ['left', 'right'].includes(formProps.labelPosition);
        }

      }
    };
    const JsonSchemaForm = createVue3Core__default['default'](globalOptions);

    Object.defineProperty(exports, 'SchemaField', {
        enumerable: true,
        get: function () {
            return createVue3Core.SchemaField;
        }
    });
    Object.defineProperty(exports, 'fieldProps', {
        enumerable: true,
        get: function () {
            return createVue3Core.fieldProps;
        }
    });
    Object.defineProperty(exports, 'i18n', {
        enumerable: true,
        get: function () {
            return i18n__default['default'];
        }
    });
    exports.vueUtils = vueUtils__namespace;
    exports.formUtils = formUtils__namespace;
    exports.schemaValidate = validate__namespace;
    Object.defineProperty(exports, 'getDefaultFormState', {
        enumerable: true,
        get: function () {
            return getDefaultFormState__default['default'];
        }
    });
    exports.default = JsonSchemaForm;
    exports.globalOptions = globalOptions;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
