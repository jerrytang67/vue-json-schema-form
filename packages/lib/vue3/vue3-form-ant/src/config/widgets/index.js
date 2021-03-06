/**
 * Created by Liu.Jun on 2020/5/17 10:41 下午.
 */

import CheckboxesWidget from './CheckboxesWidget';
import RadioWidget from './RadioWidget';
import SelectWidget from './SelectWidget';
import DatePickerWidget from './DatePickerWidget';
import DateTimePickerWidget from './DateTimePickerWidget';
import TimePickerWidget from './TimePickerWidget';
import UploadWidget from './UploadWidget';

import { modelValueComponent } from '../utils';

const widgetComponents = {
    CheckboxesWidget,
    RadioWidget,
    SelectWidget,
    TimePickerWidget,
    DatePickerWidget,
    DateTimePickerWidget,
    UploadWidget,
    AutoCompleteWidget: modelValueComponent('a-auto-complete'),
    SliderWidget: modelValueComponent('a-slider'),
    SwitchWidget: modelValueComponent('a-switch'),
};

export default widgetComponents;
