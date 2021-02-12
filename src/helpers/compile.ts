import * as handlebars from 'handlebars';

export default (input: string, context = {}) => {
    return handlebars.compile(input)(context);
};

