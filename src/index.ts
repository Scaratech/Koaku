import { CssJson } from './types';

export function parse(css: string): CssJson {
    const json: CssJson = {};

    // Fuck Regex
    css = css.split('\n').join('').split('  ').join(' ').trim();

    const blocks = css.split('}').filter(block => block.trim());

    for (const block of blocks) {
        const [selector, declarationBlock] = block.split('{').map(part => part.trim());

        if (!selector || !declarationBlock) continue;

        const declarations = declarationBlock.split(';').filter(Boolean);
        json[selector] = {};

        for (const declaration of declarations) {
            const [property, value] = declaration.split(':').map(part => part.trim());

            if (property && value) {
                json[selector][property] = value;
            }
        }
    }

    return json;
}

export function generate(json: CssJson): string {
    let css = '';

    for (const selector in json) {
        css += `${selector} {\n`;
        for (const property in json[selector]) {
            css += `    ${property}: ${json[selector][property]};\n`;
        }
        css += `}\n\n`;
    }

    return css.trim();
}