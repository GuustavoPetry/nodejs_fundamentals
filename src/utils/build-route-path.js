// Função utilitária que utiliza regex para capturar Route Parameters de forma dinâmica
export function buildRoutePath(path) {
    const routeParametersRegex = /:([a-zA-z]+)/g;

    console.log(Array.from(path.matchAll(routeParametersRegex)));
}