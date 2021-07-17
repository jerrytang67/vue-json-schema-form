/** @license @ttwork/vue3-form-element (c) 2020-2021 JerryTang License: Apache-2.0 */
import { resolveComponent, openBlock, createBlock, withCtx, Fragment, renderList, createTextVNode, toDisplayString, h, ref, watch, getCurrentInstance, defineComponent, onMounted } from 'vue';
import createVue3Core from '@ttwork/vue3-form-core';
export { SchemaField, fieldProps } from '@ttwork/vue3-form-core';
export { default as i18n } from '@ttwork/vjsf-utils/i18n';
import { resolveComponent as resolveComponent$1 } from '@ttwork/vjsf-utils/vue3Utils';
import * as vueUtils from '@ttwork/vjsf-utils/vue3Utils';
export { vueUtils };
import * as formUtils from '@ttwork/vjsf-utils/formUtils';
export { formUtils };
import * as validate from '@ttwork/vjsf-utils/schema/validate';
export { validate as schemaValidate };
export { default as getDefaultFormState } from '@ttwork/vjsf-utils/schema/getDefaultFormState';
import { parseDateString, openNewPage } from '@ttwork/vjsf-utils/utils';

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
  const _component_el_checkbox = resolveComponent("el-checkbox");

  const _component_el_checkbox_group = resolveComponent("el-checkbox-group");

  return openBlock(), createBlock(_component_el_checkbox_group, _ctx.$attrs, {
    default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList($props.enumOptions, (item, index) => {
      return openBlock(), createBlock(_component_el_checkbox, {
        key: index,
        label: item.value
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1
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
  const _component_el_radio = resolveComponent("el-radio");

  const _component_el_radio_group = resolveComponent("el-radio-group");

  return openBlock(), createBlock(_component_el_radio_group, _ctx.$attrs, {
    default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList($props.enumOptions, (item, index) => {
      return openBlock(), createBlock(_component_el_radio, {
        key: index,
        label: item.value
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1
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
  const _component_el_option = resolveComponent("el-option");

  const _component_el_select = resolveComponent("el-select");

  return openBlock(), createBlock(_component_el_select, _ctx.$attrs, {
    default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList($props.enumOptions, (item, index) => {
      return openBlock(), createBlock(_component_el_option, {
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
  } = parseDateString(dateString, false);
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
      return h(resolveComponent$1('el-date-picker'), {
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
      return h(resolveComponent$1('el-date-picker'), {
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
  } = parseDateString(dateString, true);
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
    const originValue = ref(formatTimeObj(props.modelValue)); // 不需要响应式

    let formatValue = props.modelValue; // 如果外部修改了值

    watch(() => props.modelValue, newVal => {
      if (newVal !== formatValue) {
        // 更新内部值
        originValue.value = formatTimeObj(newVal);
      }
    });
    return () => h(resolveComponent$1('el-time-picker'), { ...attrs,
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


    const fileListRef = ref(defaultFileList);

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

    const globalProperties = getCurrentInstance().appContext.config.globalProperties;
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
          if (url) openNewPage(url);
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
        default: () => h(resolveComponent$1('el-button'), {
          type: 'primary'
        }, {
          default: () => props.btnText
        }),
        ...(props.slots || {})
      };
      return h(resolveComponent$1('el-upload'), data, childVNode);
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
    form: defineComponent({
      inheritAttrs: false,

      setup(props, {
        attrs,
        slots
      }) {
        const formRef = ref(null);

        if (attrs.setFormRef) {
          onMounted(() => {
            attrs.setFormRef(formRef.value);
          });
        }

        return () => {
          // eslint-disable-next-line no-unused-vars
          const {
            setFormRef,
            ...otherAttrs
          } = attrs;
          return h(resolveComponent$1('el-form'), {
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
const JsonSchemaForm = createVue3Core(globalOptions);

export default JsonSchemaForm;
export { globalOptions };
