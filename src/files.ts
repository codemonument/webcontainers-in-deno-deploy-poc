export const files = {
    'package.json': {
        file: {
            contents: await Deno.readTextFile('example-node/package.json')
        },
    },
};