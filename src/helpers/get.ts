import * as fs from 'fs';
import compile from './compile';

export default (component: string, args = {} ) => {
    try {
        const [first, second = 'def'] = component.split('.');
        
        const file = fs.readFileSync(`./src/components/${first}s/${first}.${second}.hbs`, 'utf-8');
        
        return compile(file, args);
    } catch (O_O) {
        throw new Error(O_O);
    }
};

