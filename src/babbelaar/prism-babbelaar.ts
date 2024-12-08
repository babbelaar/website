Prism.languages.babbelaar = {
    'string': [
        {
            pattern: /€"[^"]*"/,
            greedy: true,
            inside: {
                'interpolation': {
                    pattern: /\{[^{}]*}/,
                    lookbehind: true,
                    inside: {
                        'keyword': /persoon/,
                    },
                },
                'string': /[\s\S]+/
            }
        },
        {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: true,
            greedy: true
        },
    ],
    'comment': {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: true
    },



    'type-definition': {
        pattern: /(\b(?:koppeling|structuur)\s+)\w+/,
        lookbehind: true,
    },

    'function-definition': {
        pattern: /(\bwerkwijze\s+)\w+/,
        lookbehind: true,
        alias: 'function'
    },
    'function': /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,

    'constant': [
        /\b[A-Z_][A-Z_\d]+\b/,
        /\b(onwaar|waar)\b/,
    ],
    // 'class-name': [
    //     /\b[A-Z]\w*\b/,
    //     /(bool|g8|g16|g32|g64|Slinger|teken)/,
    // ],
    'class-name': /(bool|g8|g16|g32|g64|Slinger|teken)/,

    'keyword': /\b(als|bekeer|dit|in|koppelvlak|nieuw|op|reeks|stel|structuur|uitbreiding|veld|volg|werkwijze)\b/,

    'property': /\w+/,

    'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    'operator': /:/,
    'boolean': /\b(?:false|true)\b/,
    'punctuation': /[{}[\],]/,
};

Prism.languages['babbelaar']['string'][0]['inside']['interpolation']['inside'] = Prism.languages['babbelaar'];