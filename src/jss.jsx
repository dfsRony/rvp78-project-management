import { jssPreset } from '@material-ui/core/styles';
import { create } from 'jss';
import jssTemplate from 'jss-plugin-template';

export const jss = create({
    plugins: [jssTemplate(), ...jssPreset().plugins]
})